"use client"
import { useState } from "react";
import { redirect } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";

import { auth } from "@/firebase"
import Input from "./Input";
import Button from "./Button";


export default function SignInForm() {
    const [errMsg, setErrMsg] = useState('')

    const getErrMsg = (code: any) => {
        switch (code) {
            case 'auth/invalid-email':
                return 'Email entered is invalid.'
            case 'auth/user-not-found':
                return 'User not found.'
            default:
                return 'Internal error'
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
            await signInWithEmailAndPassword(auth, formElements.username.value, formElements.password.value);
            redirect("/dashboard")
        } catch (error) {
            if (error instanceof FirebaseError) {
                setErrMsg(getErrMsg(error.code));
            }
        }
    }

    return <form className="w-full" onSubmit={handleSubmit}>
        {errMsg && <div className="text-red-500 text-sm mb-3">{errMsg}</div>}
        <div className="mb-3">
            <Input type="text" name="username" placeholder="Username" />
        </div>
        <div className="mb-3">
            <Input type="password" name="password" placeholder="•••••••••••" />
            {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
        </div>
        <Button className="block bg-gold text-black w-full" type="submit">Sign In</Button>
    </form>

}