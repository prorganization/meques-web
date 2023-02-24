import Image from "next/image";
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar";
import downloadGameFlag from "../../../public/download-game-flag.png"
import SocialMedia from "@/components/SocialMedia";

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {

    return <>
        <div className="w-screen h-screen">
            <Header className="absolute" />
            <Sidebar />
            <Image src={downloadGameFlag} alt="Download game." className="absolute bottom-2 right-0 z-10" />
            {children}
            <SocialMedia />
        </div>
    </>
}