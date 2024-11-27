import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const SinQues = ({id,title,info,activeId,toggleFun}) => {
  const isActive=activeId===id;
  return (
    <article key={id} style={{margin:"0 auto",padding:"20px",boxShadow:"1px 1px 4px var(--grey-400)",marginBottom:"20px"}}>
    {<div style={{display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1rem"}}>
    <h5 style={{color: "var(--grey-700)"}}>
           {title}
    </h5>
         <button style={{width:"30px",height:"30px",borderRadius:"15px",borderColor:"transparent",
           border:"none",backgroundColor:"var(--primary-800)",fontSize:"18px",color:"white",marginRight:"20px"}} onClick={() => toggleFun(id)}>
             {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
             </button>
           
       </div>}
       {isActive && <p>{info}</p>}   
</article>
  )
}

export default SinQues