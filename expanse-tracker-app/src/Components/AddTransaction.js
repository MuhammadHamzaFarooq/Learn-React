import React from 'react';


const AddTransaction = () => {
    return (
        <div className="container">
            <h1 className='center mt'>Add New Transaction </h1>
         <hr className='hr-line'/>
            <div className="addnew-transactions ">
                <div className='discription'>
                    <div>
                        <label htmlFor=""><h4>Discription</h4></label>
                    </div>
                    <div>
                        <input type="text"/>
                    </div>
                </div>
                <div className='discription'>
                    <div>
                        <label htmlFor=""><h4>Transaction Account</h4></label>
                    </div>
                    <div>
                        <input type="number" />
                    </div>
                </div>
                <div className='discription'>
                     <button className='btn'>Add Transaction</button>
                </div>
               
            </div>
        </div>
    )
}

export default AddTransaction
