import React from 'react';

const Task = ({txt, delf,chg}) => {
   return (
   <>
   <input className='txt' type="text" style={txt.done ? {color : "rgb(109, 200, 109)"} : {color : "rgb(255, 45, 45)"}} value={txt.name} disabled />
   <input className='btn' type="button" value="Supprimer" onClick={delf}  />
   <input className='radio' type="checkbox" checked={txt.done} onChange={chg} style={{scale : "200%"}}/>
   <label style={txt.done ? {color : "rgb(109, 200, 109)"} : {color : "rgb(255, 45, 45)"}}> {(txt.done) ? "Done ✓" : "Not Done ✕"} </label>
   </>
   )
}


export default Task;