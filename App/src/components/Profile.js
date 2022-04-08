import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Profile = () => {
    return (
        <div> 
            <p>&nbsp;</p> 
            <h4
                style={{
                    fontSize: '3rem',
                    justifyContent: 'center',
                    marginTop: '4rem',
                    color: '#FFE400',
                    textAlign: 'center',
                    padding: '0',
                    margin: '0',
               }}> WELCOME, SARAH!</h4>
            <div style={{marginTop: '5rem', marginBottom:'20rem', textAlign:'center'}}> 
            <Link to='/Main'>
               <button style={{backgroundColor: '#ffff', color:'#0A0800', boxShadow: '5px 1px #888888', height:'150px', width:'150px'}} className="btn btn-secondary" onClick={() => {}}><p style={{fontSize:'30px', color:'#0A0800'}}>Account</p> </button>
            </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/Library'>
               <button style={{backgroundColor: '#ffff', color:'#0A0800', boxShadow: '5px 1px #888888', height:'150px', width:'150px'}} className="btn btn-secondary" onClick={() => {}}><p style={{fontSize:'25px', color:'#0A0800'}}>NFT LIBRARY</p> </button>
            </Link>
            </div>
            <p>&nbsp;</p>
            <p>&nbsp;</p>





            
        </div>
   );
};
export default Profile;