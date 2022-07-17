import React from 'react'
import logo from '../assets/logo.svg';
import './Main.css'
import apps from '../assets/pattern-apps.svg';
import graphic from '../assets/pattern-graphic-design.svg';
import photography from '../assets/pattern-photography.svg';
import illustration from '../assets/pattern-illustrations.svg';
import motion from '../assets/pattern-motion-graphics.svg';
import ui from '../assets/pattern-ui-ux.svg';

const Main = () => {
  return (
    <div>
        <div className="header">

       <div className="logo">
            <img src={logo} />
        </div>

  
           <div>
            <button className="header-button"> Free Consultation </button>
            </div>
            
        </div>


        <div className="content">
              <h1>
                Design solutions made easy
              </h1>

              <p>With over ten years of experience in various design disciplines, I'm your one-stop shop for your design needs</p>
      
              </div>




            <div className="gallery">
                <div className="one">
                <img src={graphic} />
                </div>

                <div className="two">
                <div>
                <img src={ui} />
                </div>
                <div>
                <img src={apps} />
                </div>

                <div>
                <img src={illustration}/>
                </div>
                </div>
              
                <div className="three">
               
                <div>
                <img src={photography} />
                </div>
                
                <div>
                <img src ={motion} />
                </div>
                </div>

            </div>
    </div>
  )
}

export default Main
