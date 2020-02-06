//SET_TEXT_FILTER
export const setTextFilter = (text = '') => (
    {

        type: 'SET_TEXT_FILTER',
        text

    });
//sort by date/amount 
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})
//start
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})
//end
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})
