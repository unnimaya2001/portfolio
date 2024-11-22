import react from 'react'
import Lottie from 'lottie-react'
import Typewriter from 'typewriter-effect';
import homepic from '../lottiefiles/homepic.json'
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

export default function Home () {
    return (
        <>
        <div className="homepage">
            
        <div className="intro">
            <h2>Hi, there! </h2>
            <h2>I am Unnimaya Satheesan</h2>
            <p>I am a <b> <Typewriter className="typo"
  options={{
    strings: [' Web developer', ' Tech enthusiast'],
    autoStart: true,
    loop: true,
  }}
/> </b> </p>
           <ul className="icon">
            <a href="https://www.linkedin.com/in/unnimaya-satheesan-0455a6240" target='_blank'><AiFillLinkedin /></a>
            <a href="https://github.com/unnimaya2001" target='_blank'><AiFillGithub /></a>
            <a href="mailTo:unnimayasatheesan111@gmail.com" target='_blank'><SiGmail /></a>
           </ul>

        </div>

        <div className="lottie">
            <Lottie 
            animationData={homepic}
            loop={true} />
        </div>

        </div>
        </>
    )
}