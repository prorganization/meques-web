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



export default function Home() {
    // const slides = [
    //     <Slide1 />,
    //     <Slide2 />,
    //     <Slide3 />,
    //     <Slide4 />,
    //     <Slide5 />
    // ];

    return <Slide5 />
} 
