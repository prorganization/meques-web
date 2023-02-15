"use client"
import { auth } from "@/firebase"
import { useAuthState } from "react-firebase-hooks/auth"


export default function Page() {
    const [user] = useAuthState(auth)
    return (<>
        <div>
            {
                user && <h1 className="font-extralight text-2xl text-">
                    Hello, {user.displayName ?? user.email}
                </h1>
            }
        </div>
        <h1 className="font-thin uppercase text-3xl">dashboard</h1>
    </>
    )
}
