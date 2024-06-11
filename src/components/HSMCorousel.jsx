import React, { useState, useRef } from "react";
import { HSMSlides } from "../constants";
import gsap from "gsap";

const HSMCarousel = () => {
    const sliderRef = useRef(null);
    const imageRef = useRef([]);
    const imageSpanRef = useRef([]);
    const imageDivRef = useRef([]);
  
    const [image, setImage] = useState({
        imageId: 0,
        isLastImage: false,
    });
  
    const { imageId } = image;
  
    const handleCircleClick = (index) => {
        setImage({ imageId: index, isLastImage: false });
        gsap.to(sliderRef.current, {
            x: `-${100 * index}%`,
            duration: 2,
            ease: "power2.inOut",
        });
    };
  
    return (
        <>
            <div className="flex items-center overflow-hidden">
                <div ref={sliderRef} className="flex w-full transition-transform duration-700 ease-in-out">
                    {HSMSlides.map((list, i) => (
                        <div key={list.id} className="sm:pr-20 pr-10 min-w-full">
                            <div className="video-carousel_container relative w-full h-full">
                                <div className="w-full h-full flex items-center justify-center rounded-3xl overflow-hidden bg-black">
                                    <img
                                        src={list.image}
                                        alt={list.alt}
                                        className="w-200 h-200 object-contain"
                                        ref={(e) => (imageRef.current[i] = e)}
                                    />
                                </div>
                                <div className="absolute top-12 left-[5%] z-10">
                                    {list.textLists.map((text) => (
                                        <p key={text} className="md:text-2xl text-xl font-medium">
                                            {text}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative flex-center mt-10">
                <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
                    {HSMSlides.map((_, i) => (
                        <span
                            key={i}
                            ref={(e) => (imageDivRef.current[i] = e)}
                            className={`mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer ${
                                imageId === i ? "w-5 h-5" : ""
                            }`}
                            onClick={() => handleCircleClick(i)}
                        >
                            <span
                                className="absolute h-full w-full rounded-full"
                                ref={(e) => (imageSpanRef.current[i] = e)}
                            />
                        </span>
                    ))}
                </div>
            </div>
        </>
    );
};

export default HSMCarousel;
