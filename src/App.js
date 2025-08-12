import React, { useEffect, useState } from 'react';
import './App.css';
import './Animate.css';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import profile from './assets/profile-picture.jpg';
// import projects from './components/ProjectList';
import imgBar from './assets/bootcamp-bar.jpg'
import imgHoliday from './assets/holiday-discoverer.jpg';
import imgWork from './assets/work-day-scheduler.png';
import imgWeather from './assets/weather-dashboard.png';
import imgLegacy from './assets/my-first-project.png';




function App() {


  const projects = [
    {
      id: "1",
      title: "Bootcamp Bar",
      image: imgBar,
      description: "Group MERN stack project which mocks a booking system for a bar. Able to store and update persistent data in back-end database",
      live: "https://bootcamp-bar.herokuapp.com/",
      repo: "https://github.com/slingshort/Bootcamp_bar_V2.0",
    },
    {
      id: "2",
      title: "Holiday Discoverer",
      image: imgHoliday,
      description: "First group full-stack project using multiple open source APIs to discover holidays on a given calendar date",
      live: "https://kangazero.github.io/holiday-calendar-discoverer/",
      repo: "https://github.com/slingshort/holiday-calendar-discoverer",
    },
    {
      id: "3",
      title: "Work Day Scheduler",
      image: imgWork,
      description: "Work day scheduler using local storage to store persisting data",
      live: "https://slingshort.github.io/js_workday_scheduler/",
      repo: "https://github.com/slingshort/js_workday_scheduler",
    },
    {
      id: "4",
      title: "Weather Dasboard",
      image: imgWeather,
      description: "Weather Dashboard to search weather in cities using Google API",
      live: "https://slingshort.github.io/weather-dash/",
      repo: "https://github.com/slingshort/weather-dash",
    },
    {
      id: "5",
      title: "Legacy Portfolio",
      image: imgLegacy,
      description: "My very first project!",
      live: "https://slingshort.github.io/Portfolio/",
      repo: "https://github.com/slingshort/holiday-calendar-discoverer",
    },

  ]

  // animate scroll fade incomponent
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  return (
    <div className='app'>

      <Header />

      {/* <div className={`animate-element ${isVisible ? 'fade-in' : ''}`}>
        <div className='grid place-content-center text-8xl p-center'>
          <h1 className='text-slate-50'>SLINGSHORT.</h1>
          <h2 className='text-fuchsia-400'> Full stack web-developer</h2>
        </div>
      </div> */}

      <div className={`animate-element ${isVisible ? 'fade-in' : ''}`}>
        <div className='grid place-content-center p-center'>
        <div className='flex flex-row p-8'>
          <div className='profile-pic'>
            <img className='rounded-full' src={profile} alt='profile-pic' />
          </div>

          <div className='place-content-center p-4'>
            <h1 className='text-fuchsia-400 text-6xl'>Hey, I'm Salina</h1>
            <p className='text-slate-50 text-xl'> I've spent the past couple of years developing my skills as a software engineer and am looking to transition into a more technical role that allows me to use my web development skills. Take a look at some of the projects I've worked on below!</p>
            <p className='text-slate-50 text-xl'> I'm currently studying a Master of Software Engineering, and I'm also working as a configuration officer at an engineering company. I'm using both these opportunities to learn other coding languages and practise implementing them in professional contexts.</p>
            <p className='text-slate-50 text-xl'> I've also worked as a professional musician. In case you're interested, you can take a look at some of the work I've been involved in with <a className='inline-link' href='https://www.taikoz.com/'>Taikoz</a> or <a className='inline-link' href='https://www.drummerqueens.com/'>Drummer Queens</a>.</p>
            <button className='justify-self-start px-8 my-1 text-xl'><a href='#contact'>Let's connect!</a></button>
          </div>
        </div>
        </div>
      </div>

      <div className={`animate-element ${isVisible ? 'fade-in' : ''}`}>
        <div className='grid place-content-center p-center'>
          <h1 className='text-slate-50 text-8xl'>Projects.</h1>
          <p className='text-fuchsia-400 text-2xl'> Here are a few projects I've worked on... </p>
          <div className="projectScroll">
            <ProjectCard projects={projects} />
          </div>
        </div>
      </div>

      <div className={`animate-element ${isVisible ? 'fade-in' : ''}`}>
        <div id='contact' className='grid place-content-center p-center'>
          <h1 className='text-fuchsia-400 text-8xl'>Contact me.</h1>
          <p className='text-slate-50 text-xl px-4'>
            My email is <a className='inline-link' href='mailto:salina.myat@gmail.com'>salina.myat@gmail.com</a> if you'd like to reach out!<br></br> You can also find me on <a className='inline-link' href='https://www.linkedin.com/in/salina-m-a1655111b/'>Linkedin</a> if you prefer to conact me there.
          </p>
        </div>
      </div>

    </div>
  );
};

export default App;
