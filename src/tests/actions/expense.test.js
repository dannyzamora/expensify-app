import {addExpense, editExpense,removeExpense} from '../../actions/expenses';

test("SHOULD SETUP REMOVE",()=>{
    const action = removeExpense({id:"123"});
    expect(action).toEqual
    ({
        type:"REMOVE_EXPENSE",
        id:"123"
    })
})

test("EDIT SETUP ",()=> {
    const action = editExpense("123",{note:"NewNote"})
    expect(action).toEqual({
        type:"EDIT_EXPENSE",
        id:"123",
        updates:{
            note:'NewNote'
        }
    })
})

test("ADD SETUP ",()=> {
    const expectData = {
        description:'Rent', 
        note:'Booty',
        amount : 12453200,
        createdAt :1000
    }
    const action = addExpense(expectData);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expectData,
            id: expect.any(String)

        }
    })
})

test("ADD SETUP NO DATA",()=>{
    const expectData = {
        description:'', 
        note:'',
        amount : 0,
        createdAt :0
    }
    const action = addExpense();
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expectData,
            id: expect.any(String)

        }
    })
})