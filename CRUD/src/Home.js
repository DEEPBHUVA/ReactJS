import './index.css';
import {useNavigate, useParams} from "react-router-dom"
function Home(){
    const navigate= useNavigate();
    return (
    <>
    <div className='homecontaint'>
        <h1>Hello World</h1>
        <p className='text-gray-400'>"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua."
        </p>
        <button onClick={()=>{
            navigate("/About")
          }} class="home-button">Let's Start <span> <i class="fa fa-arrow-right"></i></span> </button>
    </div>
    </>
    )
}

export default Home;