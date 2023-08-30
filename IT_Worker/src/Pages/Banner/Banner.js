import "../Banner/Banner.css"

function Banner(){
    return(
        <>
        <div name="intro" className="full-background">
            <section class="intro bg-cover bg-center d-flex align-items-center dark-overlay" id="intro">

                <div class="overlay-content text-white w-100">
                    <div class="container text-center">
                    <div class="row">
                        <div class="col-lg-11 mx-auto">
                            <div class="m-5">
                                <img src="https://d19m59y37dris4.cloudfront.net/it-worker/3-1/img/logo-big.9ae8bf80.png" alt="..." width="130"/>
                            </div>
                            <h1 class="intro-heading mb-5">Hello, hola, नमस्ते !</h1>
                            <p class="h3 intro-text fw-normal">I grind HTML and CSS and then weld them with PHP into beautiful and efficient websites.</p>
                        </div>
                    </div>
                    </div>
                </div>
                
            </section>
        </div>
        </>
    )
}

export default Banner