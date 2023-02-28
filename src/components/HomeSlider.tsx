"use client"

import React, { useState, useEffect } from 'react';

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
            {slides.map((slide: any, index: any) => (
                <div
                    key={index}
                    className="absolute w-full h-full"
                    style={{
                        opacity: getOpacity(index),
                        transition: 'opacity 0.5s',
                    }}
                >
                    {slide}
                </div>
            ))}
        </div>
    );

}