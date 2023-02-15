"use client"
import { auth } from "@/firebase"
import { redirect } from "next/navigation"
import { useAuthState } from "react-firebase-hooks/auth"

export default async function PrivatePage(Component: any) {
  const [user, loading] = useAuthState(auth)

  if (loading) {
    return <div>Loading auth...</div>
  }

  if (!user) {
    return redirect("/signin")
  }

  return <><Component user={user} /></>
}

