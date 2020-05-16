import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getItems, addItem, deleteItem } from '../../actions/redux';

export class ReduxList extends Component {
    static propTypes = {
        addItem: PropTypes.func.isRequired
    };

    componentDidMount() {
        console.log(this.props.items);
        // this.props.getItems(this.props.items);
    }

    render() {
        return (
            <Fragment>
                <h2>List</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>List Items</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.items.map((item, key) => (
                            <tr key={key}>
                                <td>{item}</td>
                                <td>
                                    <button
                                        onClick={this.props.deleteItem.bind(this, item)}
                                        className="btn btn-danger btn-sm"
                                    >
                                        {' '}
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    items: state.redux.items
});

export default connect(mapStateToProps, { addItem, deleteItem, getItems })(ReduxList);