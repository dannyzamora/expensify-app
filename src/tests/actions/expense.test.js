import configureMockStore from 'redux-mock-store';
import thuck from 'redux-thunk';
import {startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thuck]);



test("SHOULD SETUP REMOVE", () => {
    const action = removeExpense({ id: "123" });
    expect(action).toEqual
        ({
            type: "REMOVE_EXPENSE",
            id: "123"
        })
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