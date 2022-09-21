import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './index.css';

function AddSmartphone(){
    const navigate = useNavigate();
    const [data , setData] = useState([]);

    return(
        <>
        <div className="addform-container">
            <h1 className="mb-3">Add Phone Details</h1>
        <div class="form-floating">
            <input type="text"  class="form-control" id="floatingPassword" placeholder="Enter Phone Name" onChange={(e)=>{
                setData({...data,PhoneName:e.target.value})}}></input>
                <label for="floatingPassword">Enter Phone Name..</label>
        </div>
        <div class="form-floating mt-3">
            <input type="text"  class="form-control" id="floatingPassword" placeholder="Enter Image Link" onChange={(e)=>{
                setData({...data,PhoneImage:e.target.value})}}></input>
                <label for="floatingPassword">Enter Image Link..</label>
        </div>
        <div class="form-floating mt-3">
            <input type="text"  class="form-control" id="floatingPassword" placeholder="Enter Model Name" onChange={(e)=>{
                setData({...data,PhoneModel:e.target.value})}}></input>
                <label for="floatingPassword">Enter Model..</label>
        </div>
        <div class="form-floating mt-3">
            <input type="text"  class="form-control" id="floatingPassword" placeholder="Enter Phone Maker" onChange={(e)=>{
                setData({...data,PhoneMaker:e.target.value})}}></input>
                <label for="floatingPassword">Enter Phone Maker..</label>
        </div>
        <div class="form-floating mt-3">
            <input type="text" class="form-control" id="floatingPassword" placeholder="Enter Description" onChange={(e)=>{
                setData({...data,PhoneDescription:e.target.value})}}></input>
                <label for="floatingPassword">Enter Description..</label>
        </div>
        <div class="form-floating mt-3">
            <input type="text" class="form-control" id="floatingPassword" placeholder="Enter Phone Price" onChange={(e)=>{
                setData({...data,PhonePrice:e.target.value})}}></input>
                <label for="floatingPassword">Enter Price..</label>
        </div>
        
        <input type="button" className="add-button mt-3" value="Add New" onClick={()=>{
                fetch('https://6319dc446b4c78d91b45c4d6.mockapi.io/smartphone/'
                ,{method:"POST",
                body:JSON.stringify(data),
                headers:{"Content-Type" : "application/json"}
                })
                .then((res)=>{
                    navigate('/Smartphone');
                })
            }}></input>
         </div>
        </>
    )

}
export default AddSmartphone;