"use client"

import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import discord from "../../public/icons/discord.svg"
import twitter from "../../public/icons/twitter.svg"
import instagram from "../../public/icons/instagram.svg"

export default function SocialMedia() {
    const segment = useSelectedLayoutSegment();

    return <div className="absolute bottom-0 w-full">
        <div className="flex justify-center gap-x-10 mb-7">
            <Link className="" href="/settings">
                <Image src={discord} alt="Discord"/>
            </Link>
            <Link className="" href="/settings">
                <Image src={twitter} alt="Twitter"/>
            </Link>
            <Link className="" href="/settings">
                <Image src={instagram} alt="Instagram"/>
            </Link>
        </div>
    </div>
}