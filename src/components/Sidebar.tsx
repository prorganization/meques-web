"use client"

import { useSelectedLayoutSegment } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import membershipIco from "../../public/icons/coins.svg";
import leaderboardIco from "../../public/icons/ranking.svg";
import questsIco from "../../public/icons/mission.svg";
import raceIco from "../../public/icons/race.svg";
import marketplaceIco from "../../public/icons/marketplace.svg";

export default function Sidebar() {
    const segment = useSelectedLayoutSegment();

    return <nav className="flex flex-col h-full w-1/6 px-6 justify-center bg-gray-900/30 font-medium text-sm text-gold ">
        <Link className="flex mb-9 px-6 " href="/dashboard">
            <Image src={membershipIco} alt="Membership icon." className="mr-1.5"/> Membership
        </Link>
        <Link className="flex mb-9 px-6" href="/settings">
            <Image src={leaderboardIco} alt="Leaderboard icon." className="mr-1.5"/> Leaderboard
        </Link>
        <Link className="flex mb-9 px-6" href="/settings">
            <Image src={questsIco} alt="Quests icon." className="mr-1.5"/> Quests
        </Link>
        <Link className="flex mb-9 px-6" href="/settings">
            <Image src={raceIco} alt="Race icon." className="mr-1.5"/> Race
        </Link>
        <Link className="flex mb-9 px-6"  href="/settings">
            <Image src={marketplaceIco} alt="Marketplace icon." className="mr-1.5"/> Marketplace
        </Link>
    </nav>

}