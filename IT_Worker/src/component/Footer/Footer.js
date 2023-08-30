import "../Footer/Footer.css"

function Footer(){
    return(
        <>
            <footer class="py-5 bg-dark text-light">
                <div class="container py-3">
                    <div class="row gy-3 mb-4 text-center align-items-center">
                    <div class="col-md-6 text-lg-start">
                        <ul class="list-inline">
                        <li class="list-inline-item"><a class="social-link facebook" href="#"> <i class="fab fa-facebook-f"></i></a></li>
                        <li class="list-inline-item"><a class="social-link instagram" href="#"> <i class="fab fa-instagram"></i></a></li>
                        <li class="list-inline-item"><a class="social-link pinterest" href="#"> <i class="fab fa-pinterest"></i></a></li>
                        <li class="list-inline-item"><a class="social-link email" href="#"> <i class="fas fa-envelope"></i></a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 text-lg-end">
                        <p class="mb-0 font-serif text-sm">© 2023 Your name goes here. All rights reserved.</p>
                    </div>
                    </div>
                    <div class="text-center">
                    <p class="mb-0 small">Template designed by <a href="https://bootstrapious.com">Bootstrapious</a>. </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer