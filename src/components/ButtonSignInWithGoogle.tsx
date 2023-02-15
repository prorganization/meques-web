"use client"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"


import { auth } from "@/firebase"
import { useRouter } from "next/navigation";


export default function ButtonSignInWithGoogle() {
    const router = useRouter();

    const provider = new GoogleAuthProvider();

    async function handleSignWithGoogle(event: React.SyntheticEvent<HTMLButtonElement>) {
        event.preventDefault();
        try {
            const response = await signInWithPopup(auth, provider);
            console.log(response)
            router.push("/dashboard")
        } catch (error) {
            alert(error);
        }
    }

    return <button className="hover:bg-gray-100 bg-gray-50 border-gray-50 border-solid border text-blue-600 font-bold uppercase text-sm py-2 px-4  focus:outline-none focus:shadow-outline"
        onClick={handleSignWithGoogle}>
        Sign In With Google
    </button>

}