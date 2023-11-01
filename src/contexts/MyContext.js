import { createContext, useReducer } from "react";
import React from 'react'
export const myContext = createContext();

const initialState = {
    show: 'home'
}

function reducer(state, action) {
    switch (action.type) {
        case 'show':
            var show = { ...state.show }
            show = action.payload
            return {
                ...state,
                show
            }

        default:
            return state
    }
}



function MyContext({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <myContext.Provider value={[state, dispatch]}>
            {children}
        </myContext.Provider>
    )
}

export default MyContext;
