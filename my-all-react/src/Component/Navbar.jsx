import React from 'react'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light sticky-top">
            <div class="container-fluid">z
                <a class="navbar-brand" href><img class="logo"
                    src="/assets/images/wmv-logo.webp" alt />
                </a>
                <button class="navbar-toggler" type="button"
                    data-toggle="collapse" data-target="#mobile_nav"
                    aria-controls="mobile_nav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="mobile_nav">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0 float-md-right">
                    </ul>
                    <ul class="navbar-nav navbar-light">
                        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="about.html">About
                            Us</a></li>
                        <li class="nav-item dmenu dropdown">
                            <a class="nav-link dropdown-toggle" href="#"
                                id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                Services
                            </a>
                            <div class="dropdown-menu sm-menu mt-3"
                                aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="software_development.html">Software
                                    Development</a>
                                <a class="dropdown-item" href="web_design_development.html">Web
                                    Designing
                                    & Development</a>
                                <a class="dropdown-item" href="mobile_application.html">Mobile
                                    Application</a>
                                <a class="dropdown-item" href="buisness_solution.html">Business
                                    Solutions & Business Process</a>
                                <a class="dropdown-item" href="digital_marketing_and_seo.html">Digital
                                    Marketing & SEO Services</a>
                                <a class="dropdown-item" href="web_hosting.html">Web Hosting &
                                    Maintenance</a>
                                <a class="dropdown-item" href="cyber_security.html">Cyber
                                    Security</a>
                                <a class="dropdown-item" href="blockchain_implementation.html">Block
                                    Chain
                                    Implementation</a>
                            </div>
                        </li>

                        <li class="nav-item dropdown megamenu-li dmenu">
                            <a class="nav-link dropdown-toggle" href
                                id="dropdown01" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">All
                                Services</a>
                            <div
                                class="dropdown-menu megamenu sm-menu border-top"
                                aria-labelledby="dropdown01">
                                <div class="row">
                                    <div
                                        class="col-sm-6 col-lg-3 border-right mb-4">
                                        <h6>Ecommerce</h6>
                                        <a class="dropdown-item" href="magento_development.html"><i
                                            class="fab fa-magento"></i>
                                            Magento Development</a>
                                        <a class="dropdown-item" href="magento2_migration.html"><i
                                            class="fab fa-magento"></i>
                                            Magento 2 Migration</a>
                                        <a class="dropdown-item" href="Odoo_ERP.html"><i
                                            class="fab fa-magento"></i> Odoo
                                            ERP</a>
                                        <a class="dropdown-item" href="mobile_commerce.html"><i
                                            class="fab fa-magento"></i>
                                            Mobile Commerce</a>
                                        <a class="dropdown-item" href="crm_commerce.html"><i
                                            class="fab fa-magento"></i> CRM
                                            for Commerce</a>
                                    </div>
                                    <div
                                        class="col-sm-6 col-lg-3 border-right mb-4">
                                        <h6>LAMP Technology</h6>
                                        <a class="dropdown-item" href="php_website_development.html"><i
                                            class="fab fa-php"></i> PHP
                                            Website Development</a>
                                        <a class="dropdown-item" href="phalcon_development.html"><i
                                            class="fas fa-circle"></i>
                                            Phalcon Development</a>
                                        <a class="dropdown-item" href="laravel_development.html"><i
                                            class="fab fa-laravel"></i>
                                            Laravel Development</a>
                                        <a class="dropdown-item" href="wordpress_development.html"><i
                                            class="fab fa-wordpress-simple"></i>
                                            WordPress Development</a>
                                        <a class="dropdown-item" href="symfony_development.html"><i
                                            class="fab fa-php"></i> Symfony
                                            Development</a>
                                    </div>
                                    <div
                                        class="col-sm-6 col-lg-3 border-right mb-4">
                                        <h6>Mobile</h6>
                                        <a class="dropdown-item" href="iphone_app_development.html"><i
                                            class="fab fa-apple"></i> iPhone
                                            App Development</a>
                                        <a class="dropdown-item" href="andriod_app_development.html"><i
                                            class="fab fa-android"></i>
                                            Android App Development</a>
                                        <a class="dropdown-item"
                                            href="phone_gap_app_development.html"><i
                                                class="fas fa-mobile-alt"></i>
                                            Phone Gap App Development</a>
                                        <a class="dropdown-item" href="hybrid_app_development.html"><i
                                            class="fas fa-tablet-alt"></i>
                                            Hybrid App Development</a>
                                        <a class="dropdown-item" href="ionic_development.html"><i
                                            class="fas fa-mobile-alt"></i>
                                            Ionic Development</a>
                                        <a class="dropdown-item"
                                            href="react_native_development.html"><i
                                                class="fas fa-tablet-alt"></i>
                                            React Native Development</a>
                                        <a class="dropdown-item"
                                            href="xamarian_app_development.html"><i
                                                class="fas fa-mobile-alt"></i>
                                            Xamarin App Development</a>
                                    </div>
                                    <div class="col-sm-6 col-lg-3 mb-4">
                                        <h6>Node.js & MongoDB</h6>
                                        <a class="dropdown-item" href="full_stack_development.html"><i
                                            class="fas fa-cubes"></i> Full
                                            Stack Development</a>
                                        <a class="dropdown-item" href="mean_stack.html"><i
                                            class="fas fa-cube"></i> MEAN
                                            Stack</a>
                                        <a class="dropdown-item" href="angularjs.html"><i
                                            class="fab fa-angular"></i>
                                            AngularJS</a>
                                        <a class="dropdown-item" href="nodejs_development.html"><i
                                            class="fab fa-node-js"></i>
                                            Node.JS Development</a>
                                        <a class="dropdown-item" href="mongodb.html"><i
                                            class="fas fa-leaf fa-rotate-90"></i>
                                            MongoDB Development</a>
                                    </div>
                                </div>
                                <div class="row">
                                    <div
                                        class="col-sm-6 col-lg-3 border-right mb-4">
                                        <h6>Microsoft Technology</h6>
                                        <a class="dropdown-item"
                                            href="microsoft_app_development.html"><i
                                                class="fab fa-windows"></i>
                                            Microsoft App Development</a>
                                        <a class="dropdown-item"
                                            href="ms_desktop_app_development.html"><i
                                                class="fab fa-windows"></i> MS
                                            Desktop App Development</a>
                                        <a class="dropdown-item" href="sharepoint_development.html"><i
                                            class="fab fa-windows"></i>
                                            SharePoint Development</a>
                                        <a class="dropdown-item" href="asp.net_development.html"><i
                                            class="fab fa-windows"></i>
                                            ASP.NET Development</a>
                                        <a class="dropdown-item" href="cms_development.html"><i
                                            class="fab fa-windows"></i> CMS
                                            Development</a>
                                    </div>
                                    <div
                                        class="col-sm-6 col-lg-3 border-right mb-4">
                                        <h6>Cloud Services</h6>
                                        <a class="dropdown-item" href="devops.html"><i
                                            class="fas fa-cloud"></i> DevOps</a>
                                        <a class="dropdown-item" href="amazon_web_series.html"><i
                                            class="fab fa-amazon"></i>
                                            Amazon Web Services</a>
                                        <a class="dropdown-item" href="azure_cloud_service.html"><i
                                            class="fab fa-windows"></i>
                                            Azure Cloud Service</a>
                                        <a class="dropdown-item"
                                            href="google_app_engine_service.html"><i
                                                class="fab fa-google"></i>
                                            Google App Engine Services</a>
                                    </div>
                                    <div
                                        class="col-sm-6 col-lg-3 border-right mb-4">
                                        <h6>Enterprise Services</h6>
                                        <a class="dropdown-item" href="augmented_reality.html"><i
                                            class="fas fa-laptop"></i>
                                            Augmented Reality</a>
                                        <a class="dropdown-item" href="crm.html"><i
                                            class="fas fa-laptop"></i> CRM</a>
                                        <a class="dropdown-item"
                                            href="enterprise_mobility_service.html"><i
                                                class="fab fa-buromobelexperte"></i>
                                            Enterprise Mobility Services</a>
                                        <a class="dropdown-item" href="blockchain_services.html"><i
                                            class="fas fa-th-large"></i>
                                            Blockchain Services</a>
                                        <a class="dropdown-item" href="buisness_intelligence.html"><i
                                            class="fas fa-briefcase"></i>
                                            Business Intelligence</a>
                                    </div>
                                    <div class="col-sm-6 col-lg-3 mb-4">
                                        <h6>Digital Marketing</h6>
                                        <a class="dropdown-item" href="digital_marketing.html"><i
                                            class="fas fa-laptop"></i>
                                            Digital Marketing</a>
                                        <a class="dropdown-item" href="ppc_management_service.html"><i
                                            class="fas fa-laptop"></i> PPC
                                            Management Services</a>
                                        <a class="dropdown-item" href="ecommerce_seo_service.html"><i
                                            class="fas fa-laptop"></i>
                                            E-commerce SEO Services</a>
                                        <a class="dropdown-item"
                                            href="conversion_rate_optimization.html"><i
                                                class="fas fa-laptop"></i>
                                            Conversion Rate Optimization</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item"><a class="nav-link"
                            href="portfolio.html">Portfolio</a></li>
                        <li class="nav-item"><a class="nav-link"
                            href="careers.html">Careers</a></li>
                        <li class="nav-item"><a class="nav-link"
                            href="contactus.html">Contact
                            us</a></li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar