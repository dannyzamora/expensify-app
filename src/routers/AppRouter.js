import React from 'react';
import {Router,Route,Switch}from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDasboardPage from '../components/ExpenseDasboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFound from '../components/NotFound';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute'

export const history = createHistory();


const AppRouter = () => (
    <Router history={history}>
    <div>
        <Switch>    
            <PublicRoute path="/" component={LoginPage} exact={true} />
            <PrivateRoute path="/dashboard" component={ExpenseDasboardPage}/>
            <PrivateRoute path="/create" component={AddExpensePage}/>
            <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
            <Route component={NotFound} />
        </Switch>
    </div>
    
  </Router>  
);
export default AppRouter;