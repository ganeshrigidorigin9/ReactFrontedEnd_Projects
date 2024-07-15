import { useEffect,useState } from "react";
export default function Trivia({
  data,
  setStop,
  questionnumber,
  setquestionumber,
  
}) {
    const [question, setQuestion] = useState(null);
    const [SelectedAnswer,setSelectedAnswer]=useState(null);
    const [className,setClassName]=useState("answer")
    
    useEffect(()=>{
      setQuestion(data[questionnumber-1]);
    },[data,questionnumber]);

    const delay=(duration,callback)=>
      {
        setTimeout(()=>{
           callback()
        },duration);
      };
    const handleClick=(a)=>{
      setSelectedAnswer(a);
      setClassName("answer active")
    delay(3000,()=>
        setClassName(a.correct? "answer correct":"answer wrong")
    );
    delay(8000,()=>
      {
        if(a.correct===true)
          {
            setquestionumber(questionnumber+1);
            setSelectedAnswer(null);
          }
          else
          {
            setStop(true);
          }
      }
  );
    }
  return (
    <div className="trivia">
        <div className="question">{question?.question}</div>
        <div className="answers">
        {question?.answers.map((a) =>(
           <div className={SelectedAnswer === a? className:"answer"} onClick={()=>handleClick(a)}>{a.text}</div>
        ))}
        </div> 
    </div>
  )
}
