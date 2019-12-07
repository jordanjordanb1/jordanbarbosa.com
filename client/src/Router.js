import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom'
// import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Main from './components/MainComponent'
import Projects from './components/Projects/Projects';
import Dashboard from './components/Dashboard/Dashboard'

class Router extends PureComponent {
    renderDashboard = () => {
        const { isAuthenticated, token } = this.props

        if (isAuthenticated && token) {
            return <Dashboard />
        }

        return <Dashboard /> /* <Redirect to='/' /> */
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
