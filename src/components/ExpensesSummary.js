import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';


export const ExpenseSummary = ({ expensesTotal, expensesCount }) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className = "page-header__title">Viewing <span>{expensesCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
                <div className= "page-header__actions">
                    <Link className= "button" to ="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    )
}




const mapStatetoProps = (state) => {
    const curexpenses = selectExpenses(state.expenses, state.filters);

    return {
        expensesTotal: selectExpensesTotal(curexpenses),
        expensesCount: curexpenses.length
    }
}

export default connect(mapStatetoProps)(ExpenseSummary);
// export class ExpenseSummary extends React.Component {

//     render() {
//         <div>
//             {
//                 numeral(amount/100).format('$0,0.00')
//             }



//         </div>
//     }
// }

// const mapStatetoProps = (state) => {
//     return {
//         expenses: selectExpenses(state.expenses, state.filters)
//     }
// }
// const mapDispatchToProps = (dispatch) => ({
//     selectExpensesTotal:(expenses) => dispatch(selectExpensesTotal(expenses))
//   });

// export default connect(mapStatetoProps,mapDispatchToProps)(ExpenseList);