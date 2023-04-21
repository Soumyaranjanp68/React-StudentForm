import React , {useState}from 'react';
import { useNavigate } from 'react-router-dom';
import './Myform.css';


function MyForm() {

    const navigate=useNavigate()
     //input field state
     const [fullname, setFullname] =useState("");
     const [mobile, setMobile] =useState("");
     const [gender, setGender] =useState("");
     const [address, setAddress] =useState("");
  
      const submit =(e)=>{
        e.preventDefault();
        const data = {
          fullname,mobile,gender,address
        }
        navigate("/show",{state:data})
      }
  
  
  
  
    return (
      <div className="App">
        <h1>Student form List</h1>
        <div className="form-container">
          <form  onSubmit={(e)=>submit(e)} className="form-group">
            <label>Full Name</label>
            <input type="text" name='fullname' className="form-control" placeholder="Full Name" required 
            onChange={(e)=>setFullname(e.target.value)} value={fullname}></input>
            <br></br>
            <label>Mobile Number</label>
            <input type="text" name='mobile' className="form-control" placeholder="Mobile number" required 
            onChange={(e)=>setMobile(e.target.value)} value={mobile}></input>
            <br></br>
            <label>Gender</label>
            <input type="text" name='gender' className="form-control" placeholder="Gender" required 
            onChange={(e)=>setGender(e.target.value)} value={gender}></input>
            <br></br>
            <label>Address</label>
            <input type="text" name='address' className="form-control" placeholder="Address" required 
            onChange={(e)=>setAddress(e.target.value)} value={address}></input>
            <br></br>
            <button type="submit" className="btn btn-primary">Submit </button>
          </form>
      </div>
      </div>
    )
  }
  
  export default MyForm;
  