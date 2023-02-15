import ButtonAuthentication from "@/components/ButtonAuthentication"
import Image from "next/image"
import Link from "next/link"

import logo from "../../../public/logo.png"

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {

    return <>
        <div className="w-screen h-screen bg-homepage bg-no-repeat bg-cover">
            <header className="flex justify-between items-end h-14 px-10 pb-2 bg-gray-900/30">
                <div>
                    <Link href="/">
                        <Image unoptimized src={logo} alt="Meques Logo" />
                    </Link>
                    {/* <Searchbar /> */}
                </div>
                <div>
                    <ButtonAuthentication />
                </div>
            </header>
            {children}
        </div>
    </>
}