import React ,{useState} from 'react';
import "./App.css";
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions] = useState(data);
  return (
    <main>
     <div className='container'> 
       <h3>Questions et Reponses aux login </h3>
       <section className='info'>
           {questions.map((question)=>{
             return(
               <SingleQuestion key={question.id} {...question} ></SingleQuestion>
             )
           })}
       </section>
     </div>
    </main>
  );
}

export default App;
