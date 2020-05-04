import React from 'react';
import {Link} from "react-router-dom";


class Register extends React.Component {

    render() {
        return (
            <div className="register">
                <p className="register-title">Załóż konto</p>
                <div className="register-deco"></div>
                <form >
                    <div className="register-form">
                        <p className="register-labels">Email</p>
                        <input  type="text" name="email" />

                    </div>
                    <div className="register-form">
                        <p className="register-labels">Hasło</p>
                        <input  type="password" name="password" />

                    </div >
                    <div className="register-form">
                        <p className="register-labels">Powtórz hasło</p>
                        <input  type="password" name="password" />

                    </div >
                    <input type="submit" className="login-button4" value="Załóż konto"/>
                    <Link className="login-button3 " to='/logowanie'>Zaloguj się</Link>

                </form>
            </div>
        )
    }

}

export default Register;
