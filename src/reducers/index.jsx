import {combineReducers} from 'redux';
import countRed from './counterReducer';
import defaultCart from './defaultCart';

const allReducers = combineReducers({
    counters : defaultCart,
    count: countRed
});

export default allReducers;