import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test("SHOULD SET DEFAULT STATE",()=>{
    const state = expensesReducer(undefined,{type:"@@INIT"});
    expect(state).toEqual([]);
});
test("Should should remove expense by id",()=>{
    const action ={
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]]); 
});

test("Should should not remove expense by id if not found",()=>{
   const action ={
        type: "REMOVE_EXPENSE",
        id: "-1"
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});
test("ADD EXPENSE",()=>{
    const expense = {
        id:"4",
        description: "hoes",
        note: "",
        amount:4500,
        createdAt:undefined
    }
    const action ={
        type:"ADD_EXPENSE",
        expense
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([...expenses,expense]);
 
});

test("Should edit an expense",()=>{
    const amount =200;
    const action ={
        type: "EDIT_EXPENSE",
        id: "1",
        updates:{
            amount
        }
        
    };
    const state = expensesReducer(expenses,action);
    expect(state[0].amount).toBe(200);
});

test("Should not edit an expense if id not found",()=>{
    const updates = {
        amount: 200
    }
    const action ={
        type: "EDIT_EXPENSE",
        id: "-1",
        updates
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});

test("Should set expense", ()=> {
    const action = {
        type: "SET_EXPENSES",
        expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[1]])
});