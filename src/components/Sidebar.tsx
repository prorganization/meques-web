"use client"

import { useSelectedLayoutSegment } from "next/navigation";

import Link from "next/link";


export default function Sidebar() {
    const segment = useSelectedLayoutSegment();

    return <nav className="flex flex-col">

        <Link style={segment === 'dashboard' ? {textDecoration: 'underline'} : {}} className="py-4 pl-2 uppercase text-gray-800 font-light text-lg hover:text-black hover:bg-gray-200" href="/dashboard">Dashboard</Link>
        <Link style={segment === 'settings' ? {textDecoration: 'underline'} : {}} className="py-4 pl-2 uppercase text-gray-800 font-light text-lg hover:text-black hover:bg-gray-200"  href="/settings">Settings</Link>

    </nav>

}