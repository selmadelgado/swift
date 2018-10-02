import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import PageLayout from './layouts/PageLayout';
import PageHome from './pages/Home';


class Routes extends Component {
    render() {
        return (
            <PageLayout>
                <Route exact={true} path="/" component={PageHome} />
            </PageLayout>
        )
    }
}

export default Routes;