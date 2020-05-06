import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

class HomeContact extends React.Component {
    constructor() {
        super();
        this.state = {
            verification: false,
            name: "",
            email: "",
            text: "",
            nameError: "",
            emailError: "",
            textError: "",
            succesText1: "",
            succesText2: ""
        };
    }

    handleChangeName = e => {
        this.setState({
            name: e.target.value
        })
    };
    handleChangeMail = e => {
        this.setState({
            email: e.target.value
        })
    };

    handleChangeText = e => {
        this.setState({
            text: e.target.value
        })
    };

    validate = () => {
        const patterns = {
            username: /^[a-z\d]{2,12}$/i,
            email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
            text: /^.{120,}$/
        };
        let nameError = "";
        let emailError = "";
        let textError = "";
        const { name, email, text } = this.state;

        if (!patterns.username.test(name)) {
            nameError = "Podane imię jest nieprawidłowe!";
            this.setState({ nameError });
            return false;
        }
        if (!patterns.email.test(email)) {
            emailError = "Podany email jest nieprawidłowy!";
            this.setState({ emailError });
            return false;
        }
        if (!patterns.text.test(text)) {
            textError = "Wiadomość musi mieć conajmniej 120 znaków!";
            this.setState({ textError });
            return false;
        }
        return true;
    };

    handleSubmit = e => {
        e.preventDefault();
        const isValid = this.validate();
        const { name, email, text } = this.state;
        const data = {
            "name": name,
            "email": email,
            "message": text
        };
        if (isValid) {
            this.setState({
                succesText1: "Wiadomość została wysłana!",
                succesText2: "Wkrótce się skontaktujemy.",
                verification: true
            })
        }
        if (this.state.verification) {
            fetch('https://fer-api.coderslab.pl/v1/portfolio/contact',{
                method: 'post',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(responsne => responsne.json())
                .then(resp => console.log(resp))
                .catch(error => console.log(error));
            console.log("aaa")
        }
    };
    render() {
        return (
            <div className="contact" id="contact">
                <div className="contact-a">
                    <div className="form">
                        <p className="form-title">Skontaktuj się z nami</p>
                        <div className="form-deco"></div>

                        <div className="succes">
                            <p>{this.state.succesText1}</p>
                            <p>{this.state.succesText2}</p>
                        </div>

                        <form onSubmit={this.handleSubmit}>
                            <div className="form-1">
                                <p className="labels">Wpisz swoje imię</p>
                                <input onChange={this.handleChangeName} type="text" name="name" placeholder="Krzysztof" value={this.state.name}/>
                                <p className="error">{this.state.nameError}</p>
                            </div>
                            <div className="form-1">
                                <p className="labels">Wpisz swój email</p>
                                <input onChange={this.handleChangeMail} type="text" name="email" placeholder="abc@xyz.pl" value={this.state.email}/>
                                <p className="error">{this.state.emailError}</p>
                            </div >
                            <div className="form-textarea">
                                <p className="labels">Wpisz swoją wiadomość</p>
                                <textarea onChange={this.handleChangeText} value={this.state.text} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
                                <p className="error">{this.state.textError}</p>
                            </div>

                            <input className="form-button" type="submit" value="Wyślij"/>
                        </form>
                    </div>

                    <div className="footer">
                        <p>Copyright by Coders Lab</p>
                        <div className="footer-icons">
                            <i className="fa fa-facebook-square"></i>
                            <i className="fa fa-instagram"></i>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default HomeContact;
