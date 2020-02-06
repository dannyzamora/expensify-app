import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from '../../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/moment/moment';
import { wrap } from 'module';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
    />);

});

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test("SHould handle text change",()=>{
    const value = "BOOTY"
    wrapper.find("input").simulate("change",{target:{value}})
    expect(setTextFilter).toHaveBeenLastCalledWith(value);

});

test("Should sort by date",()=> {
    const value = "date";
    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find("select").simulate('change',{
        target:{value}
    })
    expect(sortByDate).toHaveBeenCalled()
});
test("Should sort by amount",()=> {
    const value = "amount";
    
    wrapper.find("select").simulate('change',{
        target:{value}
    })
    expect(sortByAmount).toHaveBeenCalled()
});

test("should handle date chnages",()=>{
    const startDate = moment(0).add(4,'years');
    const endDate = moment(0).add(8,"years");
    wrapper.find("withStyles(DateRangePicker)").prop('onDateChange')({startDate,endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);


});
test("Should handledate focus change",()=>{
    const calenderFocused = 'endDate';
    wrapper.find("withStyles(DateRangePicker)").prop("onFocusChange")(calenderFocused);
    expect(wrapper.state('calenderFocused')).toBe(calenderFocused);
})