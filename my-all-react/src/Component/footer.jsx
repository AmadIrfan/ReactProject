import React from 'react'

function Footer() {
    return (
        <div>
            <footer>
                <div class="container-fluid pl-3 pr-5">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="about footer-item">
                                <div class="logo">
                                    <a href="#">
                                        <img src="assets/images/logo.webp"
                                            alt="Web Media Voice" />
                                    </a>
                                </div>
                                <a href="#">info@company.com</a>
                                <ul>
                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa fa-behance"></i></a></li>
                                    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="services footer-item">
                                <h4>Services</h4>
                                <ul>
                                    <li><a href="#">SEO Development</a></li>
                                    <li><a href="#">Business Growth</a></li>
                                    <li><a href="#">Social Media Managment</a></li>
                                    <li><a href="#">Website Optimization</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="community footer-item">
                                <h4>Community</h4>
                                <ul>
                                    <li><a href="#">Digital Marketing</a></li>
                                    <li><a href="#">Business Ideas</a></li>
                                    <li><a href="#">Website Checkup</a></li>
                                    <li><a href="#">Page Speed Test</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="subscribe-newsletters footer-item">
                                <h4>Subscribe Newsletters</h4>
                                <p>Get our latest news and ideas to your inbox</p>
                                <form action="#" method="get">
                                    <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required />
                                    <button type="submit" id="form-submit" class="main-button "><i
                                        class="fa fa-paper-plane-o"></i></button>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="copyright">
                                <p>Copyright © 2023 Web Media Voice, Ltd. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer