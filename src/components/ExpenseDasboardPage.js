import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpensesSummary'

const ExpenseDasboardPage=()=> (
    <div>
        <ExpenseListFilters/>
        <ExpenseList/>
        <ExpenseSummary/>

        
    </div>
)
export default ExpenseDasboardPage;