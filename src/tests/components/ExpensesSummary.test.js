import React from 'react';
import {ExpenseSummary} from '../../components/ExpensesSummary';
import {shallow} from 'enzyme';

test('Should correctly render with 1 expense',()=>{
    const wrapper =shallow(<ExpenseSummary expensesCount = {1} expensesTotal = {2}/>);
    expect(wrapper).toMatchSnapshot();
})

test('Should correctly render with many expense',()=>{
    const wrapper =shallow(<ExpenseSummary expensesCount = {235} expensesTotal = {123456}/>);
    expect(wrapper).toMatchSnapshot();
})