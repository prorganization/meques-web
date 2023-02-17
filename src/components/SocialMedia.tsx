"use client"

import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import discord from "../../public/icons/discord.svg"
import twitter from "../../public/icons/twitter.svg"
import instagram from "../../public/icons/instagram.svg"

export default function SocialMedia() {
    const segment = useSelectedLayoutSegment();

    return <div className="absolute bottom-0 items-center justify-center flex gap-x-11 mb-7 ">
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
}