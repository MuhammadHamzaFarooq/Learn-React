import React, { useContext } from 'react';
import TransactionContext from '../ContextApi/TransactionContext';

// let transactions = [
//     { desc: 'Pizza', amount: -200 },
//     { desc: 'Chicken Tika', amount: -400 },
//     { desc: 'Pepsi', amount: -100 },
//     { desc: 'Cash', amount: 50000 },
// ]


const TransactionHistory = () => {

    const { transactions } = useContext(TransactionContext)
    return (
        <div className="container">
            <h1 className='center mt'>Transaction History</h1>
            <hr className='hr-line' />

            <ul className="transaction-history">

                {
                    transactions.map((transObj, index) => {
                        return (
                            <li className="transaction-item" key={index}>
                                <h3> {transObj.desc} </h3>
                                <h3> {transObj.amount} </h3>
                                <button className='delete-btn'> x</button>
                            </li>
                        )
                    })
                }


                {/* <li className="transaction-item">
                    <h3>Food</h3>
                    <h3>+$2</h3>
                    <button className='delete-btn'> x</button>
                </li>
                <li className="transaction-item">
                    <h3>Food</h3>
                    <h3>+$2</h3>
                    <button className='delete-btn'> x</button>
                </li>
                <li className="transaction-item">
                    <h3>Food</h3>
                    <h3>+$2</h3>
                    <button className='delete-btn'> x</button>
                </li> */}

            </ul>
        </div>
    )
}

export default TransactionHistory