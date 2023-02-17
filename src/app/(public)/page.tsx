import Image from "next/image";
import Link from "next/link";
import ButtonPlay from "@/components/ButtonPlay ";
import ButtonEarnNow from "@/components/ButtonEarnNow";
import SocialMedia from "@/components/SocialMedia"

import rewardIco from "../../../public/icons/reward-icon.svg"
import banner1 from "../../../public/banners/image33.png"
import banner2 from "../../../public/banners/image21.png"

export default async function Home() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="flex">
            <div>
                <div className="boder-solid border-y-2 border-gold pt-4 pb-10">
                    <h1 className="mb-12 text-4xl text-gold font-medium">International<br />MEQUES Cup 2022</h1>
                    <div className="text-white font-normal text-base">
                        <p>Come celebrate with us and be the best jockey of the year</p>
                        <p className="flex mt-3.5">Reward pool: <Image src={rewardIco} alt="Reward icon." className="ml-1 mr-2"/> 18,888</p>
                    </div>
                </div>
                <div className="pt-16">
                    <ButtonPlay/>
                </div>
            </div>
            <div>
                <Image src={banner1} alt="Banner." className="ml-14"/>
            </div>
        </div>

        <div className="flex">
            <div>
                <p className="text-white font-normal text-base">11.11.23</p>
                <h1 className="my-1.5 text-4xl text-gold font-medium">Latest season Player<br/>Standings</h1>
                <p className="text-white font-normal text-base">Last Season Player Standings</p>
                <div className="bg-main-purple-darker rounded-md my-5 p-4">
                    <p>Therealpeter</p>
                </div>
                <div className="">
                    <ButtonEarnNow />
                </div>
            </div>
            <div>
                <Image src={banner2} alt="Banner." className="ml-14"/>
            </div>
        </div>

        <SocialMedia/>
    </div>
    
  )
} 
