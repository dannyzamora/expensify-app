import filterReducer from '../../reducers/filters';
import moment from 'moment';

test("Should setup default filter values",()=>{
    const state = filterReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
        });

});

test("Should sortby amount",()=>{
    const state = filterReducer(undefined,{type:"SORT_BY_AMOUNT"});
    expect(state.sortBy).toBe('amount');
})

test("Should sortby date",()=>{
    const currentState = {
        text:'',
        sortBy:'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const state = filterReducer(currentState,{type:"SORT_BY_DATE"});
    expect(state.sortBy).toBe('date');
})

test("Should Set text filter",()=>{
    const state = filterReducer(undefined,{type:"SET_TEXT_FILTER",text:"BIGBOOT"});
    expect(state.text).toBe('BIGBOOT');
})

test("Should Set start date",()=>{
    const state = filterReducer(undefined,{type:"SET_START_DATE",startDate:moment(0).subtract(10,'days')});
    expect(state.startDate).toEqual(moment(0).subtract(10,'days'));
})

test("Should Set end date",()=>{
    const state = filterReducer(undefined,{type:"SET_END_DATE",endDate:moment(0).add(10,'days')});
    expect(state.endDate).toEqual(moment(0).add(10,'days'));
})