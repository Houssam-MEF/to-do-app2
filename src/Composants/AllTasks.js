import { React, useState, useRef } from 'react';
import   Task  from './Task';
import { v4 as uuidv4 } from 'uuid';



const AllTasks = () => {

    const [task, setTask] = useState("");
    const [importance, setImportance] = useState("LowImp");
    
    const [arrTasks, setArrTasks] = useState([
       {id:uuidv4(), name:"Sport",done : false, imp: "LowImp"},
       {id:uuidv4(), name:"coder en React",done : false, imp: "HighImp"},
       {id:uuidv4(), name:"Film",done : false, imp: "LowImp"}
    ])

    const radio = useRef();
    const rad = (e)=>{
       if (e.target.checked){
          setImportance(e.target.value);
       }
    }

    
    let names = [];
    arrTasks.map((el)=>{return names.push(el.name)});
    
    const ajouter = (task)=>{
       if (task.trim() === "") {
          return alert("Saisissez une tache")
       };
       console.log(names);
       console.log(task);
       
       if (task.toString() in names){
          return alert("laa")
       }
          let newArr = [...arrTasks];
          let newTask = {};
          newTask.id = uuidv4();
          newTask.name = task;
          newTask.done = false;
          newTask.imp = importance;
          newArr.push(newTask);
          setArrTasks(newArr);
          setTask("");
    }
    
    const supprimer = (idx)=>{
       let newArr = arrTasks.filter((el)=>{
          return el.id != idx;
       })
       setArrTasks(newArr);
    }

    const change = (id)=>{
       let arr = arrTasks.map((e)=>{
          if (e.id === id){
             e.done = !e.done;
          }
          return e
       });
       setArrTasks(arr);
    }


   return (
   <div id="div">
   <h1>To Do App</h1>
   <input className='txt' type="text" value={task} onChange={(e)=>{setTask(e.target.value)}} placeholder='Saisissez une tâche'/>
   <input className='btn' type="button" value="Ajouter" onClick={()=>ajouter(task)}/>
   <div id='imp'>
   <label>Importance :</label>
   <br />
      <input type="radio" value="HighImp" name='imp' onClick={(e)=>rad(e)} />Elevé
      <input type="radio" value="LowImp" name='imp' onClick={(e)=>rad(e)}/>Basse
   </div>
   <hr />
   <ol>
      <h3>Plus Important :</h3>
      {
         arrTasks.map((el)=>{
            if (el.imp == "HighImp"){
               return(
                  <div>
            <li key={el.id} >
                     <Task txt = {el} delf = {()=>supprimer(el.id)} chg={()=>change(el.id)} />
            </li>
               </div>
            )
         }
         }
         )
      }
      <h3>Moins Important :</h3>
      {
         arrTasks.map((el)=>{
            if (el.imp == "LowImp"){
               return(
                  <div>
            <li key={el.id} >
                     <Task txt = {el} delf = {()=>supprimer(el.id)} chg={()=>change(el.id)} />
            </li>
               </div>
            )
         }
         }
         )
      }
   </ol>
   </div>
   )
}

export default AllTasks;