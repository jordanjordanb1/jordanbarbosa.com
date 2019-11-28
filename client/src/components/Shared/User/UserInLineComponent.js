import React from 'react'

import './UserInLineComponent.css'

export default function UserInLine() {
    return (
        <div className="user-line-container">
            <h6 className="comp-info">jordan@portfolio-desktop
                <span style={{color: 'white'}}>: </span>
                <span style={{color: '#3A6885'}}>~</span>
                <span style={{color: 'white'}}>$ </span>
            </h6>
        </div>
    )
}
