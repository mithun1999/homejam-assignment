import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/swiper.scss';
import './assets/styles/scss/main.scss';

ReactDOM.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>,
    document.getElementById('root')
);
