import React, { Component } from 'react'
import {connect} from 'react-redux'
import {add, minus} from '../actions/incrementAction'

class Increment extends Component {
    render() {
        return (
            <div>
                <h1>Number: {this.props.number}</h1>
                <button onClick={() => this.props.add(2)}>+</button>
                <button onClick={() => this.props.minus(2)}>-</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    number: state.increment.number
});

export default connect(mapStateToProps, {add, minus})(Increment);
