import React from "react";
import { Link } from 'react-router-dom';

class HomeSimpleSteps extends React.Component {

    render() {
        return (
            <div className="homesimplesteps" id="steps">
                    <p className="homesimplesteps-title">Wystarczą 4 proste kroki</p>
                    <div className="homesimplesteps-deco"></div>
                    <div className="homesimplesteps-main">
                        <div className="homesimplesteps-a">
                            <div className="homesimplesteps-col">
                                <div className="homesimplesteps-deco1"></div>
                                <p className="column-title">Wybierz rzeczy</p>
                                <hr></hr>
                                <div className="column-text">ubrania, zabawki, sprzęt i inne</div>
                            </div>
                            <div className="homesimplesteps-col">
                                <div className="homesimplesteps-deco2"></div>
                                <p className="column-title">Spakuj je</p>
                                <hr></hr>
                                <div className="column-text">skorzystaj z worków na śmieci</div>
                            </div>
                            <div className="homesimplesteps-col">
                                <div className="homesimplesteps-deco3"></div>
                                <p className="column-title">Zdecyduj komu<br></br>chcesz pomóc</p>
                                <hr></hr>
                                <div className="column-text">wybierz zaufane miejsce</div>
                            </div>
                            <div className="homesimplesteps-col">
                                <div className="homesimplesteps-deco4"></div>
                                <p className="column-title">Zamów kuriera</p>
                                <hr></hr>
                                <div className="column-text">kurier przyjedzie w dogodnym terminie</div>
                            </div>
                        </div>
                    </div>
                    <Link to='/logowanie' className='buttons'>oddaj<br></br>rzeczy</Link>
            </div>
        );
    }
}
export default HomeSimpleSteps;
