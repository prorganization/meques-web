"use client"

import Image from "next/image";
import ButtonTakePunt from "../ButtonTakePunt";
import liveStreamCover from "../../../public/live-stream-cover.png"
import profileImage from "../../../public/profile-image-square.png"

export default function Slide3() {
    return <div className="h-full w-full flex items-center bg-no-repeat bg-right-top bg-shadow-black bg-live-stream bg- pl-[205px]">
        <div>
            <div className="mb-8 w-full">
                <h1 className="mb-3.5 text-4xl text-gold">Live Stream</h1>
                <p className="text-white text-2xl">Best Stable Award 2022</p>
            </div>
            <div className="flex">
                <div className="pr-5 font-medium">
                    <Image src={liveStreamCover} alt="Live stream." />
                </div>
                <div className="px-4 py-1.5 boder-solid border-x-2 border-gold">
                    <div className="flex">
                        <div className="mr-12">
                            <p className="text-gold text-sm font-medium">Win a total prize of</p>
                            <h2 className="text-white text-4xl">899,999 <span className="text-gold text-sm font-medium">$MEQUES</span></h2>
                        </div>
                        <div>
                            <p className="text-gold text-sm font-medium">Season ending in</p>
                            <h2 className="text-white text-2xl">15 : 10 :  01</h2>
                        </div>
                    </div>
                    <div className="my-5 text-sm">
                        <div className="flex mb-1.5 p-0.5 pr-1.5 rounded bg-shadow-black items-center">
                            <Image src={profileImage} alt="Player." className="rounded mr-2.5" />
                            <p className="text-white mr-16">lovehorses88 <span className="text-gold">has just staked on stables</span></p>
                            <p className="text-shadow-white opacity-30">1s</p>
                        </div>
                        <div className="flex mb-1.5 p-0.5 pr-1.5 rounded bg-shadow-black items-center">
                            <Image src={profileImage} alt="Player." className="rounded mr-2.5" />
                            <p className="text-white mr-16">lovehorses88 <span className="text-gold">has just staked on stables</span></p>
                            <p className="text-shadow-white opacity-30">1s</p>
                        </div>
                        <div className="flex mb-1.5 p-0.5 pr-1.5 rounded bg-shadow-black items-center">
                            <Image src={profileImage} alt="Player." className="rounded mr-2.5" />
                            <p className="text-white mr-16">lovehorses88 <span className="text-gold">has just staked on stables</span></p>
                            <p className="text-shadow-white opacity-30">1s</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <ButtonTakePunt />
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute w-[488px] h-[162px] bottom-0 bg-social-light-glow left-1/2 transform -translate-x-1/2"></div>
    </div>
} 
