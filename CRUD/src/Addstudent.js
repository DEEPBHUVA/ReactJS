import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Addstudent(){
    const navigate = useNavigate();
    const [data , setData] = useState([]);
    return(
        <>
        
        <div className="form-container">
            <h1 class="mb-3 head text-light">Add Student Details</h1>
        {/* <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="Created At.." onChange={(e)=>{
                setData({...data,createdAt:e.target.value})}}></input>
                <label for="floatingInput">Created At..</label>
        </div> */}
        <div class="form-floating">
            <input type="text" class="form-control" id="floatingPassword" placeholder="Name" onChange={(e)=>{
                setData({...data,name:e.target.value})}}></input>
                <label for="floatingPassword">Enter Name..</label>
        </div>
        <div class="form-floating mt-3">
            <input type="text" class="form-control" id="floatingPassword" placeholder="Name" onChange={(e)=>{
                setData({...data,avatar:e.target.value})}}></input>
                <label for="floatingPassword">Enter Image Link..</label>
        </div>
        <div class="form-floating mt-3">
            <input type="text" class="form-control" id="floatingPassword" placeholder="Roll No" onChange={(e)=>{
                setData({...data,rollno:e.target.value})}}></input>
                <label for="floatingPassword">Enter Rollno..</label>
        </div>
        <div class="form-floating mt-3">
            <input type="text" class="form-control" id="floatingPassword" placeholder="Mobile Number" onChange={(e)=>{
                setData({...data,mobileno:e.target.value})}}></input>
                <label for="floatingPassword">Enter Mobile Number..</label>
        </div>
        <div class="form-floating mt-3">
            <input type="text" class="form-control" id="floatingPassword" placeholder="City" onChange={(e)=>{
                setData({...data,city:e.target.value})}}></input>
                <label for="floatingPassword">Enter City..</label>
        </div>

            <input type="button" className="add-button mt-3" value="AddStudent" onClick={()=>{
                fetch('https://630ce281b37c364eb7fbd9d2.mockapi.io/students/'
                ,{method:"POST",
                body:JSON.stringify(data),
                headers:{"Content-Type" : "application/json"}
                })
                .then((res)=>{
                    navigate('/Student');
                })
            }}></input>
         </div>
        </>
    )
}
export default Addstudent;