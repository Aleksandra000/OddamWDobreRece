import React from "react";
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';

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
