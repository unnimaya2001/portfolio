import Lottie from 'lottie-react'
import aboutpic from '../lottiefiles/aboutpic.json'
import { DiJsBadge } from "react-icons/di";
import { TfiHtml5 } from "react-icons/tfi";
import { MdCss } from "react-icons/md";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";


export default function About (){
    return(
        <>
        <div className="container">
        <div className="about">
        <h2>Get to know me!</h2>
        <p className="aboutdes">Hi, my name is <span>Unnimaya Satheesan</span> and I am from Kerala, India. I'm a <span>MERN stack web developer</span> and a final year college student pursuing MTech in CSE.

I have done an internship  at BSNL. I love to create original projects with beautiful designs, you can check out some of my work in the projects section.

I am open to new collaborations or work where I can contribute and grow. Feel free to connect with me.</p>
       </div>
       <div className="pic">
        <Lottie className="aboutpic"
        animationData={aboutpic}
        loop={true}/>
       </div>
       </div>

       <h2 className='skillhead'>Professional Skills</h2>
       <div className="skills">
        <ul>
            <li className="skill"><DiJsBadge /></li>
            <li className="skill"><TfiHtml5 /></li>
            <li className="skill"><MdCss /></li>
            <li className="skill"><FaNodeJs/></li>
            <li className="skill"><BiLogoMongodb/></li>
            <li className="skill"><SiExpress/></li>
            <li className="skill"><FaGitAlt/></li>
            <li className="skill"><FaSquareGithub/></li>
            <li className="skill"><FaReact/></li>
            <li className="skill"><FaPython/></li>

        </ul>
       </div>
        </>
    )
}