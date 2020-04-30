import React from "react";
import { Link } from 'react-router-dom';

class AboutUs extends React.Component {

    render() {
        return (
            <div className="who-main" id="who">
                    <p className="who-title">Komu pomagamy?</p>
                    <div className="who-deco"></div>
                    <ul className="who-org">
                        <Link to="/" className="who-chose" onClick={this.changeFun}>Fundacjom</Link>
                        <Link to="/" className="who-chose" onClick={this.changeOrg}>Organizacjom<br></br>pozarządowym</Link>
                        <Link to="/" className="who-chose" onClick={this.changeLoc}>Lokalnym<br></br>zbiórkom</Link>
                    </ul>
                    <p className="who-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum placeat magni voluptas accusantium optio temporibus iure similique obcaecati!</p>

                    <div className="who-box"> </div>
                    <ul className="who-page"> </ul>
            </div>
        );
    }
}
export default AboutUs;
