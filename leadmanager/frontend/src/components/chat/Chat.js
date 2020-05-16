import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChatLog from './ChatLog'
import ChatForm from './ChatForm'

class Chat extends Component {
    render() {
        return (
            <div>
                <h1>Chat</h1>
                <ChatLog />
                <ChatForm />
            </div>
        )
    }
}

export default Chat
