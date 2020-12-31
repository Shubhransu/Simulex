<?php
include("counter.php");
?>
    <!doctype html>
    <html lang="en">

    <head>
    <title>Simulate Experiments</title>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="Lets perform exciting Physics Experiments without visiting Laboratory.">
        <meta name="keywords" content="Physics Experiments, Simulator, Virtual Lab">

        <!-- Favicon -->
        <link rel="apple-touch-icon" sizes="180x180" href="assets/images/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="assets/images/favicon-16x16.png">
        <link rel="manifest" href="assets/images/site.webmanifest">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <!-- Other CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.0/animate.min.css" integrity="sha512-kb1CHTNhoLzinkElTgWn246D6pX22xj8jFNKsDmVwIQo+px7n1yjJUZraVuR/ou6Kmgea4vZXZeUDbqKtXkEMg==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" integrity="sha512-1cK78a1o+ht2JcaW6g8OXYwqpev9+6GqOkz9xmBN9iUUhIndKtxwILGWYOSibOKjLsEdjyjZvYDq/cZwNeak0w==" crossorigin="anonymous" />
        <link rel="stylesheet" href="assets/css/style.css">
    </head>

    <body>

        <!--Header-->
        <header class="bg-black">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-dark">
                    <a class="navbar-brand dashdemo" href="#" style="color: #34eb74;">SimulEx</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-lg-auto">
                            <li class="nav-item  active">
                                <a class="nav-link rounded-pill" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link rounded-pill" href="#about">About Us</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link rounded-pill" href="experiments/index.html">Experiments</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link rounded-pill" href="#contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        <!--Header-->

        <!--Intro Section-->
        <section id="intro">
            <div class="overly">
                <div class="container intro">
                    <div class="row">
                        <div class="col justify-content-center">
                            <h1 id="parent">Simulate Experiments</h1>
                            <p class="animate__animated animate__fadeInUp">Lets perform exciting Physics Experiments without visiting Laboratory.</p>
                            <a href="#about" class="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--Intro Section-->

        <!--About Section-->
        <section id="about" class="bg-light">
            <div class="container">
                <div class="row">
                    <div class="col" style="padding: 10px 0px;">
                        <h2 class="text-center section-heading">About Us</h2>
                    </div>
                </div>
                <div class="row" data-aos="fade-up">
                    <div class="col">
                        <p class="text-justify">Physical distance and lack of resources make us unable to perform experiments, especially when they involve sophisticated instruments. We have developed a digital lab called Simulate Experiments (simulex.ml), being inspired from the website vlab.co.in an initative of Ministry of Education, Government of India. The main purpose
                            is to help physics students to understand the practical use of instruments at their own comfort zone. These simulations based experiments can be accessed remotely via internet almost on over all types of device.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col" style="padding: 10px 0px;">
                        <h2 class="text-center section-heading">Meet Our Team</h2>
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col-md-3 mrgn-top" style="padding: 0;" data-aos="fade-right" data-aos-delay="100">
                        <div class="profile-box">
                            <div class="profile">
                                <img src="assets/images/shubh1.webp" class="img-fluid img-profile" alt="Shubhransu Sahoo">
                            </div>
                            <h4 style="margin-top: 0.5rem;">Shubhransu Sahoo</h4>
                            <p class="text-muted"><i>Web Designer & Developer</i></p>
                            <div style="padding-bottom: 20px;">
                                <a class="social-link" href="https://www.facebook.com/shubhransus" target="blank"><i class="fab fa-facebook-square" aria-hidden="true"></i></a>
                                <a class="social-link" href="https://t.me/ShubhransuSahoo" target="blank"><i class="fab fa-telegram" aria-hidden="true"></i></a>
                                <a class="social-link" href="https://twitter.com/SahooShubhransu" target="blank"><i class="fab fa-twitter-square" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mrgn-top" style="padding: 0;" data-aos="fade-up" data-aos-delay="200">
                        <div class="profile-box">
                            <div class="profile">
                                <img src="assets/images/brijesh.webp" class="img-fluid img-profile" alt="Brijesh Kumar Sahoo">
                            </div>
                            <h4 style="margin-top: 0.5rem;">Brijesh Kumar Sahoo</h4>
                            <p class="text-muted"><i>Graphic Designer</i></p>
                            <div style="padding-bottom: 20px;">
                                <a class="social-link" href="https://www.facebook.com/brijeshkumar.sahoo.5" target="blank"><i class="fab fa-facebook-square" aria-hidden="true"></i></a>
                                <a class="social-link" href="https://t.me/BrijeshSahoo" target="blank"><i class="fab fa-telegram" aria-hidden="true"></i></a>
                                <a class="social-link" href="https://twitter.com/Brijesh77856001" target="blank"><i class="fab fa-twitter-square" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mrgn-top" style="padding: 0;" data-aos="fade-up" data-aos-delay="300">
                        <div class="profile-box">
                            <div class="profile">
                                <img src="assets/images/preeti.webp" class="img-fluid img-profile" alt="Preeti Pragalva Dash">
                            </div>
                            <h4 style="margin-top: 0.5rem;">Preeti Pragalva Dash</h4>
                            <p class="text-muted"><i>Content Writer</i></p>
                            <div style="padding-bottom: 20px;">
                                <a class="social-link" href="#" target="blank"><i class="fab fa-facebook-square" aria-hidden="true"></i></a>
                                <a class="social-link" href="#" target="blank"><i class="fab fa-telegram" aria-hidden="true"></i></a>
                                <a class="social-link" href="#" target="blank"><i class="fab fa-twitter-square" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mrgn-top" style="padding: 0;" data-aos="fade-left" data-aos-delay="400">
                        <div class="profile-box">
                            <div class="profile">
                                <img src="assets/images/sir.webp" class="img-fluid img-profile" alt="Dr. Bishwanath Parija">
                            </div>
                            <h4 style="margin-top: 0.5rem;">Dr. Bishwanath Parija</h4>
                            <p class="text-muted"><i>Advisor</i></p>
                            <div style="padding-bottom: 20px;">
                                <a class="social-link" href="#" target="blank"><i class="fab fa-facebook-square" aria-hidden="true"></i></a>
                                <a class="social-link" href="#" target="blank"><i class="fab fa-telegram" aria-hidden="true"></i></a>
                                <a class="social-link" href="#" target="blank"><i class="fab fa-twitter-square" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--About Section-->

        <!--Latest Experiments Section-->
        <section id="latest">
            <div class="container">
                <div class="row">
                    <div class="col" style="padding: 10px 0px;">
                        <h2 class="text-center section-heading">Latest Experiments</h2>
                    </div>
                </div>
                <div class="card-deck owl-carousel latest-carousel">

                    <div class="card bg-light latest-item">
                        <img class="card-img-top" src="assets/images/exp6.webp" alt="Card image cap" style="height: 15rem;">
                        <div class="card-body">
                            <a href="experiments/exp6/index.html">
                                <h5 class="card-title">Study AC Bridges.</h5>
                            </a>
                            <p class="card-text">Study three AC bridges - Maxwell Bridge, De Sauty Bridge and Maxwell-Wien Bridge.</p>
                        </div>
                    </div>

                    <div class="card bg-light latest-item">
                        <img class="card-img-top" src="assets/images/exp5.webp" alt="Card image cap" style="height: 15rem;">
                        <div class="card-body">
                            <a href="experiments/exp5/index.html">
                                <h5 class="card-title">Study and Verification of Truth Table of BCD to 7-Segment Display Decoder</h5>
                            </a>
                            <p class="card-text">Study and Verification of Truth Table of BCD to 7-Segment Display Decoder with IC 7448.</p>
                        </div>
                    </div>
                    <div class="card bg-light latest-item">
                        <img class="card-img-top" src="assets/images/exp4.webp" alt="Card image cap" style="height: 15rem;">
                        <div class="card-body">
                            <a href="experiments/exp4/index.html">
                                <h5 class="card-title">Study and Verification of Ohm's Law</h5>
                            </a>
                            <p class="card-text">Study and Verification of Ohm's Law with Current-Voltage (I-V) plot.</p>
                        </div>
                    </div>
                    <div class="card bg-light latest-item">
                        <img class="card-img-top" src="assets/images/exp3.webp" alt="Card image cap" style="height: 15rem;">
                        <div class="card-body">
                            <a href="experiments/exp3/index.html">
                                <h5 class="card-title">Study and Verification of Truth Table of Binary Subtractor</h5>
                            </a>
                            <p class="card-text">Study and Verification of truth table of Half Subtractor and Full Subtractor.</p>
                        </div>
                    </div>
                    <div class="card bg-light latest-item">
                        <img class="card-img-top" src="assets/images/exp2.webp" alt="Card image cap" style="height: 15rem;">
                        <div class="card-body">
                            <a href="experiments/exp2/index.html">
                                <h5 class="card-title">Study and Verification of Truth Table of Binary Adder</h5>
                            </a>
                            <p class="card-text">Study and Verification of truth table of Half Adder and Full Adder.</p>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </section>
        <!--Latest Experiments Section-->

        <!--Counter Section-->
        <section id="facts" class="bg-light">
            <div class="container">
                <div class="row">
                    <div class="col" style="padding: 10px 0px;">
                        <h2 class="text-center section-heading">Facts</h2>
                        <p class="text-center">What we have achieved so far.</p>
                    </div>
                </div>
                <div class="row counters">

                    <div class="col-md-6 text-center">
                        <i class="fas fa-3x fa-users"></i>
                        <span data-toggle="counter-up"><?php echo $counterVal; ?></span>
                        <p>Total Visitors</p>
                    </div>

                    <div class="col-md-6 text-center">
                        <i class="fas fa-3x fa-atom"></i>
                        <span data-toggle="counter-up">5</span>
                        <p>Experiments</p>
                    </div>

                </div>
            </div>
        </section>

        <!--Counter Section-->

        <!--Term Section-->
        <section id="terms" class="">
            <div class="container">
                <div class="row">
                    <div class="col" style="padding: 10px 0px;">
                        <h2 class="text-center section-heading">Terms of Service</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4" data-aos="fade-right" data-aos-delay="100">
                        <img src="assets/images/terms1.webp" class="img-fluid img-thumbnail" alt="">
                    </div>
                    <div class="col-md-8 text-justify" data-aos="fade-left" data-aos-delay="200">

                        <p>Please read these terms of Service carefully before using Our Service.</p>

                        <h3>Acknowledgement</h3>
                        <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Site Owner. These Terms and Conditions set out the rights and obligations of all users regarding the use of
                            the Service.
                        </p>
                        <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
                        <p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
                        <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company. We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services
                            that You visit.</p>
                    </div>

                </div>
            </div>
        </section>
        <!--Term Section-->

        <!--Contact Section-->
        <section id="contact" class="bg-light">
            <div class="container">
                <div class="row" data-aos="fade-up">
                    <div class="col" style="padding: 10px 0px;">
                        <h2 class="text-center section-heading">Contact Us</h2>
                        <p class="text-center">If you have any query & feedback regarding this site write to us.</p>
                    </div>
                </div>
                <div class="form" data-aos="zoom-in" data-aos-delay="100">
                    <form action="form/contact_me.php" method="post" id="contactForm" role="form" class="php-email-form">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required data-validation-required-message="Please enter your name." />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="form-group col-md-6">
                                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required data-validation-required-message="Please enter your email address." />
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required data-validation-required-message="Please enter a subject." />
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" name="message" id="message" rows="5" required data-validation-required-message="Please enter a message." placeholder="Message"></textarea>
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="mb-3">
                            <div id="success"></div>
                        </div>
                        <div class="text-center"><button type="submit">Send Message</button></div>
                    </form>
                </div>
            </div>
        </section>

        <!--Contact Section-->


        <!--Footer-->
        <footer class="bg-black">
            <div class="footer-copyright text-center font-weight-bold py-3">© 2021 Copyright: <b>Simulex.ml</b> |
                <span>Made with ❤ by <a href="#">SHUBHRANSU SAHOO</a></span>
            </div>
        </footer>
        <!--Footer-->

        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <!-- <script src="assets/vendor/jquery/jquery.min.js"></script> -->
        <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
        <!-- Optional JavaScript -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/js/all.min.js" integrity="sha512-YSdqvJoZr83hj76AIVdOcvLWYMWzy6sJyIMic2aQz5kh2bPTd9dzY3NtdeEAzPp/PhgZqr4aJObB3ym/vsItMg==" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js" integrity="sha512-CEiA+78TpP9KAIPzqBvxUv8hy41jyI3f2uHi7DGp/Y/Ka973qgSdybNegWFciqh6GrN2UePx2KkflnQUbUhNIA==" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0.0/jquery.counterup.min.js" integrity="sha512-d8F1J2kyiRowBB/8/pAWsqUl0wSEOkG5KATkVV4slfblq9VRQ6MyDZVxWl2tWd+mPhuCbpTB4M7uU/x9FlgQ9Q==" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jqBootstrapValidation/1.3.6/jqBootstrapValidation.js" integrity="sha512-YNHJw8+E76qTXNGndHzXfoprxSmMIErFZuaKzN+ehG9gJ162SKLG0JGdBBh0WVsh3Zdb/OH5fLXWP7R/1H5vSA==" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw==" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js" integrity="sha512-A7AYk1fGKX6S2SsHywmPkrnzTZHrgiVT7GcQkLGDe2ev0aWb8zejytzS8wjo7PGEXKqJOrjQ4oORtnimIRZBtw==" crossorigin="anonymous"></script>
        <script src="assets/vendor/php-email-form/contact_me.js"></script>
        <script src="assets/script/script.js"></script>
        <script>
            window.addEventListener('load', AOS.refresh)
        </script>

    </body>

    </html>