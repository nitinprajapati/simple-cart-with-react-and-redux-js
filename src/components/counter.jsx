import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import {increment, decrement, deleteHandle, reset} from './../actions/index';

class Counter extends Component {
    showZero() {
        const {counter} = this.props;
        return counter.value === 0 ? "Zero" : counter.value;
    }

    badgeClass() {
        let classs = "label label-";
        classs += this.props.counter.value <= 0 ? "warning" : "primary";
        return classs;
    }

    render() {
        const {counter} = this.props;
        return (
            <div className="row" style={{ marginBottom: 10 }}>
                <div className="col-md-1">
                <span className={this.badgeClass()}>{this.showZero()}</span>
                </div>
                <div className="col-md-1">
                <button
                    className="btn btn-default"
                    onClick={() => this.props.increment(counter)}
                >
                    <span className="glyphicon glyphicon-plus" />
                </button>
                </div>
                <div className="col-md-1">
                <button
                    className="btn btn-default m2"
                    onClick={() => this.props.decrement(counter)}
                >
                    <span className="glyphicon glyphicon-minus" />
                </button>
                </div>
                <div className="col-md-1">
                <button
                    className="btn btn-danger"
                    onClick={() => this.props.deleteHandle(counter)}
                >
                    Delete
                </button>
                </div>
            </div>
        );
   }
};

const mapStateToProps = (state) => {
    return {
        allCounters: state
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


export default connect(mapStateToProps, mapDispatchToProps)(Counter);