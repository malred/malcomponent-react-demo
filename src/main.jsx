import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import 'mal-react-component/style.css'

import {HashRouter as Router} from "react-router-dom";
import {Loading} from "./pages/Loading";

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <Router>
        <Suspense fallback={<Loading />}>
            <App/>
        </Suspense>
    </Router>
    // </React.StrictMode>,
)
