import {combineReducers} from 'redux';
import countRed from './counterReducer';
//import defaultCart from './defaultCart';

const allReducers = combineReducers({
    counters : countRed,
   // counters: countRed
});

export default allReducers;