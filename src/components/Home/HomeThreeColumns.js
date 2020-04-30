import React from "react";

class HomeThreeColumns extends React.Component {
    render() {
        return (
            <div className="homethreecolumns">
                <div className="homethreecolumns-a">
                    <div className="column">
                        <p className="column-nr">5</p>
                        <p className="column-title">oddanych worków</p>
                        <p className="column-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum placeat magni voluptas accusantium optio temporibus iure similique obcaecati!</p>
                    </div>
                    <div className="column">
                        <p className="column-nr">10</p>
                        <p className="column-title">wspartych organizacji</p>
                        <p className="column-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum placeat magni voluptas accusantium optio temporibus iure similique obcaecati!</p>
                    </div>
                    <div className="column">
                        <p className="column-nr">7</p>
                        <p className="column-title">zorganizowanych zbiórek</p>
                        <p className="column-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum placeat magni voluptas accusantium optio temporibus iure similique obcaecati!</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default HomeThreeColumns;
