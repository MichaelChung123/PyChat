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
                {/* <div className="container">
<p>Hello. How are you today?</p>
<span className="time-right">11:00</span>
</div>

<div className="container darker">
<p>Hey! I'm fine. Thanks for asking!</p>
<span className="time-left">11:01</span>
</div>

<div className="container">
<p>Sweet! So, what do you wanna do today?</p>
<span className="time-right">11:02</span>
</div>

<div className="container darker">
<p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
<span className="time-left">11:05</span>
</div>  */}
            </div>
        )
    }
}

export default Chat
