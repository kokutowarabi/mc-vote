'use client'

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function MCSignInButton() {
    return (
        <Button
            className="px-4 rounded-md text-white bg-[#E07594] hover:bg-[#c56681] cursor-pointer"
            onClick={() => signIn('line', { callbackUrl: '/' })}
        >
            サインインする
        </Button>
    )
}