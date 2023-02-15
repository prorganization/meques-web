import Header from "@/components/Header"

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {

    return <>
        <div className="w-screen h-screen bg-homepage bg-no-repeat bg-cover">
            <Header />
            {children}
        </div>
    </>
}