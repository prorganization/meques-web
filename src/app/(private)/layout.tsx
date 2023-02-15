
"use client"
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { redirect } from "next/navigation";
import ButtonAuthentication from "@/components/ButtonAuthentication";

import { auth } from "@/firebase"
import Sidebar from "@/components/Sidebar";

export default function Layout({
    children,
}: {
    children: React.ReactNode,
}) {

    const [user, loading] = useAuthState(auth)

    if (loading) {
        return <div>Loading auth...</div>
    }

    if (!user) {
        return redirect("/signin")
    }

    return <>
        <div className="w-screen h-screen">

            <header className="shadow flex justify-between h-24 px-6 items-center">

                <Link href="/">
                    <h1 className="font-extralight text-2xl text-">
                        MEQUES
                    </h1>
                </Link>
                <ButtonAuthentication />
            </header>
            <main className="flex h-[calc(100%_-_6rem)]">
                <aside className="shadow w-72 pl-4 py-8">
                    <Sidebar />
                </aside>
                <section className="p-6">
                    {children}
                </section>
            </main>
        </div>
    </>
};