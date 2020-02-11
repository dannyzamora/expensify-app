import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';


export const ExpenseSummary = ({ expensesTotal, expensesCount }) => {
    const expenseWord = expensesCount ===1 ? 'expense':'expenses';
    const formattedExpensesTotal = numeral(expensesTotal/100).format('$0,0.00');
    return (
        <div>
            <h1>Viewing {expensesCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
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