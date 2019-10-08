import React from 'react';
import ReactDOM from 'react-dom';
import Head from './components/top'
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './components/list'
import './index.css'

const App=()=>{

    return (
        <div>
            <Head/>
            <List lis={["qwefsdf","sdfsdfdfg","sdgsdfhgh"]}/>
            <Footer/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

