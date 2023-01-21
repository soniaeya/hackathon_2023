import './ExpenseItem.css';
import React, {useState} from 'react';


const expenseDate = new Date(2022, 2, 28);
const expenseTitle = 'Title';
const expenseAmount = 234.34;


function ExpenseItem(props) {

    useState(props.title);
    return(
        //JSX
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{props.name}</h2>
                <div className="expense-item__price">{expenseAmount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;