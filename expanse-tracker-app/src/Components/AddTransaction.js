import React, { useState, useContext } from 'react';
import TransactionContext from '../ContextApi/TransactionContext';



const AddTransaction = () => {

    // const [item, setItem] = useState({
    //     amount: '',
    //     desc: ''
    // });

    // const itemHandler = (e) => {
    //     let { value, name } = e.target;
    //     setItem({
    //         ...item,
    //         [name]: value
    //     })
    // }

    const { transactions, AddTransactions } = useContext(TransactionContext)
    const [discription, setDiscription] = useState('');
    const [amount, setAmount] = useState('');

    const AddTransactionHandler = () => {
        AddTransactions({
            amount: amount,
            desc: discription
        });
        setDiscription('');
        setAmount('');
    }


    return (
        <div className="container">
            <h1 className='center mt'>Add New Transaction </h1>
            <hr className='hr-line' />
            <div className="addnew-transactions ">
                <div className='discription'>
                    <div>
                        <label htmlFor=""><h4>Discription</h4></label>
                    </div>
                    <div>
                        {/* <input onChange={itemHandler} name='desc' type="text" value={item.desc} /> */}
                        <input name='desc' type="text" placeholder='Deatail of transaction' value={discription}
                            onChange={(e) => { setDiscription(e.target.value) }} />
                    </div>
                </div>
                <div className='discription'>
                    <div>
                        <label htmlFor=""><h4>Transaction Account</h4></label>
                    </div>
                    <div>
                        {/* <input onChange={itemHandler} name='amount' type="number" value={item.amount} /> */}
                        <input name='amount' type="number" placeholder='Enter transaction amount' value={amount} onChange={(e) => { setAmount(+(e.target.value)) }} />
                    </div>
                </div>
                <div className='discription'>
                    <button className='btn' onClick={AddTransactionHandler} >Add Transaction</button>
                </div>

            </div>
        </div>
    )
}



export default AddTransaction;
