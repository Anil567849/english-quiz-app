import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Styles from "../css/play.module.css";
import {data} from './data/quiz.js';


function Play() {

  const [option, setOption] = useState([]);
  const [time, setTime] = useState();
  const [score, setScore] = useState({
    correct: 0,
    total: 0,
  });
  const [clicked, setClicked] = useState({
    clicked: false,
    op: null
  })
  const [shuffleArr, setShuffleArr] = useState((['o0', 'o1', 'o2', 'o3']))
  const navigate = useNavigate();
  
  function getRandom(){
    setClicked({
      clicked: false,
      op: null
    })
  
    setShuffleArr((shuffleArray(shuffleArr)));
    let rand = Math.floor(Math.random() * data.length);
    setOption(data[rand]);
  }

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
       
    return array;
  }

  function handleAnswer(val){
    // console.log(val);.
    if(clicked.clicked) return;
      setClicked({
        clicked: true,
        op: val
      })

      if(val == 'o0'){
        setScore(prevScore => ({ ...prevScore, correct: prevScore.correct + 1 }));
      }
      setScore(prevScore => ({ ...prevScore, total: prevScore.total + 1 }));
      setTimeout(() => {
        getRandom();
      }, 2000);
  }

  function runTimer(val){
    const t = setInterval(() => {
      setTime(val);
      val--;
      if(val < 0){
        clearT();
      }
    }, 1000);

    function clearT(){
      clearTimeout(t);
    }
  }

  if(time == 0){
    navigate(`/score?c=${score.correct}&t=${score.total}`)
  }
  
  useEffect(() => {
    runTimer(30);
    getRandom();
  }, [])
    
  return (
    <div className={Styles.container}>
      <div className={Styles.innerBox}>
        <h1 className={Styles.hindiText}>{option.hindi}</h1>
        <div>
          <ul className={Styles.ulItems}>
              {
                shuffleArr.map((val) => {

                  return (
                    (clicked.clicked && val == 'o0') ? <li 
                      key={val} 
                      id={Styles.win}
                      onClick={() => handleAnswer(val)}>
                        {option[val]}
                      </li> 
                    : (clicked.clicked && clicked.op == val) ? <li 
                      key={val} 
                      id={Styles.loss}
                      onClick={() => handleAnswer(val)}>
                        {option[val]}
                    </li>
                    : <li 
                    key={val} 
                    onClick={() => handleAnswer(val)}>
                      {option[val]}
                  </li>
                  )
                })
              }
          </ul>
        </div>
      </div>
      <div className={Styles.time}><img src="sand-clock.svg"/> {time} Seconds</div>
    
    </div>
  )
}

export default Play