"use client"

import Image from "next/image";
import ButtonBuyMembership from "../ButtonBuyMembership";
import goldMembershipBadge from "../../../public/gold-membership-badge.png"
import diamondIco from "../../../public/icons/diamond.svg"
import pinIco from "../../../public/icons/pin.svg"
import missionIco from "../../../public/icons/mission-1.svg"

export default function Slide3() {
    return <div className="h-full w-full flex flex-col justify-center items-center bg-no-repeat bg-center bg-shadow-black bg-membership pl-[205px]">
        <div className="flex mb-8 items-center">
            <h1 className="mr-20 mb-3.5 text-4xl font-medium text-gold">Join Membership To<br />Win And Earn!</h1>
            <Image src={goldMembershipBadge} alt="Live stream." />
        </div>
        <div className="flex mb-10 gap-6">
            <div className="flex text-white text-base font-medium">
                <Image src={diamondIco} alt="Diamond." className="mr-3" />
                Exclusivity that connects<br />to physical space
            </div>
            <div className="flex text-white text-base font-medium">
                <Image src={pinIco} alt="Pin." className="mr-3" />
                Stake on players and<br />guilds to earn!
            </div>
            <div className="flex text-white text-base font-medium">
                <Image src={missionIco} alt="Mission." className="mr-3" />
                More missions and<br />quests
            </div>
        </div>
        <ButtonBuyMembership />
        <div className="absolute w-[488px] h-[162px] bottom-0 bg-social-light-glow left-1/2 transform -translate-x-1/2"></div>
    </div>
} 
