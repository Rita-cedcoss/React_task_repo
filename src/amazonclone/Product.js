import React from "react";
const Product = (props) => {
    console.log(props.arr);
  return (
    <>
    <div id="prodOuter">
      <div id="prodDiv">
       {
        props.arr.map((item,i)=>{
            return(
                <>
                <div id="gridDiv" ind={i} onClick={props.prodDisplay}>
                <img
                  className="imgprod"
                  alt=""
                  height="40%"
                  width="80%"
                  src={item.image}
                ></img>
                <p>{item.productname}</p>
                <p>{item.price}</p>
              </div>
                </>
            )
        })

       }
         
      </div>
     
    </div>
    {/* <Productdesp></Productdesp> */}
    </>

  );
};

export default Product;
