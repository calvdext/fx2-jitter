import React, {useEffect, useState}from 'react'
import LoginForm from './LoginForm'
import MessageForm from './MessageForm'
import Messages from './Messages'
import Message from './Message'
import MessageDetail from './MessageDetail'
import Navigation from './Navigation'
import initialMessageList from '../data/message-list.json'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import About from './About'
import NotFound from './NotFound'

const App = () => {

  
  const [loggedInUser, setLoggedInUser] = useState("")
  const [messageList, setMessageList] = useState([])

  const activateUser = (username) => {
    setLoggedInUser(username)
  }

  const addMessage = (text) => {
    const message = {
      text: text,
      user: loggedInUser,
      id:  messageList[0].id + 1//nextId(messageList) //messageList[messageList.length - 1 ].id + 1
    }
    setMessageList(
      (messageList) => [message, ...messageList]
    )
  }

  function nextId(data) {
    if(data.length === 0) return 1;
    const  sortData = data.sort((a,b) => a.id - b.id)
    const nextId = sortData[sortData.length - 1].id + 1
    return nextId
  }

  useEffect(
    ()=>{
      //fetch
      setMessageList(initialMessageList)
    }
    ,
    []
  )

  return (
    <div >
          <h1>Jitter</h1>
          
          {/*{ !loggedInUser ?
            <LoginForm activateUser={activateUser}/>
            :
            <MessageForm loggedInUser={loggedInUser} addMessage={addMessage}/>
          }
        <Messages messageList={messageList}/>*/}
          
          <BrowserRouter>
          <Navigation loggedInUser={loggedInUser} activateUser={activateUser}/>
            <Routes>
              <Route path="/" element={<Navigate to="messages" replace/>} />
              <Route path="/messages" element={<Messages messageList={messageList}/>} />
              <Route path="/messages/new" element={
                loggedInUser?
                  <MessageForm loggedInUser={loggedInUser} addMessage={addMessage}/>
                :
                  <Navigate to="/login" />
                } />
              <Route path='/messages/:messageId' element={<MessageDetail messageList={messageList}/>}/>
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<LoginForm activateUser={activateUser}/>} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </BrowserRouter>
    </div>
  )
}

export default App
