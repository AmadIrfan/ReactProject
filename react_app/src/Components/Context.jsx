import React, { useReducer } from 'react';

const myContext = React.createContext();

export function Context(props) {

    const reducer = (state, action) => {
        console.log(state);
        console.log(action.type);
        const val = document.getElementById('getText').value;
        console.log(val);
        if (action.type === 'Change') {
            return state = val;
        }
        return state;
    }
    const initialState = 0;

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className='my-context'>
        
            <input type='text' id='getText' name='text' onChange={() => {
                dispatch({ type: 'Change' })
            }} />

            <myContext.Provider value={state} >{props.children}</myContext.Provider>
        </div>
    )
}

export default myContext;