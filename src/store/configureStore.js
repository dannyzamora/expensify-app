import { createStore, combineReducers,applyMiddleware,compose } from 'redux';
import expenseReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__|| compose;

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expenseReducer,
            filters: filterReducer
        }),
        composeEnhansers(applyMiddleware(thunk))
    );
    return store;
}

