"use client"
import { HTMLAttributes } from "react";
import clsx from "clsx";
import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import logo from "../../public/logo.svg"
import ButtonCreateAccount from "./ButtonCreateAccount";
import ButtonSignIn from "./ButtonAuthentication";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase";

interface HeaderProps extends HTMLAttributes<HTMLElement> { }

export default function Header({ className }: HeaderProps) {
    const segment = useSelectedLayoutSegment();
    const [user] = useAuthState(auth);

    return <header className={clsx("w-full h-header flex justify-between items-center px-10 bg-shadow-black/70", className)}>
        <div>
            <Link href="/">
                <Image unoptimized src={logo} alt="Meques Logo" />
            </Link>

        </div>
        {!user && <div className="flex gap-3">
            {segment !== 'signin' && <ButtonSignIn />}
            {segment !== 'register' && <ButtonCreateAccount />}
        </div>
        }
    </header>
}