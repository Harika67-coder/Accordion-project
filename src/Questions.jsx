
import SinQues from './SinQues';
const Questions = ({questions,activeId,toggleFun}) => {
 
  return (
  <section style={{width:"850px",boxShadow:"1px 1px 4px var(--grey-400)",backgroundColor:"white",margin:"60px",padding:"40px"}}>
     <h1 style={{color: "var(--grey-700)",textAlign:"center",marginBottom:"60px"}}>Questions</h1>
     {questions.map((question)=>{
      return  <SinQues key={question.id}  {...question} activeId={activeId} toggleFun={toggleFun}/>
     })}
  </section>)
}

export default Questions