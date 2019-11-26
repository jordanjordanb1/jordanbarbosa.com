import React, { PureComponent } from 'react'

import './MonitorComponent.css'

import Display from './Display/MonitorDisplayComponent'
import Base from './Base/MonitorBaseComponent'

export default class MonitorComponent extends PureComponent {
    render() {
        return (
            <div className="monitor-container">
                <Display />
                <Base />
            </div>
        )
    }
}
