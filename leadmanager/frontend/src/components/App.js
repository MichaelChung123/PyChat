import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

// Alert Options
const alertOptions = {
    timeout: 3000,
    position: 'top center',
}

import Header from './layout/Header'
import Dashboard from './leads/Dashboard'
import Alerts from './layout/Alerts'
import Login from './accounts/Login'
import Register from './accounts/Register'
import PrivateRoute from './common/PrivateRoute'

import Redux from './redux/Redux'

import { Provider } from 'react-redux'
import store from '../store'
import { loadUser } from '../actions/auth'

import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Posts from './Posts'
import Increment from './Increment'
import Chat from './chat/Chat'


class App extends React.Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate}
                    {...alertOptions}>
                    <Router>
                        <Fragment>
                            <Header />
                            <Alerts />
                            <div className="container">
                                <Switch>
                                    <PrivateRoute exact path="/" component={Dashboard} />
                                    <Route exact path="/register" component={Register} />
                                    <Route exact path="/login" component={Login} />
                                    <Route exact path="/redux" component={Redux} />
                                    <Route exact path="/posts" component={Posts} />
                                    <Route exact path="/increment" component={Increment} />
                                    <Route exact path="/chat" component={Chat} />
                                </Switch>
                            </div>
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));