

'use client'
import { redirect } from "next/navigation";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "@/firebase";
import SignInForm from "@/components/SignInForm";
import ButtonSignInWithGoogle from "@/components/ButtonSignInWithGoogle";
import ButtonConnectWallet from "@/components/ButtonConnectWallet";


export default function Page() {
    const [user, loading] = useAuthState(auth);

    if (user) {
        redirect('/dashboard')
    }


    return (<>
        <div className="mt-8 mx-auto relative w-full max-w-2xl rounded overflow-hidden bg-gradient-to-br from-gold via-gold/0 to-gold/80 p-[1px] shadow-auth-container">
            <div className="w-full rounded bg-shadow-black px-6 py-6 flex flex-col items-center">
                <h1 className="mb-6 text-gold text-center text-xl font-medium">
                    Sign In / Connect
                </h1>
                {loading ?

                    <div className="text-gold h-48 flex items-center">Loading...</div> :

                    <div className="grid w-[310px] gap-3">
                        <SignInForm />
                        <Link href="/forgot-password" className="text-sm text-gold block ml-auto">Forgot password</Link>
                        <div className="w-full flex gap-5 items-center">
                            <hr className="border-0 h-px flex-1 bg-gradient-to-r from-black/0 to-white/30"/>
                            <span className="text-sm text-shadow-white/50 font-medium">Or sign in with</span>
                            <hr className="border-0 h-px flex-1 bg-gradient-to-r from-white/30 to-black/0"/>
                        </div>
                        <ButtonConnectWallet />
                        <ButtonSignInWithGoogle />
                    </div>
                }

            </div>
        </div>
    </>
    )
}

// bg-gradient-to-br from-purple-200 via-purple-400 to-purple-800
