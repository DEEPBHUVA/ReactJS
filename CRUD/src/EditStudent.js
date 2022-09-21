import { useState , useEffect } from "react";
import { useNavigate , useParams } from "react-router-dom";
import './index.css';

function EditStudent(){
    const navigate = useNavigate();
    const [data , setData] = useState({});
    const param =useParams();
    useEffect(()=>{
        fetch('https://630ce281b37c364eb7fbd9d2.mockapi.io/students/' + param.id,{method:"GET"}).then((res)=>{
            return res.json();
        }).then((res)=>{
            setData(res)
            // console.log(res);
        });
    },[])

    return(
        <>
        <div className="form-container">
            <h1 class="mb-3 head text-light">Edit Student Details</h1>
        {/* <div class="form-floating mb-3">
            <input type="text" value={data.createdAt} class="form-control" id="floatingInput" placeholder="Created At.." onChange={(e)=>{
                setData({...data,createdAt:e.target.value})}}></input>
                <label for="floatingInput">Created At..</label>
        </div> */}
        <div class="form-floating">
            <input type="text" value={data.name} class="form-control" id="floatingPassword" placeholder="Name" onChange={(e)=>{
                setData({...data,name:e.target.value})}}></input>
                <label for="floatingPassword">Enter Name..</label>
        </div>
        <div class="form-floating mt-3">
            <input type="text" value={data.avatar} class="form-control" id="floatingPassword" placeholder="Name" onChange={(e)=>{
                setData({...data,avatar:e.target.value})}}></input>
                <label for="floatingPassword">Enter Image Link..</label>
        </div>
        <div class="form-floating mt-3">
            <input type="text" value={data.rollno} class="form-control" id="floatingPassword" placeholder="Roll No" onChange={(e)=>{
                setData({...data,rollno:e.target.value})}}></input>
                <label for="floatingPassword">Enter Rollno..</label>
        </div>
        <div class="form-floating mt-3">
            <input type="text" value={data.mobileno} class="form-control" id="floatingPassword" placeholder="Mobile Number" onChange={(e)=>{
                setData({...data,mobileno:e.target.value})}}></input>
                <label for="floatingPassword">Enter Mobile Number..</label>
        </div>
        <div class="form-floating mt-3">
            <input type="text" value={data.city} class="form-control" id="floatingPassword" placeholder="City" onChange={(e)=>{
                setData({...data,city:e.target.value})}}></input>
                <label for="floatingPassword">Enter City..</label>
        </div>
        
            <input type="button" class="edit-button mt-3" value="Edit Student" onClick={()=>{
                fetch('https://630ce281b37c364eb7fbd9d2.mockapi.io/students/'+param.id
                ,{method:"PUT",
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


export default EditStudent;