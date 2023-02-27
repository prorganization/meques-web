"use client"
import Image from "next/image";



import metamaskIcon from "../../public/icons/metamask.svg"
import Button from "./Button";
import ButtonLink from "./ButtonLink";


export default function ButtonConnectMetamask() {

    const handleConnectMetamask = () => {
        console.log("Conecting to metamask...");
    }

    return <Button onClick={handleConnectMetamask} className="h-[32px]" variant="secondary" icon={<Image width={22} height={22} src={metamaskIcon} alt="Wallet"/>}>
        Metamask
    </Button>

}