import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import {styles } from "../styles";
import {services } from "../constants";
import {SectionWrapper } from "../hoc";
import {fadeIn, textVariant } from "../utils/motions";
// import {default} from "react-router-dom/dist/dom";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px]'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] '
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-15 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Welcome to my portfolio! I excel in full-stack web development, crafting seamless front-end interfaces and robust back-end solutions. I specialize in shaders, adding mesmerizing visual effects to my projects, and have extensive experience with Three.js, creating immersive 3D experiences. Explore my work to see the blend of functionality, aesthetic brilliance, and cutting-edge 3D technology in every creation.
      </motion.p>

      <div className='mt-25 flex flex-wrap gap-20'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "About");