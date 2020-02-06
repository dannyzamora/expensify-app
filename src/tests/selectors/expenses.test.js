import selectExpenses from '../../selectors/expenses';
import moment from 'moment';

const expenses =
    [
        {
            id: "1",
            description: "GUM",
            note: "",
            amount: 195,
            createdAt: 0
        },
        {
            id:"2",
            description: "RENT",
            note: "",
            amount:109500,
            createdAt:moment(0).subtract(4,'days').valueOf()
        },
        {
            id:"3",
            description: "CREDITCARD",
            note: "",
            amount:4500,
            createdAt:moment(0).add(4,'days').valueOf()
        }
    ]
test("SHOULD FILTER BY TEXT VALUE", () => {
    const filters = {
        text:'e',
        sortBy: 'date',
        startDate: undefined,
        endDate:undefined
        };

    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[1]]);
});

test("SHOULD FILTER BY STARDtATE",()=>{
    const filters ={
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
    }
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[0]]);
});

test("SHOULD FILTER BY ENDATE",()=>{
    const filters ={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:moment(0)
    }
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[0],expenses[1]]);
});

test("SHOULD FILTER BY DATE",()=>{
    const filters ={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]]);
});

test("SHOULD FILTER BY AMOUNT",()=>{
    const filters ={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[1],expenses[2],expenses[0]]);
});