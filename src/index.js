import React from 'react';
import ReactDOM from 'react-dom';
import Head from './components/top'
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './index.css'

const App=()=>{


    return (
        <div>
            <Head/>
            <Footer/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

