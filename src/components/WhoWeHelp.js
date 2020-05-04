import React from "react";

class Pagination extends React.Component {
    render() {
        return(
            <>
            <div className='who-pag' >
                <div className='who-a'>
                    <h3 className='who-h3'>{this.props.name}</h3>
                    <span className='who-desc'>{this.props.description}</span>
                </div>
                <div className='who-b'>
                    <span>{this.props.what}</span>
                </div>
            </div>
                <hr className='who-hr' ></hr>
            </>
        )
    }
}

class WhoWeHelp extends React.Component {
    state={
        data:{
            'organizacje':[
                {
                    name:`Organizacja "Lorem Ipsum 1"`,
                    description:"Quis varuis quam quisque id diam vel quam elementum pulvinar",
                    what: 'Egestas, sed, tempus'
                },
                {
                    name:`Organizacja "Lorem Ipsum 2"`,
                    description:"Quis varuis quam quisque id diam vel quam elementum pulvinar",
                    what: 'Egestas, sed, tempus'
                },
                {
                    name:`Organizacja "Lorem Ipsum 3"`,
                    description:"Quis varuis quam quisque id diam vel quam elementum pulvinar",
                    what: 'Egestas, sed, tempus'
                },
                {
                    name:`Organizacja "Lorem Ipsum 4"`,
                    description:"Quis varuis quam quisque id diam vel quam elementum pulvinar",
                    what: 'Egestas, sed, tempus'
                },
                {
                    name:`Organizacja "Lorem Ipsum 5"`,
                    description:"Quis varuis quam quisque id diam vel quam elementum pulvinar",
                    what: 'Egestas, sed, tempus'
                },
                {
                    name:`Organizacja "Lorem Ipsum 6"`,
                    description:"Quis varuis quam quisque id diam vel quam elementum pulvinar",
                    what: 'Egestas, sed, tempus'
                }
            ],
            'fundacje':[
                {
                    name:`Fundacja "Dbam o Zdrowie"`,
                    description:'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej',
                    what: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
                },
                {
                    name:`Fundacja "Dla Dzieci"`,
                    description:  'Cel i misja: Pomoc dzieciom z ubogich rodzin',
                    what: 'ubrania, meble, zabawki'
                },
                {
                    name:`Fundacja "Bez Domu"`,
                    description:'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania',
                    what: 'ubrania, jedzenie, ciepłe koce'
                },
                {
                    name:`Fundacja "Dbam o Zdrowie 2"`,
                    description:'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej',
                    what: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
                },
                {
                    name:`Fundacja "Dla Dzieci 2"`,
                    description:  'Cel i misja: Pomoc dzieciom z ubogich rodzin',
                    what: 'ubrania, meble, zabawki'
                },
                {
                    name:`Fundacja "Bez Domu 2"`,
                    description:'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania',
                    what: 'ubrania, jedzenie, ciepłe koce'
                },
                {
                    name:`Fundacja "Dbam o Zdrowie 3"`,
                    description:'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej',
                    what: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
                },
                {
                    name:`Fundacja "Dla Dzieci 3"`,
                    description:  'Cel i misja: Pomoc dzieciom z ubogich rodzin',
                    what: 'ubrania, meble, zabawki'
                },
                {
                    name:`Fundacja "Bez Domu 3"`,
                    description:'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania',
                    what: 'ubrania, jedzenie, ciepłe koce'
                },
            ],
            'zbiorki':[
                {
                    name:`Zbiórka "Lorem Ipsum 1"`,
                    description:'Quis varuis quam quisque id diam vel quam elementum pulvinar',
                    what: 'Egestas, sed, tempus'
                },
                {
                    name:`Zbiórka "Lorem Ipsum 2"`,
                    description:'Quis varuis quam quisque id diam vel quam elementum pulvinar',
                    what: 'Egestas, sed, tempus'
                },
                {
                    name:`Zbiórka "Lorem Ipsum 3"`,
                    description:'Quis varuis quam quisque id diam vel quam elementum pulvinar',
                    what: 'Egestas, sed, tempus'
                },

            ],
        },
        currentSelection:"fundacje",
        page:0,
    };

//////////////////
    userSelection=(type)=>{
        this.setState({
            currentSelection:type,
            page:0});
    };
    itemPage=(nr)=>{
        this.setState({
            page:nr})
    };
    pageButtons=(nr)=>{
        if (nr<2){
            return null;
        }else{
            let buttons=[];
            for (let i=0;i<nr;i++){
                buttons.push(<button key={i} className="who-btn" onClick={()=>{this.itemPage(i)}}>{i+1}</button>)
            }
            return buttons;
        }
    };

    //////////////////////////////
    render() {
        const data=this.state.data;
        const type=this.state.currentSelection;
        const currentPage=this.state.page;

        const number=Math.ceil(data[type].length/3);
        let item = data[type].slice(currentPage*3,(currentPage+1)*3);

        return (
            <div className="who-main" id="who">
                    <p className="who-title">Komu pomagamy?</p>
                    <div className="who-deco"></div>
                    <ul className='who-org'>
                        <li className="who-chose" onClick={()=>this.userSelection('fundacje')}> Fundacjom</li>
                        <li className="who-chose" onClick={()=>this.userSelection('organizacje')}>Organizacjom<br/>pozarządowym</li>
                        <li className="who-chose" onClick={()=>this.userSelection('zbiorki')}>Lokalnym<br/>zbiórkom</li>
                    </ul>
                    <p className="who-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum placeat magni voluptas accusantium optio temporibus iure similique obcaecati!</p>

                    <div >
                        {item.map((e,index)=>(
                                <Pagination key={index} name={e.name} description={e.description} what={e.what} border={false}/>
                            )
                        )}
                    </div>
                    <div className="who-page">
                        {this.pageButtons(number)}
                    </div>
             </div>
        );
    }
}
export default WhoWeHelp;
