
//Uninav Imports
//HSM imports
import {aboutus,adddoctors,admindash,adminlogin,appointmentbook,appointmentdetails,contactpage,docappoint,docdash,doclist,docloginpage,homepagetwo,patappoint,patdash,patlist,patlogin,patprescription} from "../assets"

//shaders imports
import {noise,gradcircle,sunset}from '../assets'


// export const navLinks = ['About','Works','Technologies','Contacts']
export const navLinks = [
  { id: 'About', title: 'About' },
  { id: 'Works', title: 'Works' },
  { id: 'Technologies', title: 'Technologies' }
  
];

import { reactjs,web,mobile,backend,html,css,tailwind,javascript,python,cpp,docker,git,matlab,mongodb,mysql,nodejs,opengl } from "../assets"
export const technologies=[ 
  {
    name:"HTML",
    icon: html
  },
  {
    name:"CSS",
    icon: css
  },
  {
    name:"TailWind",
    icon: tailwind
  },
  {
    name:"JavaScript",
    icon: javascript
  },
  {
    name:"React",
    icon: reactjs
  },
  {
    name:"Python",
    icon: python
  },
  {
    name:"Cpp",
    icon: cpp
  },
  {
    name:"Docker",
    icon: docker
  },
  {
    name:"Git",
    icon: git
  },
  {
    name:"Matlab",
    icon: matlab
  },
  {
    name:"Mysql",
    icon: mysql
  },
  {
    name:"Mongodb",
    icon: mongodb
  },
  {
    name:"Nodejs",
    icon: nodejs
  },
  {
    name:"OpenGL",
    icon: opengl
  },
]


export const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
   
  ];

  
//Uninav Highlights Carousel

import { department,email,homepage,prolist,schedule,setschedule} from "../assets"


export const UninavSlides = [
  {
    id: 1,
    textLists: ["Easy Navigation"],
    image: homepage,
  },
  {
    id: 2,
    textLists: ["Connect with Professors"],
    image: email,
  },
  {
    id: 3,
    textLists: ["Choose Your Department"],
    image: department,
  },
  {
    id: 4,
    textLists: ['Finding Professors Have Never Been This Easy'],
    image: prolist,
  },
  {
    id: 5,
    textLists: ['Schedule The Meeting'],
    image: schedule,
  },
  {
    id: 6,
    textLists: ["Easy To Schedule"],
    image: setschedule,
  },


];

//HSM Carousel 


export const HSMSlides = [
  {
    id: 1,
    textLists: [],
    image: aboutus,
  },
  {
    id: 2,
    textLists: [],
    image: adddoctors,
  },
  {
    id: 3,
    textLists: [],
    image: admindash,
  },
  {
    id: 4,
    textLists: [],
    image: adminlogin,
  },
  {
    id: 5,
    textLists: [],
    image: appointmentbook,
  },
  {
    id: 6,
    textLists: [],
    image: appointmentdetails,
  },{
    id: 7,
    textLists: [],
    image: contactpage,
  },{
    id: 8,
    textLists: [],
    image: docappoint,
  },{
    id: 9,
    textLists: [],
    image: docdash,
  },{
    id: 10,
    textLists: [],
    image: doclist,
  },{
    id: 11,
    textLists: [],
    image: docloginpage,
  },{
    id: 12,
    textLists: [],
    image: homepagetwo,
  },{
    id: 13,
    textLists: [],
    image: patappoint,
  },{
    id: 14,
    textLists: [],
    image: patdash,
  },{
    id: 15,
    textLists: [],
    image: patlist,
  },{
    id: 16,
    textLists: [],
    image: patlogin,
  },{
    id: 17,
    textLists: [],
    image: patprescription,
  },
];

export const ShaderSlides = [
  {
    id: 1,
    textLists: [],
    image: noise,
  },
  {
    id: 2,
    textLists: [],
    image: gradcircle,
  },
  {
    id: 3,
    textLists: [],
    image: sunset,
  }
  
];