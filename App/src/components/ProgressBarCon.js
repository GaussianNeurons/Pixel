import { SettingsBackupRestoreSharp } from '@material-ui/icons';
import React, {useState} from 'react';
import './progress.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const Range = (props) => {
    return (
        <div className="range" style={{width: `${props.percentRange}%`}}/>
    );
};

const ProgressBar = (props) => {
    return (
        <div className="progress-bar" style={{backgroundColor: '#ffff'}}>
            <Range percentRange={props.percentRange}/>
            
        </div>
    );
};



export const ProgressBarCon = () => {
    let [percentRange, setProgress] = useState(0);
    let [amount, setAmount] = useState("");

    if(amount == null || amount.length === 0) {
        
        setAmount("$100 until your next NFT!!!");
    } 




    
    function unblurImage(val) {
        var elem = document.getElementById('BlurImage');
        elem.style.filter = "blur(" + val + "px)";
    }


    return (
        <div>
            <img id="BlurImage" src={require('./images/lela.png')} style={{width: '100%', height: '100%', borderRadius: '10px' ,border: '2px solid #486B87' }}/>
            <p style={{textAlign: 'center'}}>ADD MORE & SEE MORE OF YOUR NFT!</p>
            <div className="add-money">&nbsp;
              <p id="amount">{amount}</p>
            </div> 
            <ProgressBar percentRange={percentRange}/>
            <p style={{textAlign: 'center'}}>ADD MONEY</p>
            <div className="toggle-buttons">
                <button style={{backgroundColor: '#ffff', color:'#0A0800', boxShadow: '1px 1px #888888'}} className="btn btn-secondary" onClick={() => {
                        let perVal = percentRange < 100 ? percentRange + 5 : 100;
                        let subVal = 100 - perVal;
                        setProgress(perVal);
                        unblurImage(Math.round((100 - perVal) / 100 * 10));
                        console.log(subVal);
                        setAmount("$" + subVal + " until your next NFT!");   
                    } 
                }>$5 </button>
                <button style={{backgroundColor: '#ffff', color:'#0A0800', boxShadow: '1px 1px #888888'}} className="btn btn-secondary" onClick={() => {
                        let perVal = percentRange < 100 ? percentRange + 10 : 100;
                        let subVal = 100 - perVal;
                        setProgress(perVal);
                        unblurImage(Math.round((100 - perVal) / 100 * 10));
                        console.log(subVal);
                        setAmount("$" + subVal + " until your next NFT!");   
                        //setText("The value is: " + perVal);   

                    }
                }>$10 </button>
                <button style={{backgroundColor: '#ffff', color:'#0A0800', boxShadow: '1px 1px #888888'}} className="btn btn-secondary" onClick={() => {
                        let perVal = percentRange < 100 ? percentRange + 20 : 100;
                        let subVal = 100 - perVal;
                        setProgress(perVal);
                        unblurImage(Math.round((100 - perVal) / 100 * 10));
                        console.log(subVal);
                        setAmount("$" + subVal + " until your next NFT!");   
                    }
                }>$20 </button>

                <button style={{backgroundColor: '#ffff', color:'#0A0800', boxShadow: '1px 1px #888888'}} className="btn btn-secondary" onClick={() => {
                        let perVal = percentRange < 100 ? percentRange + 40 : 100;
                        let subVal = 100 - perVal;
                        setProgress(perVal);
                        unblurImage(Math.round((100 - perVal) / 100 * 10));
                        console.log(subVal);
                        setAmount("$" + subVal + " until your next NFT!");   
                    }
                }>$40 </button>
                
                         
                  
            </div>
        </div>
    );
};