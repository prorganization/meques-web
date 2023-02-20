"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"


import { auth } from "@/firebase"
import Button from "./Button";
import googlePlay from "../../public/google-play.png"


export default function ButtonSignInWithGoogle() {
    const router = useRouter();

    const provider = new GoogleAuthProvider();

    async function handleSignWithGoogle(event: React.SyntheticEvent<HTMLButtonElement>) {
        event.preventDefault();
        try {
            await signInWithPopup(auth, provider);
            router.push("/dashboard")
        } catch (error) {
            alert(error);
        }
    }

    return <Button className="h-[32px]" variant="secondary" icon={<Image width={22} height={22} src={googlePlay} alt="Google Play"/>} onClick={handleSignWithGoogle}>
        Google Play
    </Button>

}