import React from 'react';
import {BrowserRouter,Route,Switch}from 'react-router-dom';
import ExpenseDasboardPage from '../components/ExpenseDasboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFound from '../components/NotFound';



const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header/>
        <Switch>    
            <Route path="/" component={ExpenseDasboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit/:id" component={EditExpensePage}/>
            <Route path ="/help" component={HelpPage}/>
            <Route component={NotFound} />
        </Switch>
    </div>
    
  </BrowserRouter>  
);
export default AppRouter;