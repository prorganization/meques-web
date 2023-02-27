"use client"

import { useState } from 'react';
import Image from "next/image";
import ButtonEdit from "@/components/ButtonEdit"
import ButtonSettings from "@/components/ButtonSettings"

import profileImage from "../../../../public/player-center-profile-image.png"
import profileBadge from "../../../../public/icons/player-badge.svg"
import guildIcon from "../../../../public/icons/guild-icon.svg"

export default function Profile() {

    return <div className="h-full w-full left-[148px] bg-shadow-black  pt-[58px]">

        <div className='absolute h-52 w-[calc(100%_-_148px)] left-[148px] bg-player-center-gradient'></div>
        <div className='flex flex-col items-center'>
            <div className="w-fit z-10 pt-10 px-14">
                <div className='flex mb-10 justify-between'>
                    <h1 className="text-gold text-3xl font-medium">Player Center</h1>
                    <ButtonSettings />
                </div>
                <div className="px-8 py-5 bg-main-purple-lighter rounded flex gap-8">
                    <div>
                        <Image src={profileImage} alt="profile" />
                        <p className='mt-3 text-shadow-grey5'>UID <span className='text-white'>992 911 169</span></p>
                    </div>
                    <div>
                        <p className='text-accent-green-lighter'>The Elegant</p>
                        <div className='flex'>
                            <h1 className='mr-2 text-3xl text-white font-medium'>Anya Forger</h1>
                            <Image src={profileBadge} alt="badge" />
                        </div>
                        <div className='bg-main-purple flex mt-3 py-5 pl-5 pr-24'>
                            <Image src={guildIcon} alt="icon" />
                            <p className='ml-3 text-base font-middle text-white'>WagyuMafia</p>
                        </div>
                    </div>
                    <div className='relative bg-shadow-grey1 mb-7 px-4  pb-10 pt-4 rounded-md'>
                        <div className='flex justify-between text-main-purple text-3xl font-medium'>
                            <h1>"</h1><h1>"</h1>
                        </div>
                        <div className="flex pl-5">
                            <p className='mr-44	text-shadow-grey5 text-base font-medium'>You haven't updated any bio</p>
                            <ButtonEdit />
                        </div>
                        <div className="absolute bottom-0 left-[-20px] w-fit overflow-hidden inline-block">
                            <div className="h-9 w-6 bg-shadow-grey1 rotate-45 transform origin-bottom-left"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex mt-6 relative px-14 gap-x-3'>
                <div className='w-max rounded bg-shadow-grey1 py-7 pl-7 pr-16'>
                    <div className='relative text-white rounded bg-main-purple mb-3 pl-8 py-2'>
                        <div className='absolute left-[-12px] top-[-9px] rounded-full w-7 h-7 bg-shadow-grey5'></div>
                        Wow, you're a invincible!
                    </div>
                    <div className='flex gap-x-16'>
                        <div className='font-medium'>
                            <p className='mb-1 text-shadow-grey4'>Ranked top 10</p>
                            <h1 className='text-4xl	text-white'>88%</h1>
                        </div>
                        <div className='font-medium'>
                            <p className='mb-1 text-shadow-grey4'>Races completed</p>
                            <h1 className='text-4xl	text-white'>122</h1>
                        </div>
                        <div className='font-medium'>
                            <p className='mb-1 text-shadow-grey4'>Race Champions</p>
                            <h1 className='text-4xl	text-white'>80</h1>
                        </div>
                    </div>
                </div>
                <div className='w-max rounded bg-shadow-grey1 py-7 pl-7 pr-16'>
                    <div className='relative text-white rounded bg-main-purple mb-3 pl-8 py-2'>
                        <div className='absolute left-[-12px] top-[-9px] rounded-full w-7 h-7 bg-shadow-grey5'></div>
                        Wow, you're a invincible!
                    </div>
                    <div className='flex gap-x-16'>
                        <div className='font-medium'>
                            <p className='mb-1 text-shadow-grey4'>Punts winning rate</p>
                            <h1 className='text-4xl	text-white'>88%</h1>
                        </div>
                        <div className='font-medium'>
                            <p className='mb-1 text-shadow-grey4'>Total Punts #</p>
                            <h1 className='text-4xl	text-white'>12,888</h1>
                        </div>
                        <div className='font-medium'>
                            <p className='mb-1 text-shadow-grey4'>Total Return</p>
                            <h1 className='text-4xl	text-white'>890</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
} 
