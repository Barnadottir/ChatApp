import React, { useState } from 'react'
import Sidebar from './sidebar/Sidebar'
import ChatForm from './ChatwindowComponents/ChatForm'

const ChatWindow = () => {
  const [currentChat, setCurrentChat] = useState<string | null>(null)
  return (
    <div className='h-full w-full flex justify-between items-center'>
        <Sidebar setCurrentChat={setCurrentChat}/>
        <ChatForm receiverEmail={currentChat}/>
    </div>
  )
}

export default ChatWindow;
