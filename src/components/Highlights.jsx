import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import VideoCarousel from "./VideoCarousel";
import {SectionWrapper } from "../hoc";
import HSMCarousel from "./HSMCorousel";
import ShaderCarousel from "./ShadersCarousel";


const Highlights = ()=>{
    useGSAP(()=>{
        gsap.to('#title',{opacity:1,y:0})
        gsap.to('.link',{opacity:1,y:0,duration:1,stagger:0})
    },[])
    return (
        <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
            <div className="screen-max-width">
                <div className="mb-12 w-full md:flex items-end justify-between">
                    <h1 id="title" className="section-heading">PROJECT HIGHLIGHTS</h1>
                    
                </div>

                <div className="mb-12 w-full md:flex items-end justify-between">
                    <h1 id="title" className="section-heading">UNINAV </h1>
                    
                </div>
            <br></br>
            <VideoCarousel/>
            <br></br>
            <div className="mb-12 w-full md:flex items-end justify-between">
                    <h1 id="title" className="section-heading">SHADERS </h1>
                    
                </div>
            


            <ShaderCarousel/>
            <br></br>
                <div className="mb-12 w-full md:flex items-end justify-between">
                    <h1 id="title" className="section-heading">HOSPITAL MANAGEMENT</h1>
                    
                </div>
                
            <HSMCarousel/>

            </div>

        </section>
    )
}
export default SectionWrapper(Highlights,"Works")
