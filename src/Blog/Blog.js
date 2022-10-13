import React, { useState } from 'react'
import Navbar from './navbar'

const Blog = () => {
  const[arrBlog,setArrblog]=useState([{title:"First Blog",description:"Lorem ipsum dolor sit amet,labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"}]);
  const addblog=()=>
  { 
    let title=document.getElementById("title").value;
    let blogcontent=document.getElementById("blogdescription").value;
    let obj={title:title,description:blogcontent};
    arrBlog.push(obj);
    setArrblog([...arrBlog]);
    console.log(arrBlog);

  }
  return (
    <>
    <div id="outer">
    <Navbar></Navbar>
    <div id="outerBlog">
      <div id="left">
       <h1>Write Your Blogs</h1> 
       <p>Blogging is not a Rocking Science. It's about being Yourself and putting what you have into it</p>
       <input id="title" type="text" placeholder='Blog Title....'></input><br></br>
       <textarea id="blogdescription" placeholder='Blog Content.....'></textarea><br/>
       <button onClick={addblog}>Add Blog</button>
      </div>
    </div>
    <div id="Blogbottom">
        <div id="blogdetail">
          {
            arrBlog.map(item=>
              {
                return(
                  <div id="blogcontent">
                  <img className="img_blog" alt='' src='https://media.istockphoto.com/photos/blogging-woman-reading-blog-picture-id887987150?k=20&m=887987150&s=612x612&w=0&h=vCVYGvEkLb3DuCL7DOSoNm8i78Lci4oCt7XD4HGasIg='></img>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                )
              })
          }
         
          
        </div>
    </div>
    </div>
    </>
  )
}

export default Blog