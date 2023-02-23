"use client"
import { useState } from "react";

import { sendPasswordResetEmail } from "firebase/auth";
import { FirebaseError } from "firebase/app";

import { auth } from "@/firebase"
import Input from "./Input";
import Button from "./Button";


export default function ForgotPasswordForm() {
    const [errMsg, setErrMsg] = useState('')

    const getErrMsg = (err: FirebaseError) => {
        switch (err.code) {
            case 'auth/invalid-email':
                return 'Email entered is invalid.'
            case 'auth/user-not-found':
                return 'Email entered was not found.'
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
            const response = await sendPasswordResetEmail(auth, formElements.username.value);
            console.log(response)
        } catch (error: any) {
            if (error instanceof FirebaseError) {
                console.log(error.code)
                setErrMsg(getErrMsg(error));
            }
        }
    }

    return <form className="w-full" onSubmit={handleSubmit}>
        {errMsg && <div className="text-red-500 text-sm mb-3">{errMsg}</div>}
        <div className="mb-3">
            <Input type="text" name="username" placeholder="Email" />
        </div>
        <Button className="block bg-gold text-black w-full" type="submit">Send recover email.</Button>
    </form>
    

}