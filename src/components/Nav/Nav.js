import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LogLinks extends Component {
    render() {
        return (
            <ul className="nav-header">
                <li><Link to='/logowanie' className="nav-header-link">Zaloguj</Link></li>
                <li><Link to='/rejestracja' className="nav-header-link">Zarejestruj się</Link></li>
            </ul>
        )
    }
}
