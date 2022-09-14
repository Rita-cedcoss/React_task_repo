import React from 'react'
import './Product_Tbl.css'
function Producttblfunctionality(props) {
  return (
    <>
    {console.log("jokjjkklj",props)}
    <div id="product_list" className={props.classItem}>
			<table id="tblShow" > 
				 
        <tr>
					<th>SKU</th>
					<th>Name</th>
					<th>Price</th>
					<th>Quantity</th>
					
				</tr>
        {
         props.arr.map((item,i)=>{
         console.log("fsff");
          return(  
        <tr key={i}>
					<td>{item.skupname}</td>
					<td>{item.prodname}</td>
					<td>{item.prodprice}</td>
					<td>{item.prodquality}</td>
				</tr>

         )})
        }
				{/* <tr>
					<td>101</td>
					<td>Product 101</td>
					<td>$150.00</td>
					<td>50</td>
					<td><a href="#21" class="edit">Edit</a><a href="21" class="delete">Delete</a></td>
				</tr>
				<tr>
					<td>102</td>
					<td>Product 102</td>
					<td>$100.00</td>
					<td>20</td>
					<td><a href="21" class="edit">Edit</a><a href="21" class="delete">Delete</a></td>
				</tr>  */}
			 </table>
		</div>
    </>
  )
}

export default Producttblfunctionality