import React, { PureComponent } from 'react'

import './MonitorDisplayComponent.css'

import Terminal from './Terminal/TerminalComponent'

export default class MonitorComponent extends PureComponent {
    render() {
        return (
            <div className="monitordisplay-container">
                <div className="monitordisplay-desktop">
                    <Terminal />
                </div>
            </div>
        )
    }
}
