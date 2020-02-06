import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
//add expense
const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0 } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt,
    }
});
//remove

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})
//edit
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates

});
//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text

});
//sort by date/amount 
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})
//start
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})
//end
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})
//Expenses
const expenseReducerDefaultState = []

const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense

            ];//state.concat(action.expense)
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id)

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }

                }
                else {
                    return { expense }
                }
            })
        default:
            return state
    }
};

//filters
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filterReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text

            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }
}
//get visble expenses


const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;;
        const textMatch = RegExp(text, 'i').test(expense.description)//expense.description.toLowerCase().includes(text.toLowerCase())
        console.log(textMatch, startDateMatch, endDateMatch)
        return startDateMatch && endDateMatch && textMatch;

    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;

        }
        if (sortBy === 'amount') {
            return a.amount > b.amount ? 1 : -1;

        }

    });
};
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
);
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses)
})
const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 1100, createdAt: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'cof', amount: 300, createdAt: 150 }));

// store.dispatch(removeExpense({id:expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id,{amount:5}));
// store.dispatch(setTextFilter('rentpp'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(125));
// store.dispatch(setEndDate());
const demoState = {
    expenses: [{
        id: 'dsfa',
        description: 'J RENT',
        note: 'u owe money',
        amount: 54000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
};


