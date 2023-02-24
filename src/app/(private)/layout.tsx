
"use client"
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { redirect } from "next/navigation";
import ButtonAuthentication from "@/components/ButtonAuthentication";
import Header from "@/components/Header";

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
        <div className="w-screen h-screen bg-shadow-black">
            <Header />
            <Sidebar />
            {children}
        </div>
    </>
};