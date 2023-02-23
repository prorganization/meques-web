"use client"

import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import discord from "../../public/icons/discord.svg"
import twitter from "../../public/icons/twitter.svg"
import instagram from "../../public/icons/instagram.svg"

export default function SocialMedia() {
    const segment = useSelectedLayoutSegment();

    return <div className="w-fit mx-auto relative">
        <div className="flex px-14 bg-dark-glow bg-no-repeat gap-x-11 pb-7  ">
            <Link className="" href="/settings">
                <Image src={discord} alt="Discord" className="mr-1.5"/>
            </Link>
            <Link className="" href="/settings">
                <Image src={twitter} alt="Twitter" className="mr-1.5"/>
            </Link>
            <Link className="" href="/settings">
                <Image src={instagram} alt="Instagram" className="mr-1.5"/>
            </Link>
        </div>
    </div>
}