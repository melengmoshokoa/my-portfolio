import react from 'react'
import '../CSS/Personal.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import myImage from './Assets/donut.gif'
import myImage1 from './Assets/code.gif'


function Personal(){
    return(
        <div className='Personal'>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bodoni+Moda+SC:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
            </head>
            <div>
            <div className='Intro'>
                <div className='InnerIntro'>
                    <h2 className="bebas-neue-sc-bold1"> About Me</h2>
                    <h3 className="montserrat-sc-regular">nds-on hvuhruhirgiuhrtghurthguhguhrtuhgurhtguhrtiug guithguhruightrughgutguthgutguhtughrthguhrugh bggutiugh</h3>
                </div>
            </div>
            <div className='Info1'>
                <div className='InnerIntro'>
                <h2 className="bebas-neue-sc-bold1"> About Me</h2>
                <h3 className="montserrat-sc-regular">I am a passionate Computer Science Honours candidate with hands-on experience in full-stack development, AI, and data science. I love solving complex problems through technology and am always eager to learn new things. When I’m not coding, you’ll find me exploring new places with my camera or trying out new recipes</h3>   
                </div>
            </div>

            </div>
            <div className='Diva'>
            <div className='Bigger'>
                    <div className='InnerIntro2'>
                    <h2 className="bebas-neue-sc-bold1"> About Me</h2>
                    <h3 className="montserrat-sc-regular">Itumeleng Joyce Moshokoa </h3>
                    <h4 className="montserrat-sc-regular">7 September 2002</h4>
                    <h4 className="montserrat-sc-regular">Computer Science Honours</h4>
                    </div>
            </div>
            <div className='Bigger2'>
                    <div className='InnerIntro4'>
                    <img src={myImage} alt="Description of image" style={{ width: '300px', borderRadius: '10px' }} />
                    </div>
            </div>
            
            </div>
            <div className='Diva2'>
            <div className='Bigger3'>
                    <div className='InnerIntro3'>
                    <img src={myImage1} alt="Description of image" style={{ width: '300px', borderRadius: '10px' }} />
                    <h2 className="bebas-neue-sc-bold1"> About Me</h2>
                    <h3 className="montserrat-sc-regular">I am a passionate Computer Science Honours candidate with hands-on experience in full-stack development, AI, and data science. I love solving complex problems through technology and am always eager to learn new things. When I’m not coding, you’ll find me exploring new places with my camera or trying out new recipes</h3>
                    
                    </div>
            </div>
            
            </div>

            <div className='MenuBar1'>
                <ul>
                    <li><a href="#about">Personal</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Hobbies</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            
        </div>
    );

}
export default Personal;