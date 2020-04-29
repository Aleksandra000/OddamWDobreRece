import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LogLinks extends Component {
    render() {
        return (
            <ul className="nav-header">
                <li><Link to='/logowanie' className="nav-header-link">Zalogój</Link></li>
                <li><Link to='/rejestracja' className="nav-header-link">Załóż konto</Link></li>
            </ul>
        )
    }
}
