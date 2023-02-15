"use client"
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth"

import { auth } from "@/firebase"
import { useState } from "react";
import { FirebaseError } from "firebase/app";


export default function SignInForm() {
    const [user, loading] = useAuthState(auth);
    const [errMsg, setErrMsg] = useState('')

    if (loading) {
        return <div>Loading signin form...</div>
    }

    if (user) {
        redirect('/dashboard')
    }

    const getErrMsg = (code: any) => {
        switch (code) {
            case 'auth/user-not-found':
                console.log('asdasda')
                return 'User not found.'
            default:
                return 'Check Firebase error!'
        }

    }


    async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault()
        const form = event.currentTarget
        const formElements = form.elements as typeof form.elements & {
            username: { value: string }
            password: { value: string }
        }

        try {
            const response = await signInWithEmailAndPassword(auth, formElements.username.value, formElements.password.value);
            console.log(response)
            // router.push("/dashboard")
        } catch (error) {
            if (error instanceof FirebaseError){
                setErrMsg(getErrMsg(error.code));
            }
        }
    }

    return <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <p className="text-red-500 text-xs italic">{errMsg}</p>
            <label
                className="block text-gray-700 text-xs mb-1"
                htmlFor="username"
            >
                Username
            </label>
            <input
                className="shadow-sm appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                name="username"
                type="text"
                placeholder="Username"
            />
        </div>
        <div className="mb-4">
            <label
                className="block text-gray-700 text-xs mb-1"
                htmlFor="password"
            >
                Password
            </label>
            <input
                className="shadow-sm appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                type="password"
                placeholder="•••••••••••"
            />
            {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
        </div>
        <div className="flex items-center justify-between mb-6">
            <button
                className="hover:bg-blue-700 bg-blue-500 text-white font-bold uppercase text-sm py-2 px-4  focus:outline-none focus:shadow-outline"
                type="submit"
            >
                Login
            </button>
            <Link
                className="inline-block align-baseline text-base text-blue-600 hover:text-blue -800"
                href="/"
            >
                Forgot Password?
            </Link>
        </div>

        <div className="flex items-center">
            <p className="font-light text-center text-black mr-1"> Don't have an account? </p>
            <Link
                className="inline-block underline align-baseline font-light text-gray-500 hover:text-gray-800"
                href="/register"
            >
                Register Here
            </Link>
        </div>
    </form>

}