"use client"
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth"

import { auth } from "@/firebase"


export default function ButtonConnectWallet() {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <div>...</div>
    }

    return user && 'connect wallet'

}