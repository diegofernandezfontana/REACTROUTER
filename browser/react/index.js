import React from 'react';
import ReactDOM from 'react-dom';
import Main from './containers/Main';
import { BrowserRouter, Route } from 'react-router-dom';
import { render } from 'react-dom';

ReactDOM.render(<BrowserRouter>
        <Route path="/" component={ Main } />
    </BrowserRouter>, document.getElementById('app'));
