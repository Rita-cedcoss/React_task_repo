import React from 'react'
const CoronaData = (props) => {

    return (
    <div id="outer">
       <h1>Corona Meter App</h1>
      <table>
        <tr>
          <th><button onClick={props.Countrysort}>Country Name</button></th>
          <th><button onClick={props.Continentsort}>Continent</button></th>
          <th><button onClick={props.Population}>Population</button></th>
          <th><button onClick={props.TotalCases}>Total Cases</button></th>
          <th><button onClick={props.TotalDeaths}>Total Deaths </button></th>
          <th><button onClick={props.TotalRecovered}>Total recoveries </button></th>          
        </tr>
        {
          props.arrData.map((item)=>{
            return(
              <>
             <tr>
               <td>{item.Country}</td>
               <td>{item.Continent}</td>
               <td>{item.Population}</td>
               <td>{item.TotalCases}</td>
               <td>{item.TotalDeaths}</td>
               <td>{item.TotalRecovered}</td>          
             </tr>
              </>
            )
          })
        }
        <tr>
          <td>hello</td>
          <td>sfsf</td>
          <td>sfdsf</td>
          <td>sfdgfdg</td>          
        </tr>
      </table>
    </div>
  )
}

export default CoronaData