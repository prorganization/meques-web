"use client"

import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import logo from "../../public/logo.svg"
import ButtonCreateAccount from "./ButtonCreateAccount";
import ButtonSignIn from "./ButtonAuthentication";

export default function Header() {
    const segment = useSelectedLayoutSegment();

    return <header className="absolute z-10 w-full h-header flex justify-between items-center px-10 bg-shadow-black/70">
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