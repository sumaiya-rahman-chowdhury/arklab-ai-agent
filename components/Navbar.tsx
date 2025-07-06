"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full max-w-[1400px] mx-auto border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          ArkLab Ai
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
