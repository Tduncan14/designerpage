import React ,{useState} from 'react'
import logo from '../assets/logo.svg';
import './Main.css'
import apps from '../assets/pattern-apps.svg';
import graphic from '../assets/pattern-graphic-design.svg';
import photography from '../assets/pattern-photography.svg';
import illustration from '../assets/pattern-illustrations.svg';
import motion from '../assets/pattern-motion-graphics.svg';
import ui from '../assets/pattern-ui-ux.svg';
import amypic from '../assets/image-amy.webp';
import Image1 from '../assets/image-slide-1.jpg';
import Image2 from '../assets/image-slide-2.jpg';
import Image3 from '../assets/image-slide-3.jpg';
import Image4 from '../assets/image-slide-4.jpg';
import Image5 from '../assets/image-slide-5.jpg';
import right from '../assets/icon-arrow-left.svg';
import left from '../assets/icon-arrow-right.svg';





const imageSlides =[Image1,Image2,Image3,Image4,Image5]

const Main = () => {


    const [index,setIndex] = useState(0)
  return (
    <>
    <div className="container">
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
                <img className="graphic" src={graphic} />

 
               <p>Graphic Design</p>
                </div>

                <div className="two">

                <div id="flextwo">
                <div className="ui">
                <img src={ui} />

                <h1>
                    UI/UX
                </h1>
                </div>
                <div className="app" >
                <img  src={apps} />

                <h1>
                    Apps
                </h1>
                </div>

                </div>

                <div className="illu">
                <img src={illustration}/>

                <h1>Illustrations</h1>
                </div>
                </div>
              
                <div className="three">
               
                <div className="photo">
                <img src={photography} />

                <h1>Photography</h1>
                </div>
                
                <div className="motion">
                <img src ={motion} />


                <h1>Motion Graphics</h1>
                </div>
                </div>

            </div>


            <div className='amy'>

                <div className='amyImage'>
                    <img src={amypic}/>
                </div>

                <div className="amyContent">

                <h1>I'm Amy, and i'd love to <br /> <span className="break">work on your next project </span></h1>

                <p> I love working with others to create beautiful design solutions. I've designed everything from brand illustrations to complete mobile apps. I'm also handy with a camera</p>


                 <button className="amybutton"> Free Consultation</button>

                </div>

                
            </div>
    </div>

       <div className='sliders'>
              <h1> My Work</h1>

              <div className="imageSlide">
           {
             [imageSlides[index],imageSlides[index + 1],imageSlides[index + 2]].map((i,image) => (


                <div>
                <img src={i} />
                </div>
            ))
           }
              </div>


           <div className="arrows">
           
              <img src={right} />
              <img src={left} />
             
              </div>
           
       </div>




       <div className="container">



        <div className="footer">



     <div className="footerContent">
            <h1>Book a call with me</h1>


            <p className="footerPara">
                I'd love to have a chat to see how i can help you. The best first
                step is for us to discuss your project during a free consultation.
                then we can move forward from there.
            </p>

            <button className="header-button"> Free Consultation </button>

            </div>







        </div>



       <div className="header">

        <div className="logo">
           <img src={logo} />
        </div>


        <div>
        <button className="header-button"> Free Consultation </button>
       </div>
     
 </div>
       </div>
    </>

  )
}

export default Main
