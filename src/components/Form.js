import React from 'react';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            box: "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać."
        };
    }

    render() {
        return (
            <div className="givethings">
                <div className="givethings-main">
                    <div className="givethings-img"></div>
                    <div className="givethings-content">
                        <div className="givethings-title">
                            <h2 className="givethings-a">Oddaj rzeczy, których już nie chcesz</h2>
                            <h2 className="givethings-b">potrzebującym</h2>
                        </div>
                        <div className="givethings-deco"></div>
                        <h2 className="givethings-c">Wystarczą 4 proste kroki:</h2>
                        <div className="givethings-steps">
                            <div className="givethings-steps-main">
                                <p className="givethings-steps-text"><span
                                    className="givethings-steps-number">1<br></br></span><br></br>Wybierz <br></br> rzeczy
                                </p>
                                <div className="border"></div>
                            </div>
                            <div className="givethings-steps-main">
                                <p className="givethings-steps-text"><span
                                    className="givethings-steps-number">2<br></br></span><br></br>Spakuj je <br></br>w
                                    worki</p>
                                <div className="border"></div>
                            </div>
                            <div className="givethings-steps-main">
                                <p className="givethings-steps-text"><span
                                    className="givethings-steps-number">3<br></br></span><br></br>Wybierz <br></br> fundację
                                </p>
                                <div className="border"></div>
                            </div>
                            <div className="givethings-steps-main">
                                <p className="givethings-steps-text"><span
                                    className="givethings-steps-number">4<br></br></span><br></br>Zamów <br></br> kuriera
                                </p>
                                <div className="border"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="yellow-box">
                    <p className="yellow-title">Ważne!</p>
                    <p className="yellow-info">{this.state.box}</p>
                </div>

            </div>
        )
    }
}
export default Form;
