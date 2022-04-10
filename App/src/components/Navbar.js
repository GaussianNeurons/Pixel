import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

class Navbar extends Component {

  render() {
    return (
        <div className="navbar navbar-dark fixed-bottom bg-light flex-md-nowrap p-0 shadow">
            <ul id="nav">
                <li><Link to="/Profile">Profile</Link></li>
                <li><Link to="/Main">Home</Link></li>
                <li><Link to="/Reward">Reward</Link></li>
                <li><Link to="/Library">Library</Link></li>

            </ul>
        </div>
    );
  }
}
export default Navbar;