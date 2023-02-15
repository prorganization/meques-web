"use client"

import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import logo from "../../public/logo.svg"
import ButtonCreateAccount from "./ButtonCreateAccount";
import ButtonSignIn from "./ButtonAuthentication";

export default function Header() {
    const segment = useSelectedLayoutSegment();

    return <header className="flex justify-between items-center h-16 px-10 bg-gray-900/30">
        <div>
            <Link href="/">
                <Image unoptimized src={logo} alt="Meques Logo" />
            </Link>
            
        </div>
        <div className="flex gap-3">
            {segment === 'register' && <ButtonSignIn />}
            {segment === 'signin' && <ButtonCreateAccount />}
        </div>
    </header>
}