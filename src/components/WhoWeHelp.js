import React from "react";
import { Link } from 'react-router-dom';

class AboutUs extends React.Component {
    constructor() {
        super();
        this.state = {
            names:['Fundacjom', 'Organizacjom pozarządowym',"Lokalnym zbiórkom"],
            currentPage:1,
            namesPerPage:1
        }
    }

    handleClick=(event,i)=>{
        this.setState({
            currentPage:i
        })
    }


    render() {
        const {names, currentPage, namesPerPage}=this.state;
        const indexOfLast = currentPage*namesPerPage;
        const indexOfFirst = indexOfLast - namesPerPage;
        const currentNames = names.slice(indexOfFirst,indexOfLast);

        const elements= currentNames.map((name,i)=>{
            return <li key={i}> {name}</li>
        })

        const pageNumbers=[];
        for(let i=1;i<= Math.ceil(names.length/namesPerPage);i++)
        {
            const element =<li key={i}
            onClick={e=>this.handleClick(e,i)}
            >{i}</li>
            pageNumbers.push(element)
        }

        return (
            <div className="who-main" id="who">

                    <p className="who-title">Komu pomagamy?</p>
                    <div className="who-deco"></div>
                    <ul className="who-org">
                        <li className="who-chose" onClick={this.changeFun}>Fundacjom</li>
                        <li className="who-chose" onClick={this.changeOrg}>Organizacjom<br></br>pozarządowym</li>
                        <li className="who-chose" onClick={this.changeLoc}>Lokalnym<br></br>zbiórkom</li>
                    </ul>
                    <p className="who-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum placeat magni voluptas accusantium optio temporibus iure similique obcaecati!</p>

                    <div className="who-box">{elements} </div>
                    <ul className="who-page"> {pageNumbers} </ul>
             </div>

        );
    }
}
export default AboutUs;
