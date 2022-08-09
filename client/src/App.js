import React, { useState } from 'react'
import io from 'socket.io-client';
import Chat from './Chat';
import './app.css'
const socket = io.connect("http://localhost:3001");

const App = () => {
  const [user, setUser] = useState("")
  const [room , setRoom] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if( user !== " " && room!== ""){
      socket.emit("join_room", room)
    }
    // event.preventDefault();
    // console.log(messages)
    // const data = { message: "hello bulshet" };
    // socket.emit("send_message", data);

  }

  return (
    <div>
    <div className='join-chat-container'>
      <h1> Join The Chat</h1>
      <input
        value={user}
        placeholder='Messages'
        onChange={(event) => { setUser(event.target.value) }}

      />
      <input
      value={room}
      placeholder='enter the rooom id'
      onChange={(event) => {
        setRoom(event.target.value)
      }}/>
      <button onClick={handleSubmit} className='b1'>Join The Room</button>
    </div>
      <Chat socket={socket} user={user} room={room}/>
      </div>
  )
}

export default App
