import React, { useEffect, useRef, useState } from 'react'

const Component = () => {
     const [Data,setData]=useState([]);
     let refSearch=useRef();
     useEffect(()=>{
        fetch(" https://openlibrary.org/search.json?q=react&mode=ebooks&has_fulltext=true")
        .then((result)=>{
        result.json()
        .then((resp)=>{
               console.log(resp.docs)
               setData(resp.docs);
            })
        })
        refSearch.current.focus();
     },[])
     const searchInp=(e)=>{
        e.preventDefault();
        let inpval=refSearch.current.value;
        // console.log(inpval);
        fetch("https://openlibrary.org/search.json?q="+inpval+"&mode=ebooks&has_fulltext=true")
        .then((result)=>{
         result.json()
         .then((res)=>{
            console.log(res);
            setData(res.docs);
         })
        })
     }  
     const clickHandler=(num)=>{
        fetch("https://openlibrary.org/api/books?bibkeys=ISBN:"+num+"&jscmd=details&format=json")
        .then((result)=>{
        result.json().then((res)=>{
            console.log(res);
         let x='ISBN:'+num;
         console.log(res[x]);
         window.location.href=res[x].info_url;
        })
        })
     }
    return (
    <>
    <div id="outer">
      <div id="navTop">
      <div id="left">
      <h1>Library_App</h1>
      </div>
      <div id="right">
             <form onSubmit={searchInp}>
                <input ref={refSearch}  type="text"/>
             </form>
      </div>
      </div> 
      <div id="grid_container"> 
            {
                    Data.map(item=>{
                        return(
                            <>
                                 <div id="grid" onClick={()=>clickHandler(item.isbn[0])}>
                                    <img alt='' height="60%" width="90%" src={`https://covers.openlibrary.org/b/olid/${item.cover_edition_key}-M.jpg`}/>
                                   
                                    <h3>{item.title}</h3>
                                    <p>
                                     {item.author_name}             
                                    </p>
                                 </div>
                            </>
                        )
                    })              
            }
      </div>
    </div>
    </>
    
  )
}

export default Component