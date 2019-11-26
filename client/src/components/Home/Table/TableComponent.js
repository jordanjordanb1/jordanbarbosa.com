import React, { PureComponent } from 'react'

import './TableComponent.css'

import Monitor from './Monitor/MonitorComponent'

export default class TableComponent extends PureComponent {
    render() {
        return (
            <div className="desk-container">
                <Monitor contactMode={this.props.contactMode} />
                <div className="desk">

                </div>
                <div className="desk-bottom">
                    <div className="desk-bar d-flex">
                        <div className="desk-leg"></div>
                        <div className="ml-auto desk-leg"></div>
                    </div>
                </div>
            </div>
        )
    }
}
