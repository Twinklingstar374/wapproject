import React from 'react';
import "./LandingPage.css";
import Bgvideo from "./assets/106076-671593547.mp4";
import SecondVideo from "./assets/27770-365891067.mp4";
import todo from "./assets/to.png"
import calender from "./assets/cal (1).mp4"
import Blog from "./Blog"
import Contact from "./Contact"

const LandingPage = () => {
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
              <button className="btn">Login</button>
              <button className="btn">Signup</button>
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
    <h1 className="underline">About TrackX</h1>
    <p>
    TrackX is your all-in-one productivity companion, crafted to simplify your daily life. Whether you're managing tasks, building habits, journaling thoughts, or organizing events — TrackX brings it all together in a single sleek dashboard.
    Designed for the modern mind, it combines functionality with minimal design to help you focus, reflect, and grow every day.
    </p>
  </div>
  </section>
  
  <section id="blog"><Blog/></section>
  <section id="contact"><Contact/></section>
  






    </>
  );
};

export default LandingPage;
