import React, { PureComponent, createRef } from 'react'
import { connect } from 'react-redux'

import './InputComponent.css'

import { executeCommand, insertMessage, insertInput, setRef, setInputValue, getHistoryItem } from '../../../redux/ActionCreators'

import UserInfo from '../User/UserInLineComponent'

const mapStateToProps = state => ({
    inputValue: state.console.inputValue,
    history: state.console.history
})

const mapDispatchToProps = dispatch => ({
    executeCommand: command => dispatch(executeCommand(command)),
    insertMessage: message => dispatch(insertMessage(message)),
    insertInput: value => dispatch(insertInput(value)),
    setInputValue: value => dispatch(setInputValue(value)),
    setRef: ref => dispatch(setRef(ref)),
    getHistoryItem: direction => dispatch(getHistoryItem(direction))
})

class InputComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.inputRef = createRef() // Creates the ref that will be set into the store

        this.state = {
            value: this.props.value,
            console: ''
        }

        this.handleEnter  = this.handleEnter.bind(this)
    }

    componentDidMount() {
        this.props.setRef(this.inputRef) // Puts the ref object into the store
    }

    onKeyPress(keyCode, e) {
        let historyItem

        switch (keyCode) {
            case 40: // Up arrow
                e.preventDefault() // Prevents the default for the button, which is to scroll
                historyItem = this.props.getHistoryItem('forwards') || '' // Needs empty string because of a bug with array return undefined
                this.setState({ console: historyItem })
                return this.props.setInputValue(historyItem)
            case 38: // Down arrow
                e.preventDefault() // Prevents the default for the button, which is to scroll
                historyItem = this.props.getHistoryItem('backwards') || '' // Needs empty string because of a bug with array return undefined
                this.setState({ console: historyItem })
                return this.props.setInputValue(historyItem)
            default:
                break // No code was found in the switch, so just break out of it
        }
    }

    handleEnter(e) {
        e.preventDefault() // Prevents default for pressing enter

        if (this.props.executeCommand(this.state.console)) {
            this.props.setInputValue('') // Sets the input's value in the store to ''
            return this.setState({ value: this.state.console }) // If command is found, it will set the input's value to whatever was executed so that the input can be disabled=true
        }

        if (this.state.console !== '') { // Checks to see if executing an empty string for a command
            this.props.insertMessage(<> <span className="command-tip">{this.state.console}</span>: command not not found </>) // Command wasn't found so return an error
            this.setState({ value: this.state.console })
            this.props.setInputValue('') // Sets the input's value in the store to ''
            return this.props.insertInput() // Inserts a new input
        } else {
            this.props.insertMessage(<> <span className="command-tip">err</span>: no command was entered </>)
            this.setState({ value: ' ' }) // A SPACE IS REQUIRED SO THAT OLD INPUT CAN HAVE EMPTY VALUE
            this.props.setInputValue('') // Sets the input's value in the store to ''
            return this.props.insertInput() // Inserts a new input
        }
    }

    renderInput() {
        if (!this.state.value) { // If a value was passed as a prop, then the input will be disabled
            return (
                <form className="console-form" onSubmit={this.handleEnter}>
                    <input 
                        value={this.props.inputValue} 
                        onChange={e => { this.props.setInputValue(e.target.value); this.setState({ console: e.target.value }) }}
                        onKeyDown={e => { this.onKeyPress(e.keyCode, e)}}
                        ref={this.inputRef}
                        type="text" 
                        autoFocus={true} 
                        name="command" 
                        className="console-input" 
                        autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" />
                </form>
            )
        }

        return <input 
                      type="text" 
                      value={this.state.value} 
                      style={{cursor:'default'}} 
                      name="console-input" 
                      className="console-input" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" disabled />
    }

    render() {
        return (
            <div>
                <UserInfo />
                {this.renderInput()}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputComponent)
