import React from 'react';
import './Layout.css';
import Home from '../Home/Home';
import About from '../About/About';
// import Projects from '../Projects/Projects';
// import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';

function Layout() {
  return (
        <div className='layout-container'>
            <div id="navigation" class="list-group">
                <a href="#home">
                    <i class="bi bi-house-door rounded-circle p-3"></i><span className='nav-titles'>Home</span>
                </a>
                <a href="#about">
                    <i class="bi bi-person rounded-circle p-3"></i><span className='nav-titles'>About</span>
                </a>
                {/* <a href="#projects">
                    <i class="bi bi-backpack2 rounded-circle p-2"></i><span className='nav-titles'>Projects</span>
                </a>
                <a href="#blog">
                    <i class="bi bi-pencil-square rounded-circle p-2"></i><span className='nav-titles'>Blog</span>
                </a> */}
                <a href="#contact">
                    <i class="bi bi-envelope-heart rounded-circle p-3"></i><span className='nav-titles'>Contact</span>
                </a>
            </div>
          <div class="container">
              <div class="row">
                  <div class="col-2">
                  </div>
                  <div class="col-10">
                        <h2 id="home"></h2>
                        <Home />
                        <h2 id="about">About</h2>
                        <About />
                        {/* <h4 id="projects">Projects</h4>
                        <Projects />
                        <h4 id="blog">Blog</h4>
                        <Blog /> */}
                        <h2 id="contact">Contact</h2>
                        <Contact/>
                  </div>
              </div>
            </div>
        </div>
  );
}

export default Layout;
