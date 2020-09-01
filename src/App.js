import React, { useState,useEffect } from 'react';
import { Button ,FormControl,InputLabel,Input} from '@material-ui/core';
import Message from './Message';

import './App.css';

function App() {
  const [input,setInput]=useState('');
  const sendMessage=(event)=>{
    if(input!=="")
    {
    event.preventDefault();
 setMessage([...message,{username:username,text:input}]);
 setInput('');
    }
  }
 const [message,setMessage]=useState([{username:"Manoj",text:"Hey guys what's up"}]);
 const [username,setusername]=useState('');

useEffect(() => {
 setusername(prompt('Please enter your name'));
},[])

  console.log(input);
  console.log(message);
  return (
    <div className="App">
      <img src="https://logodownload.org/wp-content/uploads/2017/04/facebook-messenger-logo-0.png" heigth="60px" width="70px"/>
      <h1>Facebook messenger</h1>
      <h2>Hey {username}, welcome to Messenger App!</h2>
      <form>
      <FormControl>
  <InputLabel >Enter message...</InputLabel>
  <Input  value={input} onChange={event=>setInput(event.target.value)} />
  <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button>
</FormControl>
      
     
      </form>
      {
      message.map(message=>{
      return  <Message username={username} message={message}/>
        
      })
      }
    </div>
  );
}

export default App;
