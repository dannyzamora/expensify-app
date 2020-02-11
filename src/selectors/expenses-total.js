
export default (expenses) => {

    return expenses
        .map(expense => expense.amount)
        .reduce((a, c) => a + c, 0);
}