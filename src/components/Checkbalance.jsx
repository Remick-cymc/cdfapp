import React, {useState, useEffect} from 'react'
import axios from "axios"
const Checkbalance = () => {
const [data, setData] = useState([])
const [loading, setLoading] = useState(false)
const [errors, setErrors] = useState(null)
useEffect(() =>{
  // fetch the data from api 
  setLoading(true)
  axios.get("https://remickewoton.pythonanywhere.com/api/check_balance")
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
      <th scope="col">#(email)</th>
  
    
    </tr>
  </thead>
  <tbody>
    {data?.map((Checkbalance)  =>(
         <tr>
         <th scope="row">{ Checkbalance?.email }</th>
    
         
       </tr>
    ))}
 
 
  </tbody>
</table>
  )
};

export default Checkbalance
