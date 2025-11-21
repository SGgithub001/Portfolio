import Profile from "./images/Profile.jpg";
import ManavRachna from "./images/Manav Rachna.jpg";
import html from "./images/html.png";
import css from "./images/css.png";
import javascript from "./images/javascript.png";
import react from "./images/reactjs.png";
import springBoot from "./images/Springboot.png";
import BN from "./images/BN.png";
import Intellij from "./images/Intellij.png";
import kafka from "./images/Kafka.png";
import java from "./images/java.png";
import Redis from "./images/Redis.png";
import Microservices from "./images/Microservices.png";
import Docker from "./images/Docker.png";
import security from "./images/security.png";
import bootstrap from "./images/bootstrap.png";
import mysql from "./images/mysql.png";
import mongodb from "./images/mongodb.png";
import c from "./images/c.png";
import cpp from "./images/cpp.png";
import git from "./images/git.png";
import github from "./images/github.png";
import postman from "./images/postman.png";
import vscode from "./images/vscode.png";
import versel from "./images/vercel.png";
import netlify from "./images/netlify.png";
import compass from "./images/mc.png";
import xampp from "./images/xampp.png";

export const profile = Profile;

export const profileLinks = {
    github: 'https://github.com/SGgithub001',
    linkedin: 'https://www.linkedin.com/in/sushil-gupta-157b03250/',
    instagram: "https://www.instagram.com/sushil7493kumar/",
    resume: "https://drive.google.com/file/d/1WQHD4OEsxlsjWANsyltK7tcERkYSlB0g/view?usp=sharing",
};

export const skillsInfo = [
    {
        title: "Frontend",
        skills: [
            { name: "HTML", logo: html },
            { name: "CSS", logo: css },
            { name: "JavaScript", logo: javascript },
            { name: "React JS", logo: react },
            { name: "Bootstrap", logo: bootstrap },
        ]
    },
    {
        title: "Backend",
        skills: [
            { name: "Java", logo: java },
            { name: "SpringBoot", logo: springBoot },
            { name: "Spring Security", logo: security },
            { name: "Redis", logo: Redis },
            { name: "MySQL", logo: mysql },
            { name: "MongoDB", logo: mongodb },
            // { name: "MicroServices", logo: Microservices },

        ]
    },
    {
        title: "Languages",
        skills: [
            { name: "C", logo: c },
            { name: "C++", logo: cpp },
            { name: "Java", logo: java },
            { name: "JavaScript", logo: javascript }
        ]
    },
    {
        title: "Tools",
        skills: [
            { name: "Intellij", logo: Intellij },
            { name: "Git", logo: git },
            { name: "GitHub", logo: github },
            { name: "VS Code", logo: vscode },
            { name: "Postman", logo: postman },
            { name: "Kafka", logo: kafka },
            { name: "Docker", logo: Docker},
            { name: "Compass", logo: compass },
            { name: "Xampp", logo: xampp },
            { name: "Vercel", logo: versel },
            { name: "Netlify", logo: netlify },           
        ]
    }
];

export const experiences = [
    {
        id: 0,
        img: ManavRachna,
        role: "Student", 
        company: "Manav Rachna International Institute of Research and Studies",
        date: "Aug 2022 - Present",
        desc: "Currently pursuing a Bachelor’s in Computer Science Engineering with a focus on full-stack web development, artificial intelligence, and software engineering. Engaged in multiple academic and technical projects showcasing problem-solving and innovation.",
        skills: ["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS"]
    },
    {
        id: 1,
        img: BN,
        role: "Student", 
        company: "Silver Oak School",
        date: "Apr 2020 - Mar 2021",
        desc: "Completed higher secondary education with a specialization in Physics, Chemistry, Mathematics, and Information Technology, building a strong foundation for computing and analytical skills.",
        skills: ["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS"]
    },
    {
        id: 2,
        img: BN,
        role: "Student",
        company: "Silver Oak School",
        date: "Apr 2018 - Mar 2019",
        desc: "Completed secondary education with distinction, developing early interest in science and technology through academic and extracurricular participation.",
        skills: ["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS"]
    }
];

export const education = [
    {
        id: 0,
        img: ManavRachna, 
        school: "Manav Rachna International Institute of Research and Studies",
        date: "Aug 2022 - Present",
        desc: "Currently pursuing a Bachelor’s in Computer Science Engineering with a focus on Java Backend development, artificial intelligence, and software engineering. Engaged in multiple academic and technical projects showcasing problem-solving and innovation.",
        degree: "Bachelor of Technology - B.Tech (Computer Science)"
    },
    {
        id: 1,
        img: BN, 
        school: "BN Public School",
        date: "Apr 2021 - Mar 2022",
        // grade: "95%",
        desc: "Completed higher secondary education with a specialization in Physics, Chemistry, Mathematics, and Information Technology, building a strong foundation for computing and analytical skills.",
        degree: "CBSE (XII) - PCM with Information Technology"
    },
    {
        id: 2,
        img: BN,
        school: "BN Public School",
        date: "Apr 2019 - Mar 2020",
        // grade: "89%",
        desc: "Completed secondary education with distinction, developing early interest in science and technology through academic and extracurricular participation.",
        degree: "CBSE (X)"
    }
];

export const projects = [
    // {
    //     id: 0,
    //     title: "CounselDesk: AI-Powered Legal Services Platform",
    //     description: "CounselDesk is an AI-driven legal services platform designed to simplify access to legal guidance. It provides intelligent document drafting, case consultation, and lawyer-user communication through a secure and scalable MERN stack architecture. Integrated with Google Auth and JWT authentication, it ensures seamless, secure user management and real-time interactions.",
    //     image: CounselDesk,
    //     tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
    //     github: "https://github.com/Aayush6377/CounselDesk",
    //     webapp: "https://counsel-desk.vercel.app"
    // },
    // {
    //     id: 1,
    //     title: "ReadSphere – Content Management System",
    //     description: "ReadSphere is a dynamic CMS platform that allows users to create, manage, and share blogs effortlessly. It features user authentication, post categorization, and a clean, EJS-powered interface for smooth content delivery. Built with the Node.js and Express backend, it provides robust CRUD functionality and MongoDB integration for efficient data handling.",
    //     image: ReadSphere,
    //     tags: ["Node.js", "MongoDB", "Express", "EJS", "HTML", "CSS", "JavaScript"],
    //     github: "https://github.com/Aayush6377/ReadSphere",
    //     webapp: "https://read-sphere-tan.vercel.app"
    // }
]
