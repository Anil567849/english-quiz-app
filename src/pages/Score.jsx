import React from 'react';
import Styles from '../css/home.module.css';
import Styles1 from '../css/score.module.css';
import Button from '../components/buttons/Button';
import {useNavigate, useLocation } from 'react-router-dom';

function Score() {
    
    const navigate = useNavigate();
    function handleBtnClick() {
        navigate('/home');  
    }

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const c = queryParams.get('c');
    const t = queryParams.get('t');
    console.log(c, t);
  return (
    <div className={Styles.container}>
        <h1 className={Styles.mainHeading}>Score</h1>
        <div className={Styles1.card}>
          <h2>{c}/{t}</h2>
        </div>
        <div className={Styles.btnContainer}>
            <Button text="Go To Home" handleBtnClick={handleBtnClick}/>
        </div>
    </div>
  )
}

export default Score