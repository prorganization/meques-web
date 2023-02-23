"use client"

import Image from "next/image";
import ButtonEarnNow from "@/components/ButtonEarnNow";

import banner2 from "../../../public/banners/homepage-banner-2.png"
import playerImage from "../../../public/profile-image.png"
import playerBadge from "../../../public/icons/player-badge.svg"
import chestIco from "../../../public/icons/chest.svg"

export default function Slide2() {
    return <div className="bg-homepage bg-no-repeat bg-cover h-full w-full flex items-center pl-[205px]">
        <div className="flex">
            <div>
                <p className="text-white font-normal text-base">11.11.23</p>
                <h1 className="my-1.5 text-4xl text-gold font-medium">Latest season Player<br />Standings</h1>
                <p className="text-white font-normal text-base">Last Season Player Standings</p>
                <div className="bg-main-purple-darker rounded-md my-5 pt-4 pr-11 pb-7 pl-4">
                    <div className="flex text-white font-medium	mb-7">
                        <div className="flex justify-center items-center w-6 h-6 mr-2.5 bg-gold rounded-full text-sm">
                            1st
                        </div>
                        <div>
                            <div className="flex gap-2.5 mb-3.5">
                                <Image src={playerImage} alt="Banner." className="w-6 h-6 border-solid rounded-full border-2 border-white" />
                                <p className="text-base">
                                    Therealpeter
                                </p>
                                <Image src={playerBadge} alt="Banner." className="w-6 h-6" />
                            </div>
                            <div className="flex gap-5">
                                <p><span className="bg-main-purple px-1.5 py-px mr-1.5 rounded">GI</span>888</p>
                                <p><span className="bg-main-purple px-1.5 py-px mr-1.5 rounded">GII</span>888</p>
                                <p><span className="bg-main-purple px-1.5 py-px mr-1.5 rounded">GIII</span>888</p>
                                <p className="flex ml-24"><Image src={chestIco} alt="Chest" className="mr-1.5 w-4" />88,887</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex text-white font-medium	mb-7">
                        <div className="flex justify-center items-center w-6 h-6 mr-2.5 text-xs text-xs bg-gold rounded-full text-sm">
                            2nd
                        </div>
                        <div>
                            <div className="flex gap-2.5 mb-3.5">
                                <Image src={playerImage} alt="Banner." className="w-6 h-6 border-solid rounded-full border-2 border-white" />
                                <p className="text-base">
                                    Therealpeter
                                </p>
                                <Image src={playerBadge} alt="Banner." className="w-6 h-6" />
                            </div>
                            <div className="flex gap-5">
                                <p><span className="bg-main-purple px-1.5 py-px mr-1.5 rounded">GI</span>888</p>
                                <p><span className="bg-main-purple px-1.5 py-px mr-1.5 rounded">GII</span>888</p>
                                <p><span className="bg-main-purple px-1.5 py-px mr-1.5 rounded">GIII</span>888</p>
                                <p className="flex ml-24"><Image src={chestIco} alt="Chest" className="mr-1.5 w-4" />88,887</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex text-white font-medium">
                        <div className="flex justify-center items-center w-6 h-6 mr-2.5 text-xs bg-gold rounded-full">
                            2nd
                        </div>
                        <div>
                            <div className="flex gap-2.5 mb-3.5">
                                <Image src={playerImage} alt="Banner." className="w-6 h-6 border-solid rounded-full border-2 border-white" />
                                <p className="text-base">
                                    Therealpeter
                                </p>
                                <Image src={playerBadge} alt="Banner." className="w-6 h-6" />
                            </div>
                            <div className="flex gap-5">
                                <p><span className="bg-main-purple px-1.5 py-px mr-1.5 rounded">GI</span>888</p>
                                <p><span className="bg-main-purple px-1.5 py-px mr-1.5 rounded">GII</span>888</p>
                                <p><span className="bg-main-purple px-1.5 py-px mr-1.5 rounded">GIII</span>888</p>
                                <p className="flex ml-24"><Image src={chestIco} alt="Chest" className="mr-1.5 w-4" />88,887</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <ButtonEarnNow />
                </div>
            </div>
            <div>
                <Image src={banner2} alt="Avatar" className="ml-14" />
            </div>
        </div>
        <div className="absolute w-[488px] h-[162px] bottom-0 bg-social-dark-glow left-1/2 transform -translate-x-1/2"></div>
    </div>
} 
