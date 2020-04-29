import React from "react";
import { Link } from 'react-router-dom';

class HomeHeader extends React.Component {

    render() {
        return (
            <div className="homeheader">
                <div className="header-img"></div>
                <div className="header-a">
                    <div className="header-text">
                        <h2>Zacznij pomagać!</h2>
                        <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                    </div>
                    <div className="deco"></div>
                    <div className="buttons-box">
                        <Link to='/oddaj-rzeczy' className='buttons'>oddaj<br></br>rzeczy</Link>
                        <Link to='/oddaj-rzeczy' className='buttons'>zorganizuj zbiórkę</Link>
                    </div>
                </div>
            </div>
        );
    }

}

export default HomeHeader;
