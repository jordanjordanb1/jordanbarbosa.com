import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import './TerminalBodyComponent.css'

import { initialize } from '../../../../../../../redux/ActionCreators'

const mapStateToProps = state => ({
    console: state.console.activeList,
    inputRef: state.console.inputRef
})

const mapDispatchToProps = dispatch => ({
    initialize: () => dispatch(initialize())
})

class TerminalBodyComponent extends PureComponent {
    componentDidMount() {
        this.props.initialize() // Initialized the console
    }

    render() {
        return (
            <div className="terminal-body" onClick={() => this.props.inputRef.current.focus()}>
                {this.props.console.map((item, index) => {
                    return <div key={index}>
                                {item}
                           </div>
                })}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TerminalBodyComponent)
