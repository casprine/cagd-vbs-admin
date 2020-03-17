import React from 'react';
import Router from '../src/router/Router'
// component
import { Layout } from './components/shared';
import { BrowserRouter, Switch } from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Router />
                    </Switch>
                </Layout>
            </BrowserRouter>
        </>
    );
}

export default App;
