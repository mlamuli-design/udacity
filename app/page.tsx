"use client";
import Head from "next/head";
import Script from "next/script";
import "./assets/css/main.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Coders Eswatini</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />

        <link href="/assets/img/logo.png" rel="icon" />
        <link href="/assets/img/logo.png" rel="apple-touch-icon" />

        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        <link
          href="/assets/vendor/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="/assets/vendor/bootstrap-icons/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link href="/assets/vendor/aos/aos.css" rel="stylesheet" />
        <link
          href="/assets/vendor/glightbox/css/glightbox.min.css"
          rel="stylesheet"
        />
        <link
          href="/assets/vendor/swiper/swiper-bundle.min.css"
          rel="stylesheet"
        />
      </Head>

      <header
        id="header"
        className="header d-flex align-items-center fixed-top bg-white shadow-sm py-2"
      >
        <div className="container-fluid container-xl d-flex flex-wrap align-items-center justify-content-between">
          <a
            href="#"
            style={{ textDecoration: "none" }}
            className="logo d-flex align-items-center mb-2 mb-md-0"
          >
            <div className="d-flex align-items-center gap-2 flex-wrap">
              <img
                src="assets/img/ce.png"
                alt="Logo"
                style={{ height: "29px", width: "56%", maxWidth: "100%" }}
              />

              <img
                src="assets/img/uda.png"
                alt="Uda Logo"
                style={{ height: "50px", paddingTop: "8px", maxWidth: "100%" }}
              />
            </div>
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a href="#hero" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#values">Courses</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <a
            href="https://www.udacity.com/?promo=SPRINGSALE&coupon=SPRINGSALE&utm_source=gsem_brand&utm_medium=ads_r&utm_campaign=22170495779_c_individuals&utm_term=174772232595&utm_keyword=udacity_e&utm_source=gsem_brand&utm_medium=ads_r&utm_campaign=22170495779_c_individuals&utm_term=174772232595&utm_keyword=udacity_e&gad_source=1&gclid=EAIaIQobChMIzL_jqOCzjAMVfYBQBh3pBhYaEAAYASAAEgIrPPD_BwE"
            className="btn-getstarted flex-md-shrink-0"
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            Apply now
          </a>
        </div>
      </header>

      <main className="main">
        <section id="hero" className="hero section">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h1 data-aos="fade-up" className="fonting">
                  Discover, learn, and grow with future-focused courses
                </h1>
                <p data-aos="fade-up" data-aos-delay="100">
                  Empowering you with skills for tomorrow’s careers
                </p>
                <div
                  className="d-flex flex-column flex-md-row"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <a
                    href="https://www.udacity.com/?promo=SPRINGSALE&coupon=SPRINGSALE&utm_source=gsem_brand&utm_medium=ads_r&utm_campaign=22170495779_c_individuals&utm_term=174772232595&utm_keyword=udacity_e&utm_source=gsem_brand&utm_medium=ads_r&utm_campaign=22170495779_c_individuals&utm_term=174772232595&utm_keyword=udacity_e&gad_source=1&gclid=EAIaIQobChMIzL_jqOCzjAMVfYBQBh3pBhYaEAAYASAAEgIrPPD_BwE"
                    style={{ textDecoration: "none" }}
                    className="btn-get-started"
                  >
                    Start your journey <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div
                className="col-lg-6 order-1 order-lg-2 hero-img"
                data-aos="zoom-out"
              >
                <img
                  src="assets/img/Travel.jpg"
                  className="img-fluid animated"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about section">
          <div className="container" data-aos="fade-up">
            <div className="row gx-0">
              <div
                className="col-lg-6 d-flex flex-column justify-content-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="content">
                  <h3>Who We Are</h3>
                  <h2>Empowering Eswatini Through Tech & Digital Skills</h2>
                  <p>
                    The Coders Eswatini Initiative, in partnership with Udacity,
                    provides cutting-edge courses and nanodegrees, bridging the
                    gap in technology, business, and entrepreneurship. With a
                    focus on accessibility and skill development, it drives
                    Eswatini’s digital transformation.
                  </p>

                  <div className="text-center text-lg-start"></div>
                </div>
              </div>

              <div
                className="col-lg-6 d-flex align-items-center"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                <img
                  src="assets/img/studentscopy.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section id="values" className="values section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Courses We Offer</h2>
          </div>

          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <a href="https://emc.udacity.com/c/gc-eswatini/catalog/qZ-SfWTW/i/nd/nd056-gc-964"  className="text-decoration-none">
                  <div className="card">
                    <img
                      src="assets/img/ai1.jpg"
                      className="img-fluid"
                      alt=""
                      style={{ height: "70%" }}
                    />
                    <h3>Artificial Intelligence Fundamentals</h3>
                    <p>
                      Simulation of human intelligence in machines, enabling
                      them to learn, reason, and solve problems autonomously
                      using algorithms.
                    </p>
                  </div>
                </a>
              </div>

              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <a href="https://emc.udacity.com/c/gc-eswatini/catalog/qZ-SfWTW/i/nd/nd002-gc-964" className="text-decoration-none">
                  <div className="card">
                    <img
                      src="assets/img/ds2.jpg"
                      className="img-fluid"
                      alt=""
                      style={{ height: "70%" }}
                    />
                    <h3>Data Science Fundamentals</h3>
                    <p>
                      The field of analyzing large datasets using statistical
                      methods, machine learning, and algorithms to extract
                      insights and make predictions.
                    </p>
                  </div>
                </a>
              </div>

              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                <a href="https://emc.udacity.com/c/gc-eswatini/catalog/qZ-SfWTW/i/nd/nd000-gc-964" className="text-decoration-none">
                  <div className="card">
                    <img src="assets/img/pg.jpg" className="img-fluid" alt="" />
                    <h3>Programming Fundamentals</h3>
                    <p>
                      Process of writing code to develop software, automate
                      tasks, solve problems, and control computer systems
                      efficiently and logically.
                    </p>
                  </div>
                </a>
              </div>

              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                <a href="https://emc.udacity.com/c/gc-eswatini/catalog/qZ-SfWTW/i/nd/nd940-gc-964" className="text-decoration-none">
                  <div className="card">
                    <img src="assets/img/cc.png" className="img-fluid" alt="" />
                    <h3>Android Development Fundamentals</h3>
                    <p>
                      {" "}
                        Building apps using Kotlin for Android with core 
                        concepts and best practices.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="features section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Features</h2>
            <p>
              Our Advanced Features
              <br />
            </p>
          </div>

          <div className="container">
            <div className="row gy-5">
              <div
                className="col-xl-6"
                data-aos="zoom-out"
                data-aos-delay="100"
              >
                <img
                  src="assets/img/Grand_Pa.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>

              <div className="col-xl-6 d-flex">
                <div className="row align-self-center gy-4">
                  <div
                    className="col-md-6"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check"></i>
                      <h3>Technology and digital skill</h3>
                    </div>
                  </div>

                  <div
                    className="col-md-6"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check"></i>
                      <h3>Accessibility to education</h3>
                    </div>
                  </div>

                  <div
                    className="col-md-6"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check"></i>
                      <h3>Skill development</h3>
                    </div>
                  </div>

                  <div
                    className="col-md-6"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check"></i>
                      <h3>Partnerships with local institutions</h3>
                    </div>
                  </div>

                  <div
                    className="col-md-6"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check"></i>
                      <h3>Promotion of entrepreneurship</h3>
                    </div>
                  </div>

                  <div
                    className="col-md-6"
                    data-aos="fade-up"
                    data-aos-delay="700"
                  >
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check"></i>
                      <h3>Preparation for in-demand careers.</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="alt-features" className="alt-features section">
          <div className="container">
            <div className="row gy-5">
              <div
                className="col-xl-7 d-flex order-2 order-xl-1"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="row align-self-center gy-5">
                  <div className="col-md-6 icon-box">
                    <i className="bi bi-award"></i>
                    <div>
                      <h4>1. Enrollement</h4>
                      <p>
                        Choose your desired track and sign up through the
                        provided link
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 icon-box">
                    <i className="bi bi-card-checklist"></i>
                    <div>
                      <h4>2. Community</h4>
                      <p>
                        join the online Community platform to connect with
                        fellow students and tutors for support.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 icon-box">
                    <i className="bi bi-dribbble"></i>
                    <div>
                      <h4>3. Classroom</h4>
                      <p>
                        Begin your learning journey and engage with the course
                        content. The course typically takes up to 7 weeks to
                        complete.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 icon-box">
                    <i className="bi bi-filter-circle"></i>
                    <div>
                      <h4>Completion Certificate</h4>
                      <p>
                        After successfully completing the assessments, you will
                        receive your graduation certificate.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-5 d-flex align-items-center order-1 order-xl-2"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src="assets/img/Cow_Boy_01.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="faq section">
          <div className="container section-title" data-aos="fade-up">
            <h2>F.A.Q</h2>
            <p>Frequently Asked Questions</p>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div className="faq-container">
                  <div className="faq-item faq-active">
                    <h3>Q1. What language are the courses in ?</h3>
                    <div className="faq-content">
                      <p>The course material for All Coders is in English.</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>

                  <div className="faq-item">
                    <h3>Q2. Are the courses offered for free? </h3>
                    <div className="faq-content">
                      <p>Yes, the entire course is offered for free.</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>

                  <div className="faq-item">
                    <h3>Q3. What are the certificates that will be awarded?</h3>
                    <div className="faq-content">
                      <p>
                        A Certificate of Completion will be awarded upon
                        completion of the course.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <div className="faq-container">
                  <div className="faq-item">
                    <h3>
                      Q4. Can I change the email address that I have used to
                      sign-up?
                    </h3>
                    <div className="faq-content">
                      <p>
                        You should maintain the email address you used to apply
                        for the Ethiopian Coders Program for the duration of
                        your entire course in order to maintain access.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>

                  <div className="faq-item">
                    <h3>Q5. Can I learn the course on my mobile phone?</h3>
                    <div className="faq-content">
                      <p>
                        Yes, you can learn the course through your mobile web
                        browser by logging in to https://classroom.udacity.com
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>

                  <div className="faq-item">
                    <h3>Q8. How will my name be written on the certificate?</h3>
                    <div className="faq-content">
                      <p>
                        Certificates will be issued based on the names provided
                        in your classroom, you can still edit your name if you
                        wish from your classroom settings. Please make sure that
                        the first name and last name displayed there is the name
                        you would like displayed on your certificate. Your
                        displayed certificate name will not be changeable after
                        graduation.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="team section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Testimonials</h2>
            <p>
              What they are saying about us
              <br />
            </p>
          </div>

          <div className="container">
            <div className="row gy-4">
              <div
                className="col-lg-3 col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="team-member">
                  <div className="d-flex justify-content-center align-items-center mt-3">
                    <img
                      src="assets/img/kd.jpeg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Kassim Demekech</h4>
                    <span>Data analysis Student - Ethiopia</span>
                    <p>
                      These courses opened up new avenues for learning and
                      personal growth. I am excited to continue my educational
                      journey in this innovative and dynamic environment. Till i
                      get bored 😁😁😁
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="team-member">
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src="assets/img/mm.jpeg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Mekonnen Mohammed</h4>
                    <span>Programming Student - Rwanda</span>
                    <p>
                      I'm excited to share that ive completed the programing
                      Fundamentals course 😍, This course was a great deep dive
                      into essential programming concepts, like data types,
                      control flow, and HTML & CSS as well.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="team-member ">
                  <div className="d-flex justify-content-center align-items-center mt-5 pb-4">
                    <img
                      src="assets/img/zs.jpeg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Zeleke Selam</h4>
                    <span>Data Science Student - Zambia</span>
                    <p>
                      Hey guys, just wanted to celebrate my completion in the
                      data analysis fundamentals course. It was an eye operner
                      to research more on data anlystsic. I encourage all of
                      those who are still in the journey and keep up and give it
                      enough time.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="team-member">
                  <div className="d-flex justify-content-center align-items-center mt-5 pb-5">
                    <img
                      src="assets/img/lh.jpeg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Hansa Legese</h4>
                    <span>Data Science Student - Rwanda</span>
                    <p>
                      Hello 👋 community i'm happy to share that ive complited
                      Android Developer Fundamental and got my certificate 💃🏾
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features section">
          <div className="section-title" data-aos="fade-up">
            <div className="moving-images">
              <div className="image-wrapper">
                <img src="assets/img/gov.png" alt="Gov Logo" />
                <img src="assets/img/rstp.png" alt="RSTP Logo" />
                <img src="assets/img/uda.png" alt="UDA Logo" />
                <img src="assets/img/ge.png" alt="GE Logo" />
                <img src="assets/img/rstp.png" alt="RSTP Logo" />
                <img src="assets/img/gov.png" alt="Gov Logo" />
                <img src="assets/img/uda.png" alt="UDA Logo" />
                <img src="assets/img/ge.png" alt="GE Logo" />
                <img src="assets/img/rstp.png" alt="RSTP Logo" />
                <img src="assets/img/gov.png" alt="Gov Logo" />
                <img src="assets/img/uda.png" alt="UDA Logo" />
                <img src="assets/img/ge.png" alt="GE Logo" />
                <img src="assets/img/rstp.png" alt="RSTP Logo" />
                <img src="assets/img/gov.png" alt="Gov Logo" />
                <img src="assets/img/uda.png" alt="UDA Logo" />
                <img src="assets/img/ge.png" alt="GE Logo" />
              </div>
            </div>
          </div>

          <style jsx>{`
            .moving-images {
              overflow: hidden;
              white-space: nowrap;
              padding: 10px 0;
            }

            .image-wrapper {
              display: inline-flex;
              animation: move 25s linear infinite;
              align-items: center;
            }

            .image-wrapper img {
              height: 50px;
              width: auto;
              margin-right: 16px;
              object-fit: contain;
            }

            @keyframes move {
              0% {
                transform: translateX(10%);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            /* Mobile tweaks */
            @media (max-width: 576px) {
              .image-wrapper img {
                height: 40px;
                margin-right: 10px;
              }
            }
          `}</style>
        </section>

        <section id="contact" className="contact section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>Contact Us</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-lg-6">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <div
                      className="info-item"
                      data-aos="fade"
                      data-aos-delay="200"
                    >
                      <i className="bi bi-geo-alt"></i>
                      <h3>Address</h3>
                      <p> Matsapha Phocweni</p>
                      <p>Manzini, M202</p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div
                      className="info-item"
                      data-aos="fade"
                      data-aos-delay="300"
                    >
                      <i className="bi bi-telephone"></i>
                      <h3>Call Us</h3>
                      <p>+268 2518 6386</p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div
                      className="info-item"
                      data-aos="fade"
                      data-aos-delay="400"
                    >
                      <i className="bi bi-envelope"></i>
                      <h3>Email Us</h3>
                      <p>info@rstp.org.com</p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div
                      className="info-item"
                      data-aos="fade"
                      data-aos-delay="500"
                    >
                      <i className="bi bi-clock"></i>
                      <h3>Open Hours</h3>
                      <p>Monday - Friday</p>
                      <p>9:00AM - 05:00PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <form
                  action="forms/contact.php"
                  method="post"
                  className="php-email-form"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    <div className="col-md-6 ">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <textarea
                        className="form-control"
                        name="message"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>

                    <div className="col-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>

                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="footer">
        <div className="container footer-top">
          <div className="row gy-4" style={{ marginLeft: "100px" }}>
            <div className="col-lg-4 col-md-6 footer-about">
              <a
                href="index.html"
                className="d-flex align-items-center"
                style={{ textDecoration: "none" }}
              >
                <span className="sitename">Coders Eswatini</span>
              </a>
              <div className="footer-contact pt-3">
                <p className="mt-3">
                  <strong>Phone:</strong>{" "}
                  <span>+268 +268 2517 9400 / +268 2518 6386</span>
                </p>
                <p>
                  <strong>Email:</strong> <span>info@rstp.org.com</span>
                </p>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i> <a href="#">Home</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="#">About us</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="#">Courses</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Courses</h4>
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="#">Artificial intelligence</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="#">Data science</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="#">Programming</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="#">Cloud computing</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-12">
              <h4>Follow Us</h4>
              <p></p>
              <div className="social-links d-flex">
                <a href="">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span>{" "}
            <strong className="px-1 sitename">Coders Eswatini</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
          <div className="credits">
            Designed by{" "}
            <a href="https://rstp.org.sz/" style={{ textDecoration: "none" }}>
              RSTP
            </a>
          </div>
        </div>
      </footer>
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></Script>
      <Script src="/assets/vendor/php-email-form/validate.js"></Script>
      <Script src="/assets/vendor/aos/aos.js"></Script>
      <Script src="/assets/vendor/glightbox/js/glightbox.min.js"></Script>
      <Script src="/assets/vendor/purecounter/purecounter_vanilla.js"></Script>
      <Script src="/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"></Script>
      <Script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"></Script>
      <Script src="/assets/vendor/swiper/swiper-bundle.min.js"></Script>

      <Script src="/assets/js/main.js"></Script>
    </>
  );
}
