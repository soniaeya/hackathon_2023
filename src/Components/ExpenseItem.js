import './ExpenseItem.css';
import React, {useState} from 'react';


const expenseDate = new Date(2022, 2, 28);
const expenseTitle = 'Title';
const expenseAmount = 234.34;


function ExpenseItem(props) {

    useState(props.title);
    return(
        //JSX
        <div>
            Hello World
        </div>
    )
}

export default ExpenseItem;