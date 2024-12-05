import React, {useState, useEffect} from 'react'
import axios from "axios"
const Payment = () => {
const [data, setData] = useState([])
const [loading, setLoading] = useState(false)
const [errors, setErrors] = useState(null)
useEffect(() =>{
  // fetch the data from api 
  setLoading(true)
  axios.get("https://remickewoton.pythonanywhere.com/api/make_payment")
  .then((response) =>{
    setLoading(false)
    setData(response?.data)
  })
  .catch((error)=>{
    setLoading(false)
    setErrors(error?.message)
  })


}, [])
if (loading){
  return <div> Loading...</div>
}
if (errors){
  return <div> An Error Occured</div>
}
  return (
    <table class="table table-dark mt-3">
  <thead>
    <tr>
      <th scope="col">#(Phone)</th>
      <th scope="col">Amount</th>
      <th scope="col">Invoice No</th>
    
    </tr>
  </thead>
  <tbody>
    {data?.map((Payment)  =>(
         <tr>
         <th scope="row">{ Payment?.phone }</th>
         <td>{ Payment?.Amount }</td>
         <td>{ Payment?.Invoice_no }</td>
         
       </tr>
    ))}
 
 
  </tbody>
</table>
  )
};

export default Payment
