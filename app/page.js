'use client'

import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {

  const {data:session}=useSession();

  return (
    <main className="">
      Home Page
      {session?User({session}):Guest()}
    </main>
  )
}

// Guestf
function Guest() {

  const router=useRouter();

  function handleLogin(){
    router.push('/login')
  }

  return(
    <div>
      <h1>Guest HomePage</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

function User({session}) {

  const router=useRouter();

  function handleSignout(){
    signOut()
    router.push('/login')
  }
  return(
    <div className="flex flex-col mx-auto">
      <h3>Authorize User Homepage</h3>
      <div>
        <p>{session.user.name}</p>
        <p>{session.user.email}</p>
      </div>
      <Link href={'/login'}>
        <button onClick={handleSignout}>Sign Out</button>
      </Link>
      Profile Page
      
    </div>
  )
}