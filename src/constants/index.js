import { FrontSide } from "three";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    highschool,
    tesla,
    shopify,
    smritya,
    dalle,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "High School",
      company_name: "Bal Vidyalaya Madhyamik School",
      icon: highschool,
      iconBg: "#383E56",
      date: "April 2015 - May 2016",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      ],
    },
    {
      title: "Intermediate",
      company_name: "Tulsi Vidya Niketan",
      icon: highschool,
      iconBg: "#E6DEDD",
      date: "August 2016 - May 2018",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      ],
    },
    {
      title: "Graduation",
      company_name: "RKGIT [Dr. A P J Abdul Kalam Technical University]",
      icon: highschool,
      iconBg: "#383E56",
      date: "August 2019 - June 2023",
      points: [
        "Bachelor Of Technology(B.Tech)",
        "CGPA- 8.56/10",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Smrtiyan App",
      description:
        "Web-based platform that allows users to Smrtiyan(Sanskrit Synonymous of Memories) Users can post memory with photo, title, tags, and with description,The app comes with special features that gives User to Like the friend's memory but they cannot delete it, only the creator of the memory can delete the memory from the App. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: smritya,
      source_code_link: "https://github.com/isinghabhishek/smrtiya-mern-app",
      source_web_link: "https://smrtiyanmernapp.netlify.app/posts",
    },
    {
      name: "DALL-E Clone",
      description:
        "AI image generating app a clone of DALL-E and Midjourney with morden dynamic image layout a hover effect that showcases a user’s prompt to generate image. AI generate image by clicking the surprise me button or entering absolutely any text. The generated image can be share to the community feed with functionality like user’s name, image download button option and search functionality in community feed.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "openaiapi",
          color: "white-text-gradient",
        },
      ],
      image: dalle,
      source_code_link: "https://github.com/isinghabhishek/DALL-E",
    },
    {
      name: "CodeX clone",
      description:
        "A ChatGPT AI APP using OPENAI_API. The ChatGPT app communication with advanced GPT3 model API. Ability to ask the AI for help related to Programming Languages such as JavaScript, ReactJS & other languages.",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "openaiapi",
          color: "pink-text-gradient",
        },
        {
          name: "chatgpt",
          color: "white-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/isinghabhishek/CodeX",
    },
    {
      name: "Disease prediction system using Machine Learning",
      description:
        "Developed an effective Model for predicting Diabetic and Heart Disease with the help of trained ML Model. It involves building a Support Vector ML model for Diabetic and Logistic Regression model for Heart Disease prediction. Achieved accuracy of 80.55% to predict Diabetic and 82.48% accuracy for Heart Disease ML model.",
      tags: [
        {
          name: "machinelearning",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "streamlit",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/isinghabhishek/Diseases-Prediction-ML-Model",
    },
    {
      name: "QuickNews",
      description:
        "QuickNews is News Application using News API and based an real-time application for News information from the different News agencies on WebApp and It is multipage application with different categories of news. Application can be use to Grape Quick Daily News with multiple pages to access new of your Interested in General, Whether, Politics, Entertainment, Science and Sports News.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/isinghabhishek/QuickNews-ReactJS_App",
    },
  ];
  
  export { services, technologies, experiences, projects };