import {combineReducers} from 'redux';
import countReducer from './counterReducer';
import defaultCart from './defaultCart';

const allReducers = combineReducers({
    counters : defaultCart,
    count: countReducer
});

export default allReducers;