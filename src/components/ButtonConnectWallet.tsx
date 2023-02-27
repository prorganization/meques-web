"use client"
import Image from "next/image";



import wallet from "../../public/wallet.svg"
import ButtonLink from "./ButtonLink";


export default function ButtonConnectWallet() {

    return <ButtonLink href="connect-wallet" className="h-[32px]" variant="button" icon={<Image width={22} height={22} src={wallet} alt="Wallet"/>}>
        Wallet
    </ButtonLink>

}