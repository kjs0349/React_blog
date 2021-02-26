import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '신림 맛집', '영등포 맛집']);
  let [좋아요, 좋아요변경] = useState([0,0,0,0]);
  let [누른제목, 누른제목변경] = useState(0);

  let [입력값, 입력값변경] = useState('');

  let [modal, modal변경] = useState(false);

  let posts = '강남 고기 맛집';

  // function change() {
  //   let newArray = [...글제목];
  //   newArray[0] = '여자 코트 추천';
  //   글제목변경(newArray);
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {/* <button onClick={ change }>버튼</button> */}

      {
        글제목.map(function(글, i){
          return(
            <div className="list">
              <h3 onClick={()=>{누른제목변경(i); modal변경(true)}}> { 글 } <span onClick={()=> {
                let newArray = [...좋아요];
                newArray[i] = parseInt(newArray[i] + 1);
                좋아요변경(newArray);
              }}>👍</span> {좋아요[i]}</h3>
              <p>2월 17일 발행</p>
              <hr/>
            </div>
          )
        })
      }

      <input onChange={(e)=>{입력값변경(e.target.value); console.log({입력값})}}/>

      <button onClick={()=>{modal변경(!modal)}}>버튼</button>
      {
        modal === true
        ? <Modal 글제목={글제목} 누른제목={누른제목}/>
        : null
      }
      

    </div>
  );
}

function Modal(props) {
  return(
    <div className="modal">
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  ); 
}

export default App;
