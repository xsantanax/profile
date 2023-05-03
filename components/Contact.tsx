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

function Contact() {
  const [prompt, setPrompt] = useState('')

  const [messages] = useCollection(
    // collection(db, "users", session?.user?.email!, "chats", id, "messages")
    collection(db, 'messages')
  )

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!prompt) return

    const input = prompt.trim()
    setPrompt('')

    const message: Message = {
      text: input,
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
    <div className='bodyItem'>
      <div>Wanna talk? Send me a message</div>

      <form onSubmit={sendMessage} className='py-5 space-x-5 flex'>
        <input
          value={prompt}
          className='px-4 py-2 rounded focus:outline-none w-[300px]'
          type='text'
          placeholder='Type your message here...'
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          type='submit'
          disabled={!prompt}
          className='bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded
          disabled:cursor-not-allowed disabled:bg-gray-300'
        >
          <PaperAirplaneIcon className='h-4 w-4 rotate-45' />
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
  )
}

export default Contact
