function Contact(){
    return(
        <>
            <section name="contact" className="my-5">
                <div class="container wow bounceIn">

                    <header class="text-center mb-5">
                    <h2 class="heading">Contact me</h2>
                    </header>

                    <div class="row">
                    <div class="col-lg-7 mx-auto">
                        <form>
                        <div class="row gy-3">
                            <div class="col-lg-6">
                            <input class="form-control" type="text" name="firstname" placeholder="Your firstname *" required/>
                            </div>
                            <div class="col-lg-6">
                            <input class="form-control" type="text" name="lastname" placeholder="Your lastname *" required/>
                            </div>
                            <div class="col-lg-12">
                            <textarea class="form-control" name="message" rows="7" placeholder="message for me *"> </textarea>
                            </div>
                            <div class="col-12 text-center">
                            <button class="btn btn-outline-primary" type="submit">Send message</button>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                 </div>
            </section>
        </>
    )
}

export default Contact