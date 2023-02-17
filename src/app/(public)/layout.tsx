import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar";

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {

    return <>
        <div className="w-screen h-screen flex-1 flex flex-col bg-homepage bg-no-repeat bg-cover">
            <Header />
            <div className="flex h-full">
                <Sidebar />
                {children}
            </div>
        </div>
    </>
}