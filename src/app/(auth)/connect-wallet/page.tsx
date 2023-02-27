

'use client'
import { redirect } from "next/navigation";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";

import ButtonConnectWallet from "@/components/ButtonConnectWallet";
import ButtonConnectMetamask from "@/components/ButtonConnectMetamask";


export default function Page() {



    return (<>
        <div className="mt-8 mx-auto relative w-full max-w-2xl rounded overflow-hidden bg-gradient-to-br from-gold via-gold/0 to-gold/80 p-[1px] shadow-auth-container">
            <div className="w-full rounded bg-shadow-black px-6 py-6 flex flex-col items-center">
                <h1 className="mb-6 text-gold text-center text-xl font-medium">
                    Connect your wallet
                </h1>


                <div className="grid w-[310px] gap-3">
                    <p className="text-center text-sm text-white font-medium mb-6">Please connect or create wallet with your account to ensure digital assets can be received.</p>

                    <ButtonConnectMetamask />
                </div>

            </div>
        </div>
    </>
    )
}
