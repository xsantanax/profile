'use client'
import { FormEvent, useState } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'

import {
  collection,
  addDoc,
  serverTimestamp
  //doc, deleteDoc, orderBy, query
} from 'firebase/firestore'
import { db } from '../firebase'
import SectionHeader from './SectionHeader'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')

  const [messages] = useCollection(
    // collection(db, "users", session?.user?.email!, "chats", id, "messages")
    collection(db, 'messages')
  )

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!text) return

    const message: Message = {
      name,
      email,
      text,
      createdAt: serverTimestamp()
      // user: {
      //   _id: session?.user?.email!,
      //   name: session?.user?.name!,
      //   avatar:
      //     session?.user?.image ||
      //     `https://ui-avatars.com/api/?name=${session?.user?.name!}`
      // }
    }

    await addDoc(
      collection(
        db,
        // "users",
        // session?.user?.email!,
        // "chats",
        // chatId,
        'messages'
      ),
      message
    )
  }

  return (
    <div id='contact' className='bodyItemWrapper'>
      <SectionHeader title='Contact' />
      <div className='bodyItemContent flex-col'>
        <form onSubmit={sendMessage} className='space-y-5 flex flex-col'>
          <input
            value={name}
            className='px-4 py-2 rounded focus:outline-none text-black'
            type='text'
            placeholder='Your name'
            onChange={(e) => setName(e.target.value)}
          />

          <input
            value={email}
            className='px-4 py-2 rounded focus:outline-none text-black'
            type='text'
            placeholder='Your email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            value={text}
            className='px-4 py-2 h-[160px] rounded focus:outline-none text-black'
            placeholder='Type your message here...'
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type='submit'
            // disabled={!name || !email || !text}
            className='bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded
          disabled:cursor-not-allowed disabled:bg-gray-300 flex justify-center'
          >
            <div>Send</div>
            <PaperAirplaneIcon className='h-4 w-4 -rotate-45 mt-[3px] ml-3' />
          </button>
        </form>

        {messages?.docs.map((message) => (
          <div
            key={message.id}
            className='flex  items-center space-x-4 p-5 border-b border-gray-200 hover:bg-gray-100 cursor-pointer'
          >
            {message.data().text}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contact
