import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter } from "react-router-dom";
import SPAApp from './component/spaApp';

import './css/style.css'

ReactDOM.render(
    <HashRouter>
        <SPAApp></SPAApp>
    </HashRouter>, 
    document.getElementById("sparoot")
)




