import React from 'react';
import Styles from '../css/home.module.css';
import Button from '../components/buttons/Button';
import {useNavigate} from 'react-router-dom';

function Home() {
    
    const navigate = useNavigate();
    function handleBtnClick() {
        navigate('/play');
    }
  return (
    <div className={Styles.container}>
        <h1 className={Styles.mainHeading}>English Sikho Ak</h1>
        <h2 className={Styles.mainSubHeading}>Improve your English with 1000+ quizzes</h2>
        <div className={Styles.btnContainer}>
            <Button text="Let's Play" handleBtnClick={handleBtnClick}/>
        </div>
    </div>
  )
}

export default Home