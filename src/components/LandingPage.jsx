import React from 'react';
import "./LandingPage.css";
import Bgvideo from "./assets/106076-671593547.mp4";
import SecondVideo from "./assets/27770-365891067.mp4";
import todo from "./assets/to.png"
import calender from "./assets/cal (1).mp4"

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
          <h2>Todo List</h2>
          <h1>Organize everything in your life</h1>
          <p>Whether it's work projects, personal tasks, or study plans, TrackX helps you organize and confidently tackle everything in your life.</p>
        </div>
      </div>
      </div>


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
        <img src={todo} alt="imag" className="todo" />
      </div>
      <div className="todocontent">
        <div className="glow-box">
          <h2>Todo List</h2>
          <h1>Organize everything in your life</h1>
          <p>Whether it's work projects, personal tasks, or study plans, TrackX helps you organize and confidently tackle everything in your life.</p>
        </div>
      </div>
    </div>


      
      <section className="second-video1">
        <video autoPlay loop muted className="second-video">
          <source src={SecondVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </section>




    </>
  );
};

export default LandingPage;
