"use client"

import Image from "next/image";
import ButtonGoToQuest from "../ButtonGoToQuest";
import ButtonDownloadGame from "../ButtonDownloadGame";
import coinIco from "../../../public/icons/coin.svg"

import screenshot1 from "../../../public/game-screenshot-1.png"
import screenshot2 from "../../../public/game-screenshot-2.png"
import screenshot3 from "../../../public/game-screenshot-3.png"
import moneyPile from "../../../public/money-pile.png"


export default function Slide4() {
    return <div className="h-full w-full flex flex-col justify-center bg-no-repeat bg-cover bg-right bg-main-purple-darker bg-quests pl-[205px]">
        <div className="flex mb-8">
            <h1 className="mr-20 mb-3.5 text-4xl font-medium text-gold">Complete Quests To Earn</h1>
        </div>
        <div className="flex mb-10 gap-6">
            <div className="boder-solid border-2 border-gold rounded-md bg-gray-900/30">
                <div className="px-10 py-5 text-center">
                    <h2 className="text-gold text-xl font-medium">Daily Sign in</h2>
                    <p className="text-gold">Win At Most</p>
                    <div className="mt-10 flex justify-center"><Image src={coinIco} alt="Coin." className="mr-3" />
                        <h1 className="text-white text-4xl text-medium">888,888</h1>
                    </div>
                </div>
                <Image src={screenshot1} alt="Coin." className="mr-3" />
            </div>
            <div className="boder-solid border-2 border-gold rounded-md bg-gray-900/30">
                <div className="px-10 py-5 text-center">
                    <h2 className="text-gold text-xl font-medium">Daily Commissions</h2>
                    <p className="text-gold">Win At Most</p>
                    <div className="mt-10 flex justify-center"><Image src={coinIco} alt="Coin." className="mr-3" />
                        <h1 className="text-white text-4xl text-medium">888,888</h1>
                    </div>
                </div>
                <Image src={screenshot2} alt="Coin." className="mr-3" />
            </div>
            <div className="relative boder-solid border-2 border-gold rounded-md bg-gray-900/30">
                <div className="px-10 py-5 text-center">
                    <h2 className="text-gold text-xl font-medium">Seasonal Missions</h2>
                    <p className="text-gold">Win At Most</p>
                    <div className="mt-10 flex justify-center"><Image src={coinIco} alt="Coin." className="mr-3" />
                        <h1 className="text-white text-4xl text-medium">888,888</h1>
                    </div>
                </div>
                <Image src={screenshot3} alt="Coin." className="mr-3" />
                <Image src={moneyPile} alt="Money." className="position absolute bottom-[-40px] right-[-20px]" />
            </div>
        </div>
        <div className="felx gap-x-2.5 mt-5">
            <ButtonGoToQuest />
            <ButtonDownloadGame />
        </div>
    </div>
} 
