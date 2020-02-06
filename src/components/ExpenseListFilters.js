import React from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
    state = {
        calenderFocused: null,

    }
    onDateChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }
    onFocusChange = (calenderFocused) => {
        this.setState(() => ({ calenderFocused }))

    }
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    }
    onSortChange = (e) => {
        if (e.target.value === "date") {
            this.props.sortByDate();

        } else if (e.target.value === "amount") {
            this.props.sortByAmount();
        }
    }
    render() {
        return (
            <div>
                <input type='text' value={this.props.filters.text}
                    onChange={this.onTextChange} />
                <select
                    value={this.props.filters.sortBy}
                    onChange={this.onSortChange}

                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    startDateId="0"
                    endDate={this.props.filters.endDate}
                    endDateId="1"
                    onDateChange={this.onDateChange}
                    focusedInput={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}


                />

            </div>


        )
    }
}

const mapStateToProps = (state) => 
   (  {
        filters: state.filters
    })


const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text)=> dispatch(setTextFilter(text)),
    sortByDate:()=> dispatch(sortByDate()),
    sortByAmount: ()=> dispatch(sortByAmount()),
    setStartDate: (startDate)=> dispatch(setStartDate(startDate)),
    setEndDate: (endDate)=> dispatch(setEndDate(endDate))
}
)
export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters);