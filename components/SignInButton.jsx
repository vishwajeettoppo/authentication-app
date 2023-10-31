'use client';

import { useSession, signIn, signOut } from "next-auth/react"

export default function SignInButton() {

  const { data: session } = useSession()
  
  if(session){
    console.log('authenticated')
  }else{
    console.log('unauthenticated')
  }
  
  if (session && session.user) {
    return (
      <div className="flex flex-col items-center ">
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()} className=" bg-red-400 p-2">Sign out</button>
      </div>
    )
  } 
  return (
    <div className="flex flex-col items-center ">
      Not signed in <br />
      <button onClick={() => signIn()} className=" bg-violet-400 p-2">Sign in</button>
    </div>
  )
}