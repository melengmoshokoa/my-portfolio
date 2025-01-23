// this is the Landing page to my portfolio
import React from 'react';
import '../CSS/LandingPage.css';
import { useEffect, useState } from 'react';
import {fetchJellyfishImages} from '../API_pexels'

function LandingPage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = 'QHE5BDcAmpzEARuuBbandJBUAcGoF8B0E9gYSnFisKYx9pULU662GcTq';

  const MAX_WIDTH = 7572; 
  const MAX_HEIGHT = 5748;

  useEffect(() => {
    const getImages = async () => {
      try {
        const data = await fetchJellyfishImages(apiKey);

        const filteredImages = data.filter(image => 
          image.width <= MAX_WIDTH && image.height <= MAX_HEIGHT
        );
        setImages(filteredImages);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch images');
        setLoading(false);
      }
    };
    if (apiKey) {
      getImages(); 
    } else {
      setError('API key not found');
      setLoading(false);
    }
  }, [apiKey]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }


  return (
    <div className='LandingPage'>
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bodoni+Moda+SC:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </head>
      <div className='SideDivs'>
                
                <div className='PersonalPage' 
                  style={{ backgroundImage: `url(${images[0]?.src?.medium})` }} // Add background image
                >
                </div>
                
                <div className='Projects' 
                  style={{ backgroundImage: `url(${images[3]?.src?.medium})` }} // Add background image
                >
                 
                </div>
                
                <div className='Hobbies' 
                  style={{ backgroundImage: `url(${images[9]?.src?.medium})` }} // Add background image
                >
                  
                </div>

                <div className='Hobbies' 
                  style={{ backgroundImage: `url(${images[10]?.src?.medium})` }} // Add background image
                >
                  
                </div>
              </div>
        <div className="VerticalLine"></div>
        <div className='MenuBar'>
        <ul>
            <li><a className="montserrat-sc-regular" href="#about">Personal</a></li>
            <li><a className="montserrat-sc-regular" href="#projects">Projects</a></li>
            <li><a className="montserrat-sc-regular" href="#contact">Hobbies</a></li>
            <li><a className="montserrat-sc-regular" href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className='Name'>
            <h3 className="bebas-neue-sc-bold">Itumeleng J. MOSHOKOA</h3>
            <h3 className="typing-effect montserrat-sc-regular">Hi welcome to my portfolio</h3>
            <h3 className="typing-effect2 montserrat-sc-regular">Software Engineer | Data Science | UI/UX Design</h3>
            <div className='buttons'>
                <button className="montserrat-sc-regular">Contact me </button>
                <button className="montserrat-sc-regular">Email</button>
                <button className="montserrat-sc-regular">LinkedIn</button>
                <button className="montserrat-sc-regular">Github</button>
            </div>
        </div>
    </div>
  );
}


export default LandingPage;
