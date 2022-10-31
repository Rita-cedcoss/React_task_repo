import React, { useEffect } from "react";

const Task2 = () => {
  useEffect(()=>{
    console.log("hello");
  },[])
    return (
    <div id="task2_Outer">
      <div id="Banner">
        <div id="navTop">
          <div id="navLeft">
            <img
              className="img_logo"
              alt=""
              height="50%"
              width="50%"
              src="Ternolog.png"/>
          </div>
          <div id="navRight">
            <p>How it works </p>
            <p>Road Map</p>
            <p>White Paper</p>
            <p>Connect</p>
            <p>Advertising</p>
            <button className="btnLogin">Dashboard Login</button>
          </div>
        </div>
        <div id="middle">
          <p>The Future is now</p>
          <h1>The World’s</h1>
          <h1>Fastest Blockchain</h1>
          <p>
            Lorem ipsum dolor sit amet. Sed inventore neque et ipsam sunt cum
            assumenda corrupti sed{" "}
          </p>
          <button className="btnupdates">Recieve Email Updates</button>
        </div>
        <div id="bottom">
          <img height="100%" width="100%" alt="" src="frame_figma.png" />
        </div>
      </div>
    </div>
  );
};

export default Task2;
