import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDasboardPage=()=> (
    <div>
        <ExpenseListFilters/>
        <ExpenseList/>
        
    </div>
)
export default ExpenseDasboardPage;