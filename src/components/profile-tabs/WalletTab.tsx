
"use client"

import Image from "next/image";
import ButtonClaimRewards from "../ButtonClaimRewards";

import chart from "../../../public/wallet-chart.png"
import coin from "../../../public/icons/coin.svg"
import coin1 from "../../../public/icons/coin1.svg"

export default function WalletTab() {
    return <div className="mt-5">
        <h1 className="mb-4 text-gold font-medium text-2xl">Rewards</h1>
        <div className="flex rounded bg-shadow-grey1 p-5">
            <div className="w-1/2 font-medium">
                <p className="mb-7 text-white opacity-50 text-sm">Total Claimed Coins</p>
                <div className="flex gap-8">
                    <div className="relative h-fit">
                        <Image src={chart} alt="chart" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex">
                            <Image src={coin1} alt="chart" />
                            <h2 className="text-3xl text-white">100</h2>
                        </div>
                    </div>
                    <div className="text-white">
                        <table>
                            <tr>
                                <td></td>
                                <td>Races</td>
                                <td className="text-xs">20 (15%)</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Missions & Qeusts</td>
                                <td className="text-xs">26 (18%)</td>
                            </tr>
                        </table>
                        <p className="text-white opacity-50 text-sm">Membership</p>
                        <table>
                            <tr>
                                <td></td>
                                <td>Delegation</td>
                                <td className="text-xs">40 (24%)</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Punts</td>
                                <td className="text-xs">26 (18%)</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Referral</td>
                                <td className="text-xs">26 (18%)</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

            <div className="w-1/2">
                <p className="mb-7 text-white opacity-50 text-sm">Claimable Rewards</p>
                <div className="flex mb-5 gap-x-8 font-medium text-4xl">
                    <div className="flex">
                        <Image src={coin1} alt="chart" />
                        <h2 className="text-3xl text-white">100</h2>
                    </div>
                    <div className="flex">
                        <Image src={coin} alt="chart" />
                        <h2 className="text-3xl text-white">20</h2>
                    </div>
                </div>
                <ButtonClaimRewards />
            </div>

        </div>
    </div>
} 
