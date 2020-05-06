import React from 'react';
import {Link} from "react-router-dom";


class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            wrongEmail: '',
            wrongPassword: '',
            verification: false
        }
    }
    handleChange = e => {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        });
        e.target.value = "";
    };

    handleSubmit = e => {
        e.preventDefault();
        this.validate();
        const isValid = this.validate();
        if(isValid) {
            this.setState({
                wrongEmail: '',
                wrongPassword: ''
            });
        }
    };
    validate = () => {
        const patterns = {email:/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/};
        let wrongEmail = "";
        let wrongPassword = "";
        const { email, password } = this.state;
        if (!patterns.email.test(email)) {
            wrongEmail = "Podany email jest nieprawidłowy!";
            this.setState({ wrongEmail });
            return false;
        }
        if (password.length<6) {
            wrongPassword = "Podane hasło jest za krótkie";
            this.setState({ wrongPassword });
            return false;
        }
        return true;
    };
    render() {
        return (
            <div className="login">
                <p className="login-title">Zaloguj się</p>
                <div className="login-deco"></div>
                <form onSubmit={this.handleSubmit}>
                    <div className="login-form">
                        <p className="labels">Email</p>
                        <input onChange={this.handleChange} type="text" name="email" value={this.state.email} />
                        <p className="error">{this.state.wrongEmail}</p>
                    </div>
                    <div className="login-form">
                        <p className="labels">Hasło</p>
                        <input onChange={this.handleChange} type="password" name="password" value={this.state.password} />
                        <p className="error">{this.state.wrongPassword}</p>
                    </div >
                    <Link className="login-button1 " to='/rejestracja'>Załóż konto</Link>
                    <input type="submit" className="login-button2" value="Zaloguj się"/>
                </form>
            </div>
        )
    }
}

export default LogIn;
