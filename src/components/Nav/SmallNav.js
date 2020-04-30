import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Link } from "react-scroll";

export default class SmallNav extends Component {
    render() {
        return (
            <ul className="nav-header">
                <li><Link to="start" className="small_nav">Start</Link></li>
                <li><Link to="steps" className="small_nav">O co chodzi?</Link></li>
                <li><Link to="about"className="small_nav">O nas</Link></li>
                <li><Link to="who" className="small_nav">Fundacja i organizacje</Link></li>
                <li><Link to="contact" className="small_nav">Kontakt</Link></li>
            </ul>
        )
    }
}
