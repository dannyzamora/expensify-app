import configureMockStore from 'redux-mock-store';
import thuck from 'redux-thunk';
import {startAddExpense, addExpense, editExpense, removeExpense,startRemoveExpenses,setExpenses,startSetExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thuck]);

beforeEach((done)=> {
    const expenseData = {}
    expenses.forEach(({id,description,note,amount,createdAt})=>{
        expenseData[id]={description,note,amount,createdAt}
    })

    database.ref('expenses').set(expenseData).then(()=>done())
})

test("SHOULD SETUP REMOVE", () => {
    const action = removeExpense({ id: "123" });
    expect(action).toEqual
        ({
            type: "REMOVE_EXPENSE",
            id: "123"
        })
})

test("should remove expense  to database store", (done) => {
    const store = createMockStore({});
    const id = expenses[2].id;
    store.dispatch(startRemoveExpenses({id})).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`expenses/${id}`).once('value');  
    }).then((snapshot)=>{
        expect(snapshot.val()).toBeFalsy();
        done();
    });

})


test("EDIT SETUP ", () => {
    const action = editExpense("123", { note: "NewNote" })
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123",
        updates: {
            note: 'NewNote'
        }
    })
})


test("ADD SETUP ", () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[2]
    })
})
test("should add expense to with defaults database store", (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: "",
        amount: 0,
        note: '',
        createdAt:0
    };

    store.dispatch(startAddExpense({})).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense:{
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');  
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });

});

test("should add expense  to database store", (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: "mouse",
        amount: 12345,
        note: 'This one',
        createdAt:1000
    };

    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense:{
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');  
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });

})
test ("Should setup set expense action object with dat",()=> {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: "SET_EXPENSES",
        expenses
    })
})

test("should fetch expenses from firebase",(done)=> {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "SET_EXPENSES",
            expenses

        });
        done();
    })
})


// test("ADD SETUP NO DATA",()=>{
//     const expectData = {
//         description:'', 
//         note:'',

//         amount : 0,
//         createdAt :0
//     }
//     const action = addExpense();
//     expect(action).toEqual({
//         type: "ADD_EXPENSE",
//         expense: {
//             ...expectData,
//             id: expect.any(String)

//         }
//     })
// })