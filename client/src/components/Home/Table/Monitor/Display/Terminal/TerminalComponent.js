import React, { PureComponent } from 'react'

import './TerminalComponent.css'

import Toolbar from './Toolbar/ToolbarComponent'
import Body from './Body/TerminalBodyComponent'

export default class TerminalComponent extends PureComponent {
    render() {
        return (
            <div className="terminal-window">
                <Toolbar />
                <Body />
            </div>
        )
    }
}
