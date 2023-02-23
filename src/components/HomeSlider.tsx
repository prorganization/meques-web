"use client"

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import rightArrow from "../../public/icons/right-arrow.svg"

export default function HomeSlider({ slides }: any) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNextClick();
        }, 7000); // 1000ms = 1s
        return () => clearInterval(interval);
    });

    const handleNextClick = () => {
        setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
    };

    const getOpacity = (index: any) => (index === currentIndex ? 1 : 0);

    return (
        <div>
            {slides.map((image: any, index: any) => (
                <div
                    key={index}
                    className="absolute top-1/4 left-1/2 transform -translate-x-1/2 "
                    style={{
                        opacity: getOpacity(index),
                        transition: 'opacity 0.5s',
                    }}
                >{image}
                    <div className='w-full justify-end'>
                        <button onClick={handleNextClick} className="flex text-gold ml-auto">
                            Next <Image src={rightArrow} alt="Arrow." className="ml-1.5 mt-1.5" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );

}