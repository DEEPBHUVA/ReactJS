import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './index.css';

function Smartphone(){
    const [data, setData] =useState([]);
    useEffect(()=>{
        fetch("https://6319dc446b4c78d91b45c4d6.mockapi.io/smartphone")
        .then((res)=>{
            return res.json();
        }).then((res)=>{
            setData(res);
        })
    },[]);

    const formetedphone=data.map((pro)=>{
        return(
            <>
            <div className="card" style={{width: "18rem"}}>
                <Link to={"../Smartphone/" +pro.id}>
                <img src={pro.PhoneImage} class="card-img-top" alt="..."/>
                <p>_______________________________________</p>
                <div class="card-body">
                <h1 class="card-title">{pro.PhoneName}</h1>
                <h1>{pro.PhonePrice}</h1>
                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a> */}
               
                </div>
                 </Link>
            </div>
            </>
        )
    })

    return formetedphone;

}
export default Smartphone;
