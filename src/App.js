import React from 'react';
import './App.css';
import Counter from './components/counter';
import { connect} from 'react-redux';
import {increment, decrement, deleteHandle, reset} from './actions/index';
import {bindActionCreators} from 'redux';

const App  = (props) => {
    const {counters, increment, decrement, deleteHandle, reset} = props;
    return (
      <React.Fragment>
        {counters.map((counter) => {
            return <Counter key={counter.id} counter={counter} increment={increment} decrement={decrement} deleteHandle={deleteHandle} reset={reset} />
        })}
      </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        counters : state.counters
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        increment: increment,
        decrement: decrement,
        deleteHandle: deleteHandle,
        reset: reset
    }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
