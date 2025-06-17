'use client';

import { logout } from "@/lib/auth";
import { FaGithub } from "react-icons/fa";

export default function SignOutButton() {
  return (
    <div className="flex gap-2 ">
          <p className="text-white text-3xl">You are signed In</p>
          <div className="rounded m-2 flex bg-white mt-[-4px] py-1">
            <button onClick={() => logout()} className="text-lg  text-black font-semibold px-2 cursor-pointer hover:bg-gray-200 transition-colors ease-in-out">Sign Out </button>
            <FaGithub className="text-black" size={45} />
          </div>
        </div>
  );
}