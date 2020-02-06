import NotFound from '../../components/NotFound';
import React from 'react';
import {shallow} from 'enzyme';

test("SHOULD RENDER NOT FOUND",()=> {
    const wrapper= shallow(<NotFound/>);
    expect(wrapper).toMatchSnapshot();
})

