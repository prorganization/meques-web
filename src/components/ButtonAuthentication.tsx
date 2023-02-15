"use client"
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth"
import { UserIcon } from "@heroicons/react/20/solid"


import { auth } from "@/firebase"


export default function ButtonAuthentication() {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <div>...</div>
    }

    return user ? <div className="flex items-center gap-2">
        <Link href="/dashboard" className="hover:bg-white hover:shadow bg-white text-blue-600 font-bold uppercase text-sm focus:outline-none focus:shadow-outline" type="submit">
            <UserIcon className="w-8 h-8"/>
        </Link>
        <button
            className="hover:bg-white hover:shadow bg-white text-red-600 font-bold uppercase text-sm py-2 px-4  focus:outline-none focus:shadow-outline"
            onClick={() => auth.signOut()}
        >
            Sign Out
        </button>
    </div> :
        <Link href="/signin" className="hover:bg-white hover:shadow bg-white text-blue-600 font-bold uppercase text-sm py-2 px-4  focus:outline-none focus:shadow-outline" type="submit">
            Sign In
        </Link>

}