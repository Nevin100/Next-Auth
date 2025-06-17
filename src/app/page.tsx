'use server';

import { auth } from "@/auth";
import SignInButton from "@/components/SignInButton";
import SignOutButton from "@/components/SignOutButton";

export default async function Home() {
  const session = await auth();
  return (
    <>
      {session?.user? (
        <div className="items-center justify-center h-screen flex flex-col gap-5 ">
          <h1 className="text-white text-2xl font-bold">Hey { session?.user.name}, Good to have you !</h1>
          <SignOutButton />
        </div>) : (
          <div className="flex items-center justify-center h-screen">
      <SignInButton/>
    </div>
        )
      }
    
    </>
    
  )
}