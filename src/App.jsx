import questions from "./data";
import Questions from './Questions'
import {useState} from 'react'
const App = () => {
  const [activeId,setActiveId]=useState(null);
  const toggleFun=(id)=>
  {
    const newActiveId=id===activeId?null:id;
    setActiveId(newActiveId);
  }
  return <main style={{backgroundColor:"var( --primary-100)"}}>
  
    <Questions questions={questions} activeId={activeId} toggleFun={toggleFun}/>
  </main>
};
export default App;
