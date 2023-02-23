

'use client'
import { redirect } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "@/firebase";
import ForgotPasswordForm from "@/components/ForgotPasswordForm";


export default function Page() {
    const [user, loading] = useAuthState(auth);

    if (user) {
        redirect('/dashboard')
    }


    return (<>
        <div className="mt-8 mx-auto relative w-full max-w-2xl rounded overflow-hidden bg-gradient-to-br from-gold via-gold/0 to-gold/80 p-[1px] shadow-auth-container">
            <div className="w-full rounded bg-shadow-black px-6 py-6 flex flex-col items-center">
                <h1 className="mb-6 text-gold text-center text-xl font-medium">
                    Recover your account
                </h1>
                {loading ?

                    <div className="text-gold h-48 flex items-center">Loading...</div> :

                    <div className="grid w-[310px] gap-3">
                        <ForgotPasswordForm />
                    </div>
                }

            </div>
        </div>
    </>
    )
}

// bg-gradient-to-br from-purple-200 via-purple-400 to-purple-800
