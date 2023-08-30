import { Link } from "react-scroll";
import "../Navbar/Navbar.css"

function Navbar(){
    return(
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top border-bottom">
                <div class="container-fluid">
                    {/* Logo */}
                    <a class="logo navbar-brand navbar-brand" href="#">IT Worker</a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse nav justify-content-end" id="navbarNav">
                    <ul class="navbar-nav nav-underline">
                        <li class="nav-item">
                            <Link to="intro" smooth={true} duration={100} className='nav-link'>Intro</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="contact" smooth={true} duration={100} className='nav-link'>Contact</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;