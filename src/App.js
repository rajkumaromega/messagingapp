import './App.css';
import {useState,useEffect}from 'react'
import { InputLabel, Button,FormControl,Input,IconButton} from "@mui/material";
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import {IoMdSend} from "react-icons/io"


function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
   
  ]);
  const [username, setUsername] = useState('');
  // console.log(messages);
  const sendMessage = (event) =>{
    event.preventDefault();

    db.collection('messages').add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setMessages([...messages,{username:username,message:input}])
    setInput('');
  }

  useEffect(()=>{
   
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc => ({id:doc.id, message:doc.data()})))
    })
    
  },[])

  useEffect(()=>{
    setUsername(prompt('please enter your name'));
  },[])

  return (
    
       <div className="App">
        <img src="https://i.pinimg.com/736x/84/0e/b2/840eb2f2f64bd9ff18ec51ee420b24c8.jpg" width="80" height="80" />
        <h1>RS Messanger</h1>
       
        <form className='app__form'>
            <FormControl className='app__formControl'>
              
              <Input placeholder="Enter a message..."className="app__input" value={input} onChange={event=> setInput(event.target.value)}id="my-input" aria-describedby="my-helper-text" />
             
                 <IconButton className='app__iconButton' disabled={!input} variant="text" color="primary" onClick={sendMessage}>
                   <IoMdSend />
                 </IconButton> 
            </FormControl>
                
        </form>
    <FlipMove>
      {messages.map(({id,message}) =>(
          <Message key={id} username={username} message={message}/>
          
        ))}
      </FlipMove>
       
      
    </div>
  );

}
export default App;
