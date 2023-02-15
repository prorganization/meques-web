

'use client'
import SignInForm from "@/components/SignInForm";
import ButtonSignInWithGoogle from "@/components/ButtonSignInWithGoogle";
import { isMacOs } from "react-device-detect";

export default function Page() {
    return (<>
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <h1 className="mb-6 font-extralight text-2xl text-">
                SIGN IN
            </h1>
            <div className="w-full max-w-sm bg-white shadow-md px-8 pt-8 pb-6 mb-12">
                <SignInForm />
            </div>
            <div className="w-full max-w-sm bg-white shadow-md px-8 pt-8 pb-6 mb-8">
                <div className="text-black-500 text-xs mb-6">OR TRY ANOTHER METHODS</div>

                <div className="flex flex-col items-center justify-center">
                    <ButtonSignInWithGoogle />
                    <div className="mt-4 uppercase font-bold text-sm cursor-not-allowed">
                        {isMacOs ? "Sign in with apple" : "nu "}
                    </div>
                </div>
            </div>
            <p className="text-center text-gray-500 text-xs">
                &copy; 2023. All rights reserved.
            </p>
        </div>
    </>
    )
}
