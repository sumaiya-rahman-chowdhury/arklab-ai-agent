"use client";

import { useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setUser, clearUser } from "@/redux/features/slices/userSlice";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Navbar() {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    if (session) {
      dispatch(
        setUser({
          name: session.user?.name || "",
          email: session.user?.email || "",
          image: session.user?.image || "",
        })
      );
    }
  }, [session, dispatch]);

  return (
    <nav className="w-full max-w-[1400px] mx-auto border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          ArkLab Ai
        </Link>

        <div className="flex items-center gap-4">
          {session ? (
            <>
              <Image
                width={32}
                height={32}
                src={session.user?.image ?? ""}
                alt="profile"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm">{session.user?.name}</span>
              <Button
                onClick={() => {
                  signOut();
                  dispatch(clearUser());
                }}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                Logout
              </Button>
            </>
          ) : (
            <Button
              onClick={() => signIn("google")}
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition"
            >
              Login with Google
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}
