import { Route } from 'react-router-dom'
import React, { Fragment } from 'react'
import Dashboard from '../components/screens/Dashboard'
import Secondary from '../components/screens/Secondary'


export default () => (

    <Fragment>
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/sec" component={Secondary} />
    </Fragment>

)