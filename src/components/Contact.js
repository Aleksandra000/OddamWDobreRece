import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

class HomeContact extends React.Component {

    render() {
        return (
            <div className="contact" id="contact">
                <div className="contact-a">
                    <div className="form">
                        <p className="form-title">Skontaktuj się z nami</p>
                        <div className="form-deco"></div>

                        <form >
                            <div className="form-1">
                                <p className="labels">Wpisz swoje imię</p>
                                <input  type="text" name="name" placeholder="Krzysztof"/>

                            </div>
                            <div className="form-1">
                                <p className="labels">Wpisz swój email</p>
                                <input  type="text" name="email" placeholder="abc@xyz.pl"/>

                            </div >
                            <div className="form-textarea">
                                <p className="labels">Wpisz swoją wiadomość</p>
                                <textarea   placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
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
