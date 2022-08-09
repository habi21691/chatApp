import React, { useEffect, useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';

function Chat({user,socket,room}) {
     
    const [currentChat , setCurrentChat] = useState("");

    useEffect( ()=>{
         socket.on("receive_Message", (data)=>{
            console.log(data)
         })
    }, [socket])

    const sendMessage = async (event) =>{
        event.preventDefault();
        if(currentChat !== ""){
           const message = {
             room:room,
             author:user,
             massege:currentChat,
             time: new Date(Date.now()).getHours() + ":"+ new Date(Date.now()).getMinutes()

           }
        //    console.log(message)
           await socket.emit("Send_Message", message)
        }
    }

  return (
    <div className='chat-window'>
        <div className='chat-header'>
            <p>Live Chat</p>
        </div>
        <div className=' chat-footer'> 
        <input
        placeholder='hey...'
        type={'text'}
        onChange={(event) => {
            setCurrentChat(event.target.value)
        }}/>
        <Button variant='contained' onClick={sendMessage} className='b2'><SendIcon/></Button>
         </div>
    </div>
  )
}

export default Chat