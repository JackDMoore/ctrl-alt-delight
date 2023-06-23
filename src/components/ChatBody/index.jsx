import React from 'react'
import {useNavigate} from "react-router-dom"
import './style.css'

const ChatBody = ({messages, typingStatus, lastMessageRef}) => { 
  const navigate = useNavigate()
  

  const handleLeaveChat = () => {
    localStorage.removeItem("username")
    navigate("/")
    window.location.reload()
  }
  
  return (
    <>
    <div id='whole__chat'>
    <div className='chat__whole'>
      <div className='chat__mainHeader'>
          <p>Direct Message</p>
          <button className='leaveChat__btn' role="button" onClick={handleLeaveChat}><span>Leave Chat</span></button>
        </div>


        <div className='message__container'>
          {messages.map(message => (
            message.name === localStorage.getItem("username") ? (
              <div className="message__chats" key={message.id}>
            <p className='sender__name'>You</p>
            <div className='message__sender'>
                <p>{message.text}</p>
            </div>
          </div>
            ): (
              <div className="message__chats" key={message.id}>
            <p>{message.name}</p>
            <div className='message__recipient'>
                <p>{message.text}</p>
            </div>
          </div>
            )
            ))}

          <div className='message__status'>
            <p>{typingStatus}</p>
          </div>
          <div ref={lastMessageRef} />   
        </div>
        </div>
        </div>
    </>
  )
}

export default ChatBody
