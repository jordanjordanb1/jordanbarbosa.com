import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import Main from './components/MainComponent'
import Projects from './components/Projects/Projects';

class Router extends PureComponent {
    renderDashboard = () => {
        const { isAuthenticated, token } = this.props

        if (isAuthenticated && token) {
            return <div>User is authed</div>
        }

    return <div>User's not authed<br />{isAuthenticated}{token}</div>
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/projects" component={Projects} />
                <Route path="/dashboard" component={this.renderDashboard} />
            </Switch>
        )
    }
}

export default connect(state => ({
    isAuthenticated: state.user.isAuthenticated,
    token: state.user.token
}))(Router)
