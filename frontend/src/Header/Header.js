import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import item from './Images/item.png'
import './Header.css';

class Header extends Component {
    // constructor() {
    //     this.state = {
    //         myText = 'Weather',
    //         myImage={ item }
    //     };
    // }

    render() {
        return (
            <header className="headerStyle">
                Weather
                <img src={item} alt="MenuButton" className="imageStyleHeader" />
            </header>
        )
    }
}


export default Header;