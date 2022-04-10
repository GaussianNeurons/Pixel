import React, { Component, useState } from 'react';
import Container from '@material-ui/core/Container';
import {ProgressBarCon} from './ProgressBarCon';
import './progress.css';
import {Link } from "react-router-dom";

class Reward extends Component {


  render() {

    return (
      <div style={{width:'30%',height:'50%', border: '2px solid #0A0800', borderRadius:'10px'}}> 
        <div id="content ">
            <Container maxWidth="sm" style={{backgroundColor: '#FFE400', height: '84vh', border: '2px solid #0A0800', borderRadius:'10px'}}>
            <h4    
               style={{
                    fontSize: '3rem',
                    justifyContent: 'center',
                    marginTop: '2rem',
                    color: '#ffff',
                    textAlign: 'center',
                    padding: '0',
                    margin: '0',
                    
               }}
          > 
                 YEAH!</h4>
               <h4 
                    style={{
                         fontSize: '3rem',
                         justifyContent: 'center',
                         marginTop: '2rem',
                         color: '#ffff',
                         textAlign: 'center',
                         padding: '0',
                         margin: '0',
                    
               }}>YOU GOT IT!</h4>
            <h6 style={{textAlign: 'center'}}>HERE IS YOUR NEW NFT:</h6>
            <img src={require('./images/lela.png')} style={{width: '100%', height: '50%',border: '2px solid #0A0800', borderRadius:'10px'}}/>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            {/*
            <Link to='/Library'>
               <button style={{backgroundColor: '#ffff', color:'#0A0800', boxShadow: '1px 1px #888888', height:'100px', width:'330px'}} className="btn btn-secondary" onClick={() => {}}><p style={{fontSize:'50px', color:'#FFE400'}}>NFT LIBRARY</p> </button>
            </Link>
            */}
            <form onSubmit={(event) => {
                event.preventDefault()
                this.props.mintNFT()}}>
            <button type="submit" className="btn btn-secondary" 
                style={{backgroundColor: '#ffff', color:'#0A0800', boxShadow: '1px 1px #888888', height:'100px', width:'330px'}} ><p style={{fontSize:'40px', color:'#FFE400'}}>Add NFT</p> </button>
            </form>
            </Container>

        </div>
      </div>
          );
        }
      }
    

export default Reward;

