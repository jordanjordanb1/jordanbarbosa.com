import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import './ExitButtonComponent.css'

import { hideProjects, insertMessage, insertInput } from '../../../redux/ActionCreators'

const mapDispatchToProps = dispatch => ({
    hideProjects: () => dispatch(hideProjects()),
    insertMessage: message => dispatch(insertMessage(message)),
    insertInput: () => dispatch(insertInput())
})

class ExitButtonComponent extends PureComponent {
    // When 'X' button is pressed, then projects component will unload
    hideProjects() {
        this.props.insertMessage('Exiting projects page...'); // Sets this message in the console
        this.props.insertInput() // Inserts new input
        setTimeout(() => {
            this.props.hideProjects() // Hides the project after a delay so the animation can play
        }, 1000)
    }
    
    render() {
        return (
            <button className="projects-leave" onClick={() => { this.props.toggleProjects(); this.hideProjects() }}><i className="fas fa-times"></i></button>
        )
    }
}

export default connect(null, mapDispatchToProps)(ExitButtonComponent)
