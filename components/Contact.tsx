'use client'
import { useState } from 'react'

function Contact() {
  const [message, setMessage] = useState('')
  return (
    <>
      <div className='py-20 px-12 h-screen'>
        <div>Wanna talk? Send me a message</div>
        <input
          value={message}
          className='px-4 py-2 mt-4 flex-1 rounded focus:outline-none'
          type='text'
          placeholder='Type your message here...'
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
    </>
  )
}

export default Contact
