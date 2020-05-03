import React from "react";
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import HomeSimpleSteps from './HomeSimpleSteps';
import Nav from '../Nav/Nav';
import SmallNav from "../Nav/SmallNav";
import AboutUs from "../AboutUs";
import WhoWeHelp from "../WhoWeHelp";
import Contact from "../Contact";

class Home extends React.Component {

    render() {
        return (
            <div>
                <HomeHeader />
                <HomeThreeColumns />
                <HomeSimpleSteps/>
                <AboutUs/>
                <WhoWeHelp/>
                <Contact/>
            </div>
        );
    }

}

export default Home;
