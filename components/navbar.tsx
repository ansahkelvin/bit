"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-background">
      <div className="mx-8 flex h-16  items-center justify-between px-8 sm:px-6">
        {/* Left side: Logo + Navigation Links */}
        <div className="flex items-center gap-6 lg:gap-10">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Mybitstore"
              width={120}
              height={32}
              className="h-7 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-foreground/80 transition-colors">
              Buy Crypto
              <ChevronDown className="h-4 w-4" />
            </button>
            <Link
              href="/p2p-trading"
              className="text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
            >
              P2P Trading
            </Link>
            <Link
              href="/earn"
              className="text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
            >
              Earn
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
            >
              Blog
            </Link>
          </div>
        </div>

        {/* Right side: Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
          >
            Login
          </Link>
          <Link
            href="/get-started"
            className="rounded-md bg-[#5B6CE0] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#5B6CE0]/90 transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-foreground"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col space-y-4 px-4 py-6">
            <button className="flex items-center gap-1 text-sm font-medium text-foreground text-left">
              Buy Crypto
              <ChevronDown className="h-4 w-4" />
            </button>
            <Link
              href="/p2p-trading"
              className="text-sm font-medium text-foreground"
            >
              P2P Trading
            </Link>
            <Link href="/earn" className="text-sm font-medium text-foreground">
              Earn
            </Link>
            <Link href="/blog" className="text-sm font-medium text-foreground">
              Blog
            </Link>
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <Link
                href="/login"
                className="text-sm font-medium text-foreground"
              >
                Login
              </Link>
              <Link
                href="/get-started"
                className="rounded-md bg-[#5B6CE0] px-5 py-2.5 text-sm font-medium text-white text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
