'use client';

import { FaGithub } from "react-icons/fa";
import { login } from "@/lib/auth";

export default function SignInButton() {
  return (
    <div className="flex gap-2 ">
      <p className="text-white text-3xl">You are not signed In</p>
      <div className="rounded m-2 flex bg-white mt-[-4px] py-1">
        <button onClick={() => login()} className="text-lg  text-black font-semibold px-2 cursor-pointer hover:bg-gray-200 transition-colors ease-in-out">Sign In </button>
        <FaGithub className="text-black" size={45} />
      </div>
    </div>
  )
}