//the first thing we do is make our state. It is usually called initialState but 
//you can call it whatever you want. state is an object.
const initialState= {
    list: ['Take out the trash', 'Do laundry']
}

const ADD_TODO = 'ADD_TODO'

//this is the reducer. It is taking in state and making it avialable once we invoke
//reducer
export default function reducer(state = initialState, action){
    console.log('reducer', action)
    switch(action.type){
        case ADD_TODO:
            let newList = state.list.slice();
            newList.push(action.payload)
            console.log('new list', newList)
            return {...state, list: newList}; 
        default:
            return state;
    }
}

export function addItem(input) {
    console.log('add item fired')
    return {
        type: ADD_TODO,  
        payload: input
    }
}