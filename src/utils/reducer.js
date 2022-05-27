//alternative to useState, more complex but more powerful and flexabile
//useState is a syntatic suger of useReducer that simplifies it
// kind of Redux 

//reducre funtion 
//recives 2 paramters
// will recives the current state
//it recives the action we want to implement to the sate
//based in action the funtion update the state one way or another 
//action is an object with 2 keys, type and data.

export const reducer = (state, action) => {
    console.log(state)
    console.log(action)
}
