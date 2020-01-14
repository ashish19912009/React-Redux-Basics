import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            default : break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubCounter}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                {this.props.storedResult.map((storedResult,i) => {
                    return <li key={i} onClick={()=> this.props.onDeleteCounter(storedResult.id)}>{storedResult.value}</li>
                })}
            </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResult: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return{
        onIncrementCounter: () => {
            console.log("INC");
            return dispatch({type: 'INCREMENT'})
        },
        onDecrementCounter: () => {
            return dispatch({type: 'DECREMENT'})
        },
        onAddCounter: () => {
            console.log("add");
            return dispatch({type: 'ADD', value: 10})
        },
        onSubCounter: () => {
            console.log("SUB");
            return dispatch({type: 'SUB', value: 5})
        },
        onStoreResult: (result) => {
            console.log("Store");
            return dispatch({type: 'STORE_RESULT', result: result});
        },
        onDeleteCounter: (id) => {
            console.log("Delete");
            return dispatch({type: 'DELETE_RESULT', id: id})
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);