import Image from "next/image";
import Header from "@/components/Header"
import authBg from "../../../public/auth-bg.png";

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    // todo - look for a new export for bg img
    return <>
        <div className="w-screen h-screen bg-main-purple-darker">

            <Image priority src={authBg} alt="Auth bg." className="absolute bottom-0 left-0 top-0 z-0 pointer-events-none"/>
            <Header />
            <div>
                {children}
            </div>
        </div>
    </>
}