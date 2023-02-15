"use client"
import { redirect, useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth"

import { auth } from "@/firebase"


export default function RegisterForm() {
    const router = useRouter();
    const [user, loading] = useAuthState(auth);
    
    if (loading) {
        return <div>Loading register form...</div>
    }

    if (user) {
        redirect('/dashboard')
    }


    async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault()

        const form = event.currentTarget
        const formElements = form.elements as typeof form.elements & {
            username: { value: string }
            password: { value: string }
        }

        try {
            const response = await createUserWithEmailAndPassword(auth, formElements.username.value, formElements.password.value);
            console.log(response)
            router.push("/dashboard")
        } catch (error: any) {
            console.log(error.message)
            alert(error);
        }
    }

    return <form onSubmit={handleSubmit}>
        <div className="mb-4">
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
        <div className="flex items-center justify-center mb-6">
            <button
                className="hover:bg-blue-700 bg-blue-500 text-white font-bold uppercase text-sm py-2 px-4  focus:outline-none focus:shadow-outline"
                type="submit"
            >
                Register
            </button>
        </div>

    </form>

}