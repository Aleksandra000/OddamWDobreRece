import React from "react";
import { Link } from 'react-router-dom';

class HomeHeader extends React.Component {

    render() {
        return (
            <div className="homeheader" id="start">
                <div className="header-img"></div>
                <div className="header-a">
                    <div className="header-text">
                        <h2 className="header-text-a">Zacznij pomagać!</h2>
                        <h2 className="header-text-a">Oddaj niechciane rzeczy w zaufane ręce</h2>
                    </div>
                    <div className="deco"></div>
                    <div className="buttons-box">
                        <Link to='/logowanie' className='buttons'>oddaj<br></br>rzeczy</Link>
                        <Link to='/logowanie' className='buttons'>zorganizuj <br></br>zbiórkę</Link>
                    </div>
                </div>
            </div>
        );
    }

}

export default HomeHeader;
