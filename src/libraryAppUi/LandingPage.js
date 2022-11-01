import React, { useEffect, useRef, useState } from 'react'

const LandingPage = () => {
    const refSearch=useRef();
    const [Data,setData]=useState([]);
    useEffect(()=>{
        fetch("https://openlibrary.org/search.json?q=fantastic&mode=ebooks&has_fulltext=true")
        .then((result)=>{
         result.json().then((res)=>{
        //    console.log(res.docs)
           setData(res.docs);
            })   
        })
    },[]) 
    const searchInp=(e)=>{
           e.preventDefault();
          let inp=refSearch.current.value;
          fetch("https://openlibrary.org/search.json?q="+inp+"&mode=ebooks&has_fulltext=true")
         .then((result)=>{
          result.json().then((res)=>{
                // console.log(res.docs)
                setData(res.docs);
            })
        })
    }
    const displayDetail=(numISBN)=>{
       fetch(" https://openlibrary.org/api/books?bibkeys=ISBN:"+numISBN+"&jscmd=details&format=json")
       .then((result)=>{
        result.json().then((res)=>{
            console.log(res);
            let x="ISBN:"+numISBN;
            window.location.href=res[x].info_url;
        })
       })
    }
    return (
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
                                 <div id="grid" onClick={()=>displayDetail(item.isbn[0])}>
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
  )
}

export default LandingPage