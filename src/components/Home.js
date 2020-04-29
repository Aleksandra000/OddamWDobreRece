import React from "react";
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import Nav from './Nav/Nav';
import SmallNav from "./Nav/SmallNav";

class Home extends React.Component {

    render() {
        return (
            <div>
                <Nav/>
                <SmallNav/>
                <HomeHeader />
                <HomeThreeColumns />
            </div>
        );
    }

}

export default Home;
