import React, { PureComponent } from 'react'

import './background.png'
import './ViewCodeComponent.css'

export default class ViewCodeComponent extends PureComponent {
    render() {
        return (
            <div className="view-code">
                <a href="https://github.com/jordanjordanb1/jordanjordanb1.github.io" className="view-code-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                <div className="view-code-triangle"></div>
                <i className="fas fa-code view-code-text"></i>
            </div>
        )
    }
}
