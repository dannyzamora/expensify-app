import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test("add multiple expenses",()=>{
    const result = selectExpensesTotal(expenses);
    expect(result).toBe(114195)
});
test("One expense",()=>{
    const result = selectExpensesTotal([expenses[0]]);
    expect(result).toBe(195);
});

test("return 0 if no expense",()=> {
    const result = selectExpensesTotal([]);
    expect(result).toBe(0);

})