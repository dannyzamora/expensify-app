import { setStartDate, setEndDate, setTextFilter,  sortByAmount,sortByDate} from '../../actions/filters';
import moment from 'moment';

test("SET START DATE", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    });
});
test("SET END DATE", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(0)

    });

});

test("SET TEXT FILTER DEFAULT",()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ''
    })
});
test("SET TEXT FILTER",()=>{
    const action = setTextFilter("RENT");
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: "RENT"
    })
});

test("SORT DATE",()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORT_BY_DATE",
    })
});

test("SORT AMOUNT",()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT",
    })
});