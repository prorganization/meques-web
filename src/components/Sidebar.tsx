"use client"

import { useSelectedLayoutSegment } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import membershipIco from "../../public/icons/coins.svg";
import leaderboardIco from "../../public/icons/ranking.svg";
import questsIco from "../../public/icons/mission.svg";
import raceIco from "../../public/icons/race.svg";
import marketplaceIco from "../../public/icons/marketplace.svg";
import { HTMLAttributes } from "react";

interface SidebarProps extends HTMLAttributes<HTMLElement> { }

export default function Sidebar({ className }: SidebarProps) {
    const segment = useSelectedLayoutSegment();

    return <nav className="absolute top-header h-[calc(100%_-_58px)] z-10 flex bg-shadow-black/30 font-medium text-sm text-gold ">
        <div className="px-5 flex flex-col justify-center">
            <Link className="flex mb-7" href="/dashboard">
                <Image src={membershipIco} alt="Membership icon." className="mr-1.5" /> Membership
            </Link>
            <Link className="flex mb-7" href="/settings">
                <Image src={leaderboardIco} alt="Leaderboard icon." className="mr-1.5" /> Leaderboard
            </Link>
            <Link className="flex mb-7" href="/settings">
                <Image src={questsIco} alt="Quests icon." className="mr-1.5" /> Quests
            </Link>
            <Link className="flex mb-7" href="/settings">
                <Image src={raceIco} alt="Race icon." className="mr-1.5" /> Race
            </Link>
            <Link className="flex mb-7" href="/settings">
                <Image src={marketplaceIco} alt="Marketplace icon." className="mr-1.5" /> Marketplace
            </Link>
        </div>
        <div className="bg-gradient-to-b from-white/0 via-white to-white/0 w-[2px] my-24"></div>
    </nav>

}