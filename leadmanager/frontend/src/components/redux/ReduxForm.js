import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addItem } from '../../actions/redux';

export class Form extends Component {
    state = {
        listItem: ''
    };

    static propTypes = {
        addItem: PropTypes.func.isRequired
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.listItem);
        this.setState({
            listItem: ''
        })
    };

    render() {
        const { listItem } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add to List</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>List Item</label>
                        <input
                            className="form-control"
                            type="text"
                            name="listItem"
                            onChange={this.onChange}
                            value={listItem}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { addItem })(Form);