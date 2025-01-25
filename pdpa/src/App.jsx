import React, { useEffect } from "react";
import Typed from 'typed.js'; 
import "./App.css";
import mypic from './assets/mypic.jpg';



const Portfolio = () => {
  useEffect(() => {
    const options = {
      strings: ["an Engineer", "a Problem Solver", "a Web Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed(".text", options);

    return () => {
      typed.destroy();
    };
  }, []);
  
  return (
    <div>
      <header className="header">
        <a href="#" className="logo">Portfolio</a>
        <nav className="navbar">
          <a href="#home" style={{ "--i": 1 }} className="active">Home</a>
          <a href="#about" style={{ "--i": 2 }}>About</a>
          <a href="#services" style={{ "--i": 3 }}>Skill</a>
          <a href="#portfolio" style={{ "--i": 4 }}>Portfolio</a>
          <a href="#contact" style={{ "--i": 5 }}>Contact</a>
        </nav>
      </header>
      
      <section className="home">
        <div className="home-content">
          <h3>Hello, It's time to introduce Myself</h3>
          <h1>I am Priyadharshini</h1>
          <h3>And I'm <span className="text"></span></h3>
          <p>Currently pursuing my Bachelors Degree in the
            <br /> Department of <strong>Electronics and Communication Engineering</strong><br /> at Sri Krishna College of Engineering and Technology
          </p>
          <div className="home-sci">
          <a href="https://www.linkedin.com/in/priyadharshini-r-8421a72a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className='bx bxl-linkedin-square'></i></a>
          <a href="https://www.instagram.com/priyadharshini_.ravichandran?utm_source=qr&igsh=cmxtenVtODZ3cWRv"><i className='bx bxl-instagram'></i></a> 
          <a href="https://wa.me/919345302182?text=Connect%20me%20through"><i className='bx bxl-whatsapp'></i></a>
          <a href="mailto:example@gmail.com"><i class='bx bx-envelope'></i></a> </div>
          <a href="#" className="btn-box">More About me</a>
        </div>
        <div className="home-img">
        <img src={mypic} alt="Priyadharshini" />
</div>

      </section>

      <section className="about" id="about">
        <div className="about-img shimmer-effect">
        <img src={mypic} alt="Priyadharshini" />
        </div>
        <div className="about-text">
          <h2>About <span>Me</span></h2>
          <h4>An Engineer</h4>
          <p>
            I am a passionate and dedicated Electronics and Communication Engineering student at Sri Krishna College of Engineering and Technology. With a strong interest in technology and innovation, I am constantly exploring new ideas and learning new skills to enhance my knowledge. My journey is driven by curiosity and a desire to create impactful solutions that can make a difference in the world.
          </p>
          <a href="#" className="btn-box">More About Me</a>
        </div>
      </section>
      
      <section className="services" id="services">
        <div className="container">
          <h1 className="sub-title">My <span>Introductory Exposure</span></h1>
          <div className="services-list">
            <div key="1">
              <i className='bx bx-code'></i>
              <h2>Drone Technology</h2>
              <p></p>
              <a href="#" className="read">Learn more</a>
            </div>
            <div key="2">
              <i className='bx bx-crop'></i>
              <h2>AI & ML</h2>
              <p></p>
              <a href="#" className="read">Learn more</a>
            </div>
          </div>  
        </div>
      </section>

      <h1 className="sub-title">My <span>Skills</span></h1>
      <section className="container1" id="Skills">
        <h1 className="heading1">Technical Skills</h1>
        <div className="Technical-bars">
          <div className="bar">
            <i style={{ color: "rgb(255, 154, 30)" }} className='bx bxl-html5'></i>
            <div className="info">
              <span>HTML</span>
            </div>
            <div className="progress-line html">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <i style={{ color: "#147bbc" }} className='bx bxl-css3'></i>
            <div className="info">
              <span>CSS</span>
            </div>
            <div className="progress-line css">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <i style={{ color: "rgb(228, 181, 255)" }} className='bx bxl-c-plus-plus'></i>
            <div className="info">
              <span>Cpp</span>
            </div>
            <div className="progress-line cpp">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <i style={{ color: "red" }} className='bx bxl-python'></i>
            <div className="info">
              <span>Python</span>
            </div>
            <div className="progress-line python">
              <span></span>
            </div>
          </div>
        </div>
  
      </section>

      <section id="portfolio">
        <h1 className="sub-title">My <span>Projects</span></h1>
        <div className="scroll-container">
      
          <div className="portfolio-content">
            <div className="project-card">
              <h2>Agro-Storage System</h2>
              <p>A sustainable storage system for fruits and vegetables using renewable energy.</p>
            </div>
            <div className="project-card">
              <h2>Rehabilitation Device</h2>
              <p>A device to aid palm and finger movement rehabilitation for rehabilitation for stroke patients.</p>
              </div>
               </div>
                </div>
                 </section>
        <section className="contact" id="contact"> 
          <div className="contact-text"> 
            <h2>Contact <span>Me</span></h2>
            <h4>Let's Work Together</h4>
           <p>If you have any questions, would like to discuss a project, or are interested in collaboration opportunities, please do not hesitate to reach out. I am eager to connect, share ideas, and work together to create something remarkable. Looking forward to hearing from you!</p>
                <div className="contact-list">
                  <li><i className='bx bxl-gmail'></i>&nbsp;&nbsp;ppriyadharshini824@gmail.com</li> 
                  <li><i className='bx bx-phone'></i>&nbsp;&nbsp;+91 9345302182</li> </div> 
              <div className="contact-icons"> 
                <a href="https://www.linkedin.com/in/priyadharshini-r-8421a72a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className='bx bxl-linkedin-square'></i></a>
                <a href="https://www.instagram.com/priyadharshini_.ravichandran?utm_source=qr&igsh=cmxtenVtODZ3cWRv"><i className='bx bxl-instagram'></i></a> 
                <a href="https://wa.me/919345302182?text=Connect%20me%20through"><i className='bx bxl-whatsapp'></i></a>
                <a href="mailto:example@gmail.com"><i class='bx bx-envelope'></i></a> </div>
                </div>
                 <div className="contact-form"> <form action="">
                    <input type="text" placeholder="Enter your name" required />
                    <input type="email" placeholder="Enter your email" required />
                    <input type="text" placeholder="Enter your subject" /> 
                    <textarea cols="40" rows="10" placeholder="Enter your message" required></textarea> <input type="submit" value="Submit" className="submit" /> </form>
                    </div> </section> <div className="last"> <p>Developed by Priyadharshini © 2025</p> </div> 
                    <a href="#" className="top"><i className='bx bx-up-arrow-alt'></i>
                    </a> 
                </div> ); };
export default Portfolio;