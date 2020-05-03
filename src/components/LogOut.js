import React from 'react';
import { Link } from 'react-router-dom';

export default function LogOut() {
    return (
        <div className="logout">
            <p>Wylogowanie nastąpiło pomyślnie!</p>
            <div className="logout-deco"></div>
            <Link to="/" className="logout-button">Strona główna</Link>
        </div>
    )
}
