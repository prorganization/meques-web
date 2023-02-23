

'use client'
import { redirect } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "@/firebase";
import RegisterForm from "@/components/RegisterForm";
import ButtonSignInWithGoogle from "@/components/ButtonSignInWithGoogle";
// import { useState } from "react";

export default function Page() {

    const [user, loading] = useAuthState(auth);
    

    if (user) {
        redirect('/')
    }

    // const handleOnAccountCreated = () => {
    //     console.log('go to account created screen')
    // }

    return (

        <div className="mt-8 mx-auto relative w-full max-w-2xl rounded overflow-hidden bg-gradient-to-br from-gold via-gold/0 to-gold/80 p-[1px] shadow-auth-container">
            <div className="w-full rounded bg-shadow-black px-6 py-6 flex flex-col items-center">
                <h1 className="mb-6 text-gold text-center text-xl font-medium">
                    Create Game Account
                </h1>
                { loading ?

                    <div className="text-gold h-48 flex items-center">Loading...</div> :

                    <div className="grid w-[310px] gap-3">
                        <RegisterForm />
                        <div className="w-full flex gap-5 items-center">
                            <hr className="border-0 h-px flex-1 bg-gradient-to-r from-black/0 to-white/30" />
                            <span className="text-sm text-shadow-white/50 font-medium">Or create with</span>
                            <hr className="border-0 h-px flex-1 bg-gradient-to-r from-white/30 to-black/0" />
                        </div>
                        <ButtonSignInWithGoogle />
                    </div>
                }

            </div>
        </div>
    );
}
