import React from 'react';
import {Link} from "react-router-dom";


class LogIn extends React.Component {

    render() {
        return (
            <div className="login">
                <p className="login-title">Zaloguj się</p>
                <div className="login-deco"></div>
                <form >
                    <div className="login-form">
                        <p className="labels">Email</p>
                        <input  type="text" name="email" />

                    </div>
                    <div className="login-form">
                        <p className="labels">Hasło</p>
                        <input  type="password" name="password" />

                    </div >
                    <Link className="login-button1 " to='/rejestracja'>Załóż konto</Link>
                    <input type="submit" className="login-button2" value="Zaloguj się"/>
                </form>
            </div>
        )
    }

}

export default LogIn;
