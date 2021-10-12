import React, { createContext, useReducer, Children } from 'react';
import reducer from './TransactionReducer';

let initialTransactions = [
    { desc: 'Pizza', amount: -200 },
    { desc: 'Chicken Tika', amount: -400 },
    { desc: 'Pepsi', amount: -100 },
    { desc: 'Cash', amount: 50000 },
]

const TransactionContext = createContext(initialTransactions);

export default TransactionContext;

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialTransactions);

    const AddTransactions = (transObj) => {
        dispatch(
            {
                type: 'Add_Transaction',
                payload: {
                    desc: transObj.desc,
                    amount: transObj.amount
                }
            }
        )

    }

    return (
        < TransactionContext.Provider value={
            {
                transactions: state,
                AddTransactions
            }
        } >
            {children}

        </ TransactionContext.Provider >
    )



}

