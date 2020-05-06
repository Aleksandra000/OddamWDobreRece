import React from 'react';
import {Link} from "react-router-dom";


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password1: '',
            password2: '',
            wrongEmail: '',
            wrongPassword1: '',
            wrongPassword2: '',
            verification: false
        }
    }
    handleChange = e => {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        });
        e.target.value = ""
    }
    handleSubmit = e => {
        e.preventDefault();

        this.validate();
        const isValid = this.validate();
        if(isValid) {
            this.setState({
                wrongEmail: '',
                wrongPassword1: '',
                wrongPassword2: ''
            })
        }
    }
    validate = () => {

        const patterns = {email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/};

        let wrongEmail = "";
        let wrongPassword1 = "";
        let wrongPassword2 = ""

        const { email, password1, password2 } = this.state;

        if (!patterns.email.test(email)) {
            wrongEmail = "Podany email jest nieprawidłowy!";
            this.setState({ wrongEmail })
            return false;
        }

        if (password1.length<6) {
            wrongPassword1 = "Podane hasło jest za krótkie";
            this.setState({ wrongPassword1 })
            return false;
        }

        if (password2 !== password1) {
            wrongPassword2 = "Hasła muszą być takie same";
            this.setState({ wrongPassword2 })
            return false;
        }

        return true;
    }

    render() {
        return (
            <div className="register">
                <p className="register-title">Załóż konto</p>
                <div className="register-deco"></div>
                <form onSubmit={this.handleSubmit}>
                    <div className="register-form">
                        <p className="register-labels">Email</p>
                        <input onChange={this.handleChange} type="text" name="email" value={this.state.email} />
                        <p className="error">{this.state.wrongEmail}</p>
                    </div>
                    <div className="register-form">
                        <p className="register-labels">Hasło</p>
                        <input onChange={this.handleChange} type="password" name="password1" value={this.state.password1} />
                        <p className="error">{this.state.wrongPassword1}</p>
                    </div >
                    <div className="register-form">
                        <p className="register-labels">Powtórz hasło</p>
                        <input  onChange={this.handleChange} type="password" name="password2" value={this.state.password2}/>
                        <p className="error">{this.state.wrongPassword2}</p>
                    </div >
                    <input type="submit" className="login-button4" value="Załóż konto"/>
                    <Link className="login-button3 " to='/logowanie'>Zaloguj się</Link>

                </form>
            </div>
        )
    }

}

export default Register;
