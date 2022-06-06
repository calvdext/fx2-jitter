import React, {useEffect, useReducer}from 'react'
import LoginForm from './LoginForm'
import MessageForm from './MessageForm'
import Messages from './Messages'
//import Message from './Message'
import MessageDetail from './MessageDetail'
import Navigation from './Navigation'
import initialMessageList from '../data/message-list.json'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import About from './About'
import NotFound from './NotFound'
import { reducer } from '../utils/reducer'
import { StateContext } from '../utils/stateContext'
//import axios  from 'axios'
//import { Typography } from '@mui/material';

const App = () => {
  //useReducer handles all the state in the same object
  
  const initialState = {
    messageList: [],
    loggedInUser: ""
  }
  //useReducer recives two aguments
  //reducer -> it is a function that is executed when..
  //state
  //it returns an array with two elements
  //store -> acctully that's the name of the state
  //dispatch -> is the function that trigers the reducer funtion, dispatch's argument is the action

  const [store, dispatch] = useReducer(reducer, initialState)
  const {loggedInUser} = store

  //const [loggedInUser, setLoggedInUser] = useState("")
  //const [messageList, setMessageList] = useState([])

  // const activateUser = (username) => {
  //   //setLoggedInUser(username)
  //   dispatch({
  //     type: "setLoggedInUser",
  //     data: username
  //   })
  // }

  // function nextId(data) {
  //   if(data.length === 0) return 1;
  //   const  sortData = data.sort((a,b) => a.id - b.id)
  //   const nextId = sortData[sortData.length - 1].id + 1
  //   return nextId
  // }

  useEffect(
    ()=>{
      // fetch("http://http://localhost:4000/messages")
      // .then(response => response.json())
      // .then(data => console.log(data))
      // axios.get("http://localhost:4000/messages")
      // .then(response => {
      //   console.log(response.data)
      //   dispatch({
      //     type: "setMessageList",
      //     data: response.data
      //   })
      // })
      // setMessageList(initialMessageList)
      dispatch({
        type: "setMessageList",
        data: initialMessageList
      })
    }
    ,
    []
  )

  return (
    <div >
          
          {/*{ !loggedInUser ?
            <LoginForm activateUser={activateUser}/>
            :
            <MessageForm loggedInUser={loggedInUser} addMessage={addMessage}/>
          }
        <Messages messageList={messageList}/>*/}
          {/*Wrap all the components that use global state like loggedInUser and messageList in the state context provider*/}
          <StateContext.Provider value={{store, dispatch}}>
            <BrowserRouter>
            <Navigation />
              <Routes>
                <Route path="/" element={<Navigate to="messages" replace/>} />
                <Route path="/messages" element={<Messages/>} />
                <Route path="/messages/new" element={
                  loggedInUser?
                    <MessageForm />
                  :
                    <Navigate to="/login" />
                  } />
                <Route path='/messages/:messageId' element={<MessageDetail />}/>
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </StateContext.Provider>
    </div>
  )
}

export default App
