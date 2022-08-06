import React , {useState}from 'react'
import io from 'socket.io-client';

const socket = io.connect("http://localhost:3001");

 const App = () => {
           const [messages , setMessages] = useState([])
    const handleSubmit = () => {
        // event.preventDefault();
        socket.emit("send_message", 'Hello bullshit');
  
    }

  return (
    <div>
        <input
        value={messages}
        placeholder='Messages' 
        onChange={ (event) => {setMessages(event.target.value)}}
        
        />
        <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default App
