import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';


test("SHOULD RENDER EXPENSE FORM CORRECTLY",()=>{
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
})

test("SHOULD RENDER WITH EXPENSE DATA",()=> {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />)
    expect(wrapper).toMatchSnapshot();

    
})

test("SHOULD RENDER ERROR FOR INVALID FORM SUB",()=>{
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();

    wrapper.find('form').simulate('submit',{
        preventDefault:()=> {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();

})
test("SHOULD set description on input change",()=>{
    const value = "New Description"
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(0).simulate("change",{
        target:{value}
    })
    expect(wrapper.state('description')).toBe(value);

})

test("SHOULD set Note on input change",()=>{
    const value = "New Note"
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('textarea').simulate("change",{
        target:{value}
    })
    expect(wrapper.state('note')).toBe(value);

})

test("SHOULD set Note on input change",()=>{
    const value = "New Note"
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('textarea').simulate("change",{
        target:{value}
    })
    expect(wrapper.state('note')).toBe(value);

})

test("SHOULD set amout on input change",()=>{
    const value = "23.22"
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate("change",{
        target:{value}
    })
    expect(wrapper.state('amount')).toBe(value);

})

test("SHOULD set amout on input change",()=>{
    const value = "23.222"
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate("change",{
        target:{value}
    })
    expect(wrapper.state('amount')).toBe('');

})

test("Should call onSubmit prop for valid form submission",()=>{
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense = {expenses[0]} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit',{
        preventDefault:()=> {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description ,
        amount: expenses[0].amount,
        note:expenses[0].note,
        createdAt:expenses[0].createdAt
    });
})

test("should set new date on datechange",()=>{
    const now = moment();
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
})

test("Should set calender focus on change",()=> {
    const focused = true;
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused});
    expect(wrapper.state('calendarFocused')).toBe(focused);
})