import React, { useState } from 'react'
import { Button } from '@mui/material';
import axios from 'axios';
import { PostAdd } from '@mui/icons-material';


function App() {
const [dataa,setData]=useState([])
const  hitAPI=()=>{

axios.get('https://jsonplaceholder.typicode.com/posts',{name:"ABC",title:"123",}).then((res)=>{
  console.log(res.data)
setData(res.data)
})
  
};

const  postAPI=()=>{
  axios.get('https://jsonplaceholder.typicode.com/posts',{name:"ABC",title:"123",}).then((res)=>{
    console.log(res);})
  };
  
  
const  commentsAPI=()=>{
  axios.get('https://jsonplaceholder.typicode.com/comments',{name:"ABC",title:"123",}).then((res)=>{
    console.log(res);})
  };

  const  albumsAPI=()=>{
    axios.get('https://jsonplaceholder.typicode.com/albums',{name:"ABC",title:"123",}).then((res)=>{
      console.log(res);})
    };

    const  photosAPI=()=>{
      axios.get('https://jsonplaceholder.typicode.com/photos',{name:"ABC",title:"123",}).then((res)=>{
        console.log(res);})
      };

      const  photoAPI=()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos',{name:"ABC",title:"123",}).then((res)=>{
          console.log(res);})
        };
        const  todoAPI=()=>{
          axios.get('https://jsonplaceholder.typicode.com/todo',{name:"ABC",title:"123",}).then((res)=>{
            console.log(res);})
          };
          const  userAPI=()=>{
            axios.get('https://jsonplaceholder.typicode.com/users',{name:"ABC",title:"123",}).then((res)=>{
              console.log(res.data);})
            };
  return (
    <div>App{console.log("yahaa==>>",dataa)}
    {dataa.map((e)=>(e.id,e.title))}
       <button onClick={postAPI}>posts</button>
       <button onClick={commentsAPI}>comments</button>
       <button onClick={albumsAPI}>albums</button>
       <button onClick={photoAPI}>photos</button>
       <button onClick={todoAPI}>todos</button>
       <button onClick={userAPI}>users</button>
      <button onClick={hitAPI}>CLick Me</button>
    </div>
  
    )
}

export default App




//   // import logo from './logo.svg';
//   // import './App.css';
// import Home from './components/Home';
// import { BrowserRouter,Route,Routes } from "react-router-dom";
// import Signup from './components/Signup';
// import Profile from './components/Profile';

// function App() {
//   return (

//   <BrowserRouter>

// <Routes>
//   <Route path="/" element={<Home/>}/>
//   <Route path="/Profile/:id" element={<Profile/>}/>
//   <Route path="Signup" element={<Signup/>}/>
//   {/* there are four api  get post delete edit put  */}

// </Routes>

//   </BrowserRouter>
   
   

//   );
// }

// export default App;
