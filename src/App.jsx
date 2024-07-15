import { useState,useEffect } from 'react';
import './app.css'
import Trivia from './components/Trivia'
import Timer from './components/Timer'
function App() {
  const [questionnumber ,setquestionumber]=useState(1)
  const [stop,setStop]=useState(false)
  const [earned,setEarned]=useState("$ 0");
  const data=[
    {
      id:1,
      question:"rolex is a company that specializies in what type of products?",
      answers:[
        {
          text:"watches",
          correct:true,
        },
        {
          text:"phones",
          correct:false,
        },
        {
          text:"cars",
          correct:false,
        },
        {
          text:"food",
          correct:false,
        }
      ]
    },
    {
      id:2,
      question:"ISRO(indian space research organization) BASED IN WHICH COUNTRY",
      answers:[
        {
          text:"usa",
          correct:false,
        },
        {
          text:"india",
          correct:true,
        },
        {
          text:"australia",
          correct:false,
        },
        {
          text:"japan",
          correct:false,
        }
      ]
    },
    {
      id:3,
      question:"greatest cricketer of india team currently",
      answers:[
        {
          text:"rohit",
          correct:false,
        },
        {
          text:"virat",
          correct:true,
        },
        {
          text:"dhoni",
          correct:false,
        },
        {
          text:"hardhik",
          correct:false,
        }
      ]
    },
    {
      id:4,
      question:"third largest economy of the world",
      answers:[
        {
          text:"usa",
          correct:false,
        },
        {
          text:"india",
          correct:true,
        },
        {
          text:"australia",
          correct:false,
        },
        {
          text:"japan",
          correct:false,
        }
      ]
    }

  ]
  const moneyPyramid=[
    {id:1,amount:"$ 100"},
    {id:2,amount:"$ 200"},
    {id:3,amount:"$ 300"},
    {id:4,amount:"$ 400"},
    {id:5,amount:"$ 500"},
    {id:6,amount:"$ 600"},
    {id:7,amount:"$ 700"},
    {id:8,amount:"$ 800"},
    {id:9,amount:"$ 900"},
    {id:10,amount:"$ 1000"},
    {id:11,amount:"$ 1100"},
    {id:12,amount:"$ 1200"},
    {id:13,amount:"$ 1300"},
    {id:14,amount:"$ 1400"},
    {id:15,amount:"$ 1500"},

  ].reverse();

  useEffect(() => {
    if (questionnumber > 1) {
      const earnedAmount = moneyPyramid.find(m => m.id === questionnumber - 1)?.amount;
      setEarned(earnedAmount);
    }
  }, [ questionnumber]);  
  return (
    <div className="app">
    <div className='main'>
      {stop? <h1 className='endText'>You earned:{earned}</h1>:(
      <>
      <div className="top">
         <div className="timer"><Timer setStop={setStop} questionnumber={questionnumber}/></div>
      </div>
      <div className="bottom">
        <Trivia data={data} setStop={setStop}questionnumber={questionnumber} setquestionumber={setquestionumber} />
      </div>
      </>
      )};
    </div>
    <div className='pyramid'>
    <ul className='moneyList'>
        {moneyPyramid.map(m=>(
     <li className={questionnumber===m.id? 'moneyListItem active':'moneyListItem'} key={m.id}>
        <span className='moneyListItemNumber'>{m.id}</span>
        <span className='moneyListItemTextAmount'>{m.amount}</span>
      </li>
      ))}
    </ul>

      
    </div>
    </div>
  );
}

export default App;
