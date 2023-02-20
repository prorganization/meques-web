"use client"
import Image from "next/image";


import Button from "./Button";
import wallet from "../../public/wallet.svg"


export default function ButtonConnectWallet() {

    return <Button className="h-[32px]" variant="secondary" icon={<Image width={22} height={22} src={wallet} alt="Wallet"/>}>
        Wallet
    </Button>

}