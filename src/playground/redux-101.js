import {createStore} from 'redux';

//action generators

const incrementCount =({incrementBy = 1}={}) => ({
    type: 'INCREMENT',
    incrementBy

})

const decrementCount = ({decrementBy=1}={})=> ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({count = 0}={})=> ({
    type: 'SET',
    count

});

const resetCount = ()=>({
    type: 'RESET',
})
//reduces
//1 pure function, output only depend on input
//2 never change state or action 


const countReducer = (state={count:0},action)=>{
    switch(action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT': {
            return {
                count: state.count - action.decrementBy
            }
        } 
        case 'SET':{
            return {
                count:action.count
            }
        }
        case 'RESET':{
            return {
                count:0
            }
        }
        default:
            return state;
    }

}
const store = createStore (countReducer);
const unsubscribe= store.subscribe(()=>{
    console.log(store.getState());


})


store.dispatch(incrementCount({incrementBy:25}));
store.dispatch(decrementCount({decrementBy:23}))
store.dispatch(setCount({count:123}));

store.dispatch(resetCount());

