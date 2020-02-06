import ExpenseDasboardPage from '../../components/ExpenseDasboardPage';
import React from 'react';
import {shallow} from 'enzyme';

test("SHOULD RENDER ExpenseDasboardPage",()=>{
    const wrapper = shallow(<ExpenseDasboardPage/>);
    expect(wrapper).toMatchSnapshot();
})