import React from "react";
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import "../scss/components/Home.scss"

class Home extends React.Component {

    render() {
        return (
            <div>
                <HomeHeader />
                <HomeThreeColumns />
            </div>
        );
    }

}

export default Home;
