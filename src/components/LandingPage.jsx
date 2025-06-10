import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import "./LandingPage.css";
import Bgvideo from "./assets/106076-671593547.mp4";
import SecondVideo from "./assets/27770-365891067.mp4";
import todo from "./assets/to.png"
import calender from "./assets/cal (1).mp4"
import Blog from "./Blog"
import Contact from "./Contact"



const LandingPage = () => {


const navigate = useNavigate();
  
  return (
    <>
      {/* hero section */}
      <div className="landing">

        <video autoPlay loop muted className="bgvideo">
          <source src={Bgvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>


        <div className="overlay">

          {/* navbar*/}
          <nav className="navbar">
            <div className="logo">TrackX</div>
            <div className="links">
              <a href="#about" className="link">About</a>
              <a href="#features" className="link">Features</a>
              <a href="#blog" className="link">Blog</a>
              <a href="#contact" className="link">Contact</a>
            </div>
            <div className="buttons">
            <button className="btn" onClick={() => navigate("/login")}>Login</button>
            <button className="btn" onClick={() => navigate("/signup")}>Signup</button>
            </div>
          </nav>

          {/* hero content */}
          <div className="hero">
            <h1>Track Your Life</h1>
            <p>Habits. Notes. Reflections — All in one place.</p>
            <button className='btn'>Get Started</button>
          </div>

        </div>


      </div>

      {/* Features section*/}
      <section id="features">
      <div className="spacer-section">
        <div className="todocontent">
          <div className="glow-box">
            <h2>Todo List</h2>
            <h1>Organize everything in your life</h1>
            <p>Whether it's work projects, personal tasks, or study plans, TrackX helps you organize and confidently tackle everything in your life.</p>
          </div>
        </div>
        <div className="myimage">
          <img src={todo} alt="imag" className="todo" />
        </div>
      </div>

      <div className="spacer-section">
      <div className="myimage">
      <video autoPlay loop muted className="calender">
                <source src={calender} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
      </div>
      <div className="todocontent">
        <div className="glow-box">
          <h2>Calender</h2>
          <h1>Master Your Routine, Transform Your Life</h1>
          <p>Interact with your calendar seamlessly—click, tap, or hover to instantly track, update, and visualize your habit progress in an engaging, dynamic way!</p>
        </div>
      </div>
      </div>
      </section>


    <div className="spacer-section">
      <div className="todocontent">
        <div className="glow-box">
          <h2>Note-Taking</h2>
          <h1>Capture Your Thoughts, Organize Your Ideas</h1>
          <p>Never lose track of your brilliant ideas again! Whether it’s for work, study, or personal projects, our note-taking feature helps you stay organized, focused, and efficient.</p>
        </div>
      </div>
      {/* {<div className="myimage">
        <img src={todo} alt="imag" className="todo" />
      </div> } */}
    </div>

     
    <div className="spacer-section">
    {/* {<div className="myimage">
        <img src={todo} alt="imag" className="todo" />
      </div> } */}
      <div className="todocontent">
        <div className="glow-box">
          <h2>Habit Tracker</h2>
          <h1>Build Better Habits, One Day at a Time</h1>
          <p>Take control of your daily routines with our intuitive habit tracker. Whether you’re working towards fitness goals, personal development, or simply building a more productive day, this tool helps you stay on track and accountable.</p>
        </div>
      </div>
    </div>
    

  <section id="about" className="second-video1">
  <video autoPlay loop muted className="second-video">
    <source src={SecondVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  


  <div className="about-overlay">
    <h1 className="underline">Why choose TrackX?</h1>
    <p>
    TrackX is your all-in-one productivity companion, crafted to simplify your daily life. Whether you're managing tasks, building habits, journaling thoughts, or organizing events — TrackX brings it all together in a single sleek dashboard.
    Designed for the modern mind, it combines functionality with minimal design to help you focus, reflect, and grow every day.
    </p>
    <p className='acc'>Already have an account?Log in now</p>
  </div>
  </section>
  
  <section id="blog"><Blog/></section>
  <section id="contact"><Contact/></section>


  <footer className="footer">
  <div className="footer-inner">

    <div className="footer-section newsletter">
      <h3>Subscribe to our Newsletter</h3>
      <p>Get productivity tips and updates delivered straight to your inbox.</p>
      <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="Enter your email"
          className="newsletter-input"
          required
        />
        <button type="submit" className="newsletter-button">Subscribe</button>
      </form>
    </div>

    <div className="footer-section contact">
      <h3>Contact Us</h3>
      <p>Email: <a href="mailto:support@yourproject.com" className="footer-link">support@yourproject.com</a></p>
      <p>Phone: <a href="tel:+1234567890" className="footer-link">+1 (234) 567-890</a></p>
      <p>Address: 123 Productivity St, Worktown</p>
    </div>

    <div className="footer-section social">
      <h3>Follow Us</h3>
      <div className="social-links">
        <a href="https://twitter.com/yourproject" target="_blank" rel="noopener noreferrer" className="footer-link">Twitter</a>
        <a href="https://facebook.com/yourproject" target="_blank" rel="noopener noreferrer" className="footer-link">Facebook</a>
        <a href="https://instagram.com/yourproject" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
      </div>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2025 YourProjectName. All rights reserved.</p>
  </div>
</footer>

  






    </>
  );
};

export default LandingPage;
