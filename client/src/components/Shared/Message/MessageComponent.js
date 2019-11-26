import React, { PureComponent } from 'react'

import './MessageComponent.css'

export default class MessageComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            messages: this.props.message
        }
    }

    renderMessage() {
        if (this.state.messages) {
            return (
                <>
                    {/* <span className="carrot" style={{color: '#59F48D' }}>></span> */}
                    <p className="message-item">{this.state.messages}</p>
                </>
            )
        }

        return "Error: messages prop is missing"
    }

    render() {
        return (
            <div className="message-container">
                {this.renderMessage()}
            </div>
        )
    }
}
