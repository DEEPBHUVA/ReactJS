import Footer from "../../component/Footer/Footer"
import Navbar from "../../component/Navbar/Navbar"
import Banner from "../Banner/Banner"
import Contact from "../Contact/Contact"

function Home(){
    return(
        <>
            <Navbar/>
            <Banner/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default Home