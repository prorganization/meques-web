

'use client'
import SignInForm from "@/components/SignInForm";
import ButtonSignInWithGoogle from "@/components/ButtonSignInWithGoogle";
import { isMacOs } from "react-device-detect";
import Input from "@/components/Input";

export default function Page() {
    return (<>
        <div className="relative w-full max-w-2xl rounded overflow-hidden bg-gradient-to-br from-gold via-gold/0 to-gold/80 p-[1px] shadow-auth-container">
            <div className="w-full rounded bg-shadow-black flex flex-col justify-center items-center">
                <h1 className="mb-6 text-gold text-center text-xl font-medium">
                    Sign In / Connect
                </h1>
                <SignInForm />

                <div className="text-black-500 text-xs mb-6">OR TRY ANOTHER METHODS</div>

                <div className="flex flex-col items-center justify-center">
                    <ButtonSignInWithGoogle />
                </div>
            </div>
        </div>
    </>
    )
}

// bg-gradient-to-br from-purple-200 via-purple-400 to-purple-800
