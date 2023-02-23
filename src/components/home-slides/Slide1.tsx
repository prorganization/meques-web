"use client"

import Image from "next/image";
import ButtonPlay from "@/components/ButtonPlay ";

import rewardIco from "../../../public/icons/reward-icon.svg"
import banner1 from "../../../public/banners/homepage-banner-1.png"

export default function Slide1() {
    return <div className=" bg-homepage bg-no-repeat bg-cover h-full w-full flex items-center pl-[205px]">
        <div className="flex">
            <div>
                <div className="boder-solid border-y-2 border-gold pt-4 pb-10">
                    <h1 className="mb-12 text-4xl text-gold font-medium">International<br />MEQUES Cup 2022</h1>
                    <div className="text-white font-normal text-base">
                        <p>Come celebrate with us and be the best jockey of the year</p>
                        <p className="flex mt-3.5">Reward pool: <Image src={rewardIco} alt="Reward icon." className="ml-1 mr-2" /> 18,888</p>
                    </div>
                </div>
                <div className="pt-16">
                    <ButtonPlay />
                </div>
            </div>
            <div>
                <Image src={banner1} alt="Banner." className="ml-14" />
            </div>
        </div>
        <div className="absolute w-[488px] h-[162px] bottom-0 bg-social-dark-glow left-1/2 transform -translate-x-1/2"></div>
    </div>
} 
