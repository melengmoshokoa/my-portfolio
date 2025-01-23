import react from 'react'
import '../CSS/Personal.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Personal(){
    return(
        <div className='Personal'>
            <div>
            <div className='Intro'>
                <div className='InnerIntro'>

                </div>
            </div>
            <div className='Info1'>
                <div className='InnerIntro'>
                        
                </div>
            </div>

            </div>
            <div className='Diva'>
            <div className='Bigger'>
                    <div className='InnerIntro2'>
                    
                    </div>
            </div>
            <div className='Bigger2'>
                    <div className='InnerIntro4'>
                    
                    </div>
            </div>
            
            </div>
            <div className='Diva2'>
            <div className='Bigger3'>
                    <div className='InnerIntro3'>
                    
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