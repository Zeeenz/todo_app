import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';


ReactDOM.render(<Router>
    <div>
        {/* <Route exact path='/' component={App}/> */}
        <App/>
    </div>
    </Router>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
