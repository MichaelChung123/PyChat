import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendMessage } from '../../actions/chatActions'

class ChatForm extends Component {
    state = {
        message: ''
    };
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        
        this.props.sendMessage(this.state.message);

    };

    render() {
        const { message, name } = this.state
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            type="text"
                            name="message"
                            onChange={this.onChange}
                            value={message}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { sendMessage })(ChatForm)
