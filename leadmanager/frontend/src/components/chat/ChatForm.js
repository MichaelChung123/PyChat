import React, { Component } from 'react'

class ChatForm extends Component {
    state = {
        message: ''
    };
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault()
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

export default ChatForm
