import React , {useEffect, useState} from 'react'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Todos from "./Components/Todos";
import AddTODo from './Components/AddTODo';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  let initTodo; 
  if( localStorage.getItem("todo")==null)
  {
    initTodo =[];
  }
  else{
    initTodo =JSON.parse(localStorage.getItem("todo"));
  }
  const onDelete = (to) =>{
    console.log("I am on delete",todo); 
    setTodo(todo.filter((t)=>{
      console.log("e value",t);
     return t!== to;
    }));  
   
    
  }
  
   const addTodo = (title,desc) =>{
    let sno; 
    if(todo.length===0){
      let sno = 0
    }
    else {
      sno =todo[todo.length-1].sno +1; 

    }
    const myTodo = {
      sno : sno ,
      title :title,
      desc:desc
    }
setTodo([...todo,myTodo])
   }
  const [todo ,setTodo]=useState(initTodo);
  localStorage.setItem("todo",JSON.stringify(todo));
  useEffect(() => {
    localStorage.setItem("todo",JSON.stringify(todo));
  } , [todo])    
  return (
    
    <div className="App">
      {/* <Router> */}

      <Header title="Todo List" searchBar={false } />
      {/* <Routes> */}

      {/* <Route   path="/" render={()=>{
        return(
        <> */}
        <AddTODo addTodo={addTodo }/>
        <Todos todo={todo} onDelete={onDelete}/>
        {/* </>)
      }}>
          
       </Route>  */}

        
          {/* <Route  exact path="/about">
            <About />
          </Route> */}
         
          
        {/* </Routes> */}
      
      <Footer />
      {/* </Router> */}
    </div>
  );
}

export default App;
