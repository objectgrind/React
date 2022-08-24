import React, { useState } from 'react'

const AddTODo = (props) => {
    const [title ,settitle] = useState("");
    const [desc ,setdesc] = useState("");

    const submit =(e) => {
   e.preventDefault()
   if(!title || !desc)
   {
    alert("Title or desc is missinf")
   }
   else {
    props.addTodo(title,desc); 
    settitle("");
    setdesc("");     
   }
  
    }
    return (
        <div classNameName='container my-3'>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlfor="title" className="form-label">Todo Add title</label>
                    <input type="text" value={title}  onChange={(e) =>{settitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlfor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) =>{setdesc(e.target.value)}} className="form-control" id="desc" />
                </div>
               
                <button type="submit" className="btn btn-sm btn-success">Add to do</button>
            </form>
        </div>
    )
}

export default AddTODo
