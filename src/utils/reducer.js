//alternative to useState, more complex but more powerful and flexabile
//useState is a syntatic suger of useReducer that simplifies it
// kind of Redux 

//reducre funtion 
//recives 2 paramters
// will recives the current state
//it recives the action we want to implement to the sate
//based in action the funtion update the state one way or another 
//action is an object with 2 keys, type and data.
//type key determinds what is the action we are taking
//data key contains the data nessaserry to update the state

//the funtion returns the updated state 

export const reducer = (state, action) => {
    console.log(state)
    console.log(action)

    switch(action.type){
        case "cleanState": {
            //state gose back to defult value
            return {
                messageList: [],
                loggedInUser: ""
            }
        }
        case "setMessageList": {
            //populate the messageList array with the initial list
            return {
                ...state,
                messageList: action.data
            }
        }
        case "addMessage": {
            //recive a message and adds it to the list 
            return {
                ...state,
                messageList: [action.data, ...state.messageList]
            }
        }
        case "setLoggedInUser": {
            //recive a message and adds it to the list 
            return {
                ...state,
                loggedInUser: action.data
            }
        }
        default: return state

    }
}
