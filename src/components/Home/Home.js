import React from "react";
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import HomeSimpleSteps from './HomeSimpleSteps';
import Nav from '../Nav/Nav';
import SmallNav from "../Nav/SmallNav";
import AboutUs from "../AboutUs";
import WhoWeHelp from "../WhoWeHelp"

class Home extends React.Component {

    render() {
        return (
            <div>
                <Nav/>
                <SmallNav/>
                <HomeHeader />
                <HomeThreeColumns />
                <HomeSimpleSteps/>
                <AboutUs/>
                <WhoWeHelp/>
            </div>
        );
    }

}

export default Home;
