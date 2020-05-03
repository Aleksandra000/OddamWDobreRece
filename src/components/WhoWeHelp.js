import React from "react";
import { Link } from 'react-router-dom';

class Pagination extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
             fundacje: [
                    {name: 'Fundacja "Dbam o Zdrowie"', desc: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej', what: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'},
                    {name: 'Fundacja "Dla Dzieci"', desc: 'Cel i misja: Pomoc dzieciom z ubogich rodzin', what: 'ubrania, meble, zabawki'},
                    {name: 'Fundacja "Bez Domu"', desc: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania', what: 'ubrania, jedzenie, ciepłe koce'},
                    {name: 'Fundacja "Dbam o Zdrowie"', desc: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej', what: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'},
                    {name: 'Fundacja "Dla Dzieci"', desc: 'Cel i misja: Pomoc dzieciom z ubogich rodzin', what: 'ubrania, meble, zabawki'},
                    {name: 'Fundacja "Bez Domu"', desc: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania', what: 'ubrania, jedzenie, ciepłe koce'},
                    {name: 'Fundacja "Dbam o Zdrowie"', desc: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej', what: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'},
                    {name: 'Fundacja "Dla Dzieci"', desc: 'Cel i misja: Pomoc dzieciom z ubogich rodzin', what: 'ubrania, meble, zabawki'},
                    {name: 'Fundacja "Bez Domu"', desc: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania', what: 'ubrania, jedzenie, ciepłe koce'},
                ],
             organizacje: [
                    {name: 'Organizacja Lorem Ipsum 1', desc: 'Quis varuis quam quisque id diam vel quam elementum pulvinar', what: 'Egestas, sed, tempus'},
                    {name: 'Organizacja Lorem Ipsum 2', desc: 'Quis varuis quam quisque id diam vel quam elementum pulvinar', what: 'Egestas, sed, tempus'},
                    {name: 'Organizacja Lorem Ipsum 3', desc: 'Quis varuis quam quisque id diam vel quam elementum pulvinar', what: 'Egestas, sed, tempus'},
                    {name: 'Organizacja Lorem Ipsum 4', desc: 'Quis varuis quam quisque id diam vel quam elementum pulvinar', what: 'Egestas, sed, tempus'},
                    {name: 'Organizacja Lorem Ipsum 5', desc: 'Quis varuis quam quisque id diam vel quam elementum pulvinar', what: 'Egestas, sed, tempus'},
                    {name: 'Organizacja Lorem Ipsum 6', desc: 'Quis varuis quam quisque id diam vel quam elementum pulvinar', what: 'Egestas, sed, tempus'},
                ],
             lokalne: [
                    {name: 'Zbiórka Lorem Ipsum 1', desc: 'Quis varuis quam quisque id diam vel quam elementum pulvinar', what: 'Egestas, sed, tempus'},
                    {name: 'Zbiórka Lorem Ipsum 2', desc: 'Quis varuis quam quisque id diam vel quam elementum pulvinar', what: 'Egestas, sed, tempus'},
                    {name: 'Zbiórka Lorem Ipsum 3', desc: 'Quis varuis quam quisque id diam vel quam elementum pulvinar', what: 'Egestas, sed, tempus'}
                ],

        }
    }
    render() {
        // const {names, currentPage, namesPerPage}=this.state;
        // const indexOfLast = currentPage*namesPerPage;
        // const indexOfFirst = indexOfLast - namesPerPage;
        // const currentNames = names.slice(indexOfFirst,indexOfLast);
        //
        // const elements= currentNames.map((name,i)=>{
        //     return <li key={i}> {name}</li>
        // })
        //
        // const pageNumbers=[];
        // for(let i=1;i<= Math.ceil(names.length/namesPerPage);i++)
        // {
        //     const element =<li key={i}
        //     onClick={e=>this.handleClick(e,i)}
        //     >{i}</li>
        //     pageNumbers.push(element)
        // }
       console.log(this.state.fundacje);

        // funkcja if currentSelection 1/2/3 to fundacje/organizacje/lokalne

        return (
            <div className="who-box" >
                <div className="left__box">
                    <p className="box__title">name</p>
                    <p className="box__left__text">desc</p>
                </div>
                <div className="right__box">
                    <p className="box__right__text">what</p>
                </div>
                <ul className="who-page"> {"pageNumbers"}</ul>
            </div>
        )
    }
}

class WhoWeHelp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           currentSelection:1,
        }
    }

    userSelection=(selection)=>{
        this.setState(
            {
                currentSelection:selection
            }
        )
    };

    render() {
        return (
            <div className="who-main" id="who">
                    <p className="who-title">Komu pomagamy?</p>
                    <div className="who-deco"></div>
                    <ul className="who-org">
                        <li onClick={()=>this.userSelection(1)} className="who-chose" >Fundacjom</li>
                        <li onClick={()=>this.userSelection(2)} className="who-chose" >Organizacjom<br></br>pozarządowym</li>
                        <li onClick={()=>this.userSelection(3)} className="who-chose" >Lokalnym<br></br>zbiórkom</li>
                    </ul>
                    <p className="who-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum placeat magni voluptas accusantium optio temporibus iure similique obcaecati!</p>

                <Pagination/>
             </div>

        );
    }
}
export default WhoWeHelp;
