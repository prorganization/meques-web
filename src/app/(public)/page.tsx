"use client"

import { useState } from 'react';

import SocialMedia from "@/components/SocialMedia"
import Footer from '@/components/Footer';
import Image from "next/image";
import HomeSlider from "@/components/HomeSlider";
import Slide1 from "@/components/home-slides/Slide1"
import Slide2 from "@/components/home-slides/Slide2"
import Slide3 from "@/components/home-slides/Slide3"
import Slide4 from "@/components/home-slides/Slide4"
import Slide5 from "@/components/home-slides/Slide5"

import downloadGameFlag from "../../../public/download-game-flag.png"

export default function Home() {
    const slides = [
        <Slide1 />,
        <Slide2 />,
        <Slide3 />,
        <Slide4 />,
        <Slide5 />
    ];

    return (
        <div className="h-full w-full flex flex-col justify-center items-center">
            <HomeSlider slides={slides} />

            <Image src={downloadGameFlag} alt="Download game." className="absolute bottom-0 right-0" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <SocialMedia />
                <Footer />
            </div>
        </div>

    )
} 
