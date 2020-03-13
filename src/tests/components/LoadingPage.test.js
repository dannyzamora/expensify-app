import LoadingPage from '../../components/LoadingPage';
import React from 'react';
import {shallow} from 'enzyme';

test("SHOULD RENDER LoadingPage",()=>{
    const wrapper = shallow(<LoadingPage/>);
    expect(wrapper).toMatchSnapshot();
})