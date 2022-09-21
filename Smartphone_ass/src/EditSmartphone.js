import { useState , useEffect } from "react";
import { useNavigate , useParams } from "react-router-dom";
import './index.css';

function EditSmartphone(){
    const navigate = useNavigate();
    const [data , setData] = useState({});
    const param =useParams();
    useEffect(()=>{
        fetch('https://6319dc446b4c78d91b45c4d6.mockapi.io/smartphone/' + param.id,{method:"GET"}).then((res)=>{
            return res.json();
        }).then((res)=>{
            setData(res)
            // console.log(res);
        });
    },[])

    return(
        <>
        <div className="editform-container">
            <h1 class="mb-3 head">Edit Phone Details</h1>
        <div class="form-floating">
            <input type="text" value={data.PhoneName} class="form-control" id="floatingPassword" placeholder="Name" onChange={(e)=>{
                setData({...data,PhoneName:e.target.value})}}></input>
                <label for="floatingPassword">Enter Phone Name..</label>
        </div>
        <div class="form-floating mt-3">
            <input type="text" value={data.PhoneImage} class="form-control" id="floatingPassword" placeholder="Name" onChange={(e)=>{
                setData({...data,PhoneImage:e.target.value})}}></input>
                <label for="floatingPassword">Enter Image Link..</label>
        </div>
        <div class="form-floating mt-3">
            <input type="text" value={data.PhoneModel} class="form-control" id="floatingPassword" placeholder="Roll No" onChange={(e)=>{
                setData({...data,PhoneModel:e.target.value})}}></input>
                <label for="floatingPassword">Enter Model..</label>
        </div>
        <div class="form-floating mt-3">
            <input type="text" value={data.PhoneMaker} class="form-control" id="floatingPassword" placeholder="Mobile Number" onChange={(e)=>{
                setData({...data,PhoneMaker:e.target.value})}}></input>
                <label for="floatingPassword">Enter Phone Maker..</label>
        </div>
        <div class="form-floating mt-3">
            <input type="text" value={data.PhoneDescription} class="form-control" id="floatingPassword" placeholder="City" onChange={(e)=>{
                setData({...data,PhoneDescription:e.target.value})}}></input>
                <label for="floatingPassword">Enter Description..</label>
        </div>
        <div class="form-floating mt-3">
            <input type="text" value={data.PhonePrice} class="form-control" id="floatingPassword" placeholder="City" onChange={(e)=>{
                setData({...data,PhonePrice:e.target.value})}}></input>
                <label for="floatingPassword">Enter Price..</label>
        </div>
        
            <input type="button" class="edit-button mt-3" value="Edit Phone" onClick={()=>{
                fetch('https://6319dc446b4c78d91b45c4d6.mockapi.io/smartphone/'+param.id
                ,{method:"PUT",
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
export default EditSmartphone;