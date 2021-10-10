import React from 'react';


const TransactionHistory = () => {
    return (
        <div className="container">
            <h1 className='center mt'>Transaction History</h1>
            <hr className='hr-line'/>
           
          <ul className="transaction-history">
              <li className="transaction-item">
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
              </li>
              
          </ul>
        </div>
    )
}

export default TransactionHistory
