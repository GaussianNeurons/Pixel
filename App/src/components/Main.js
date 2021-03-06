import React, { Component, useState } from 'react';
import Container from '@material-ui/core/Container';
import {ProgressBarCon} from './ProgressBarCon';
import './progress.css';

class Main extends Component {

  componentDidMount() {
    this.setBlur();
  }

  setBlur = function setBlur() {
    var elem = document.getElementById('BlurImage');
    elem.style.filter = "blur(10px)";
  }

  render() {

    return (
      <div style={{width:'30%',height:'50%', border: '2px solid #0A0800', borderRadius:'10px'}}> 

        <div id="content ">
          <h5> SARAH'S ACCOUNT </h5>
            <div class="accountInfo">
            <p style={{fontSize: '14px'}}>SAVINGS...9832</p>    
            <p style={{fontSize: '19px'}}>BALANCE: </p>    
            <p style={{fontSize: '24px'}}> $285.00</p>    
          </div>
          &nbsp;
          <div>
            <ProgressBarCon/>
          </div>
          
          &nbsp;
          &nbsp;
          
          
        </div>
      </div>
          );
        }
      }
    

export default Main;

