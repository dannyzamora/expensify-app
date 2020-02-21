import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpenses, startRemoveExpenses } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpenses(this.props.expense.id, expense);
    this.props.history.push('/');
  }
  onRemove = () => {
    this.props.startRemoveExpenses({ id: this.props.expense.id });
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );

  }
}


const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    startEditExpenses: (id,expense) => dispatch(startEditExpenses(id,expense)),
    startRemoveExpenses: (data)=> dispatch(startRemoveExpenses(data))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
