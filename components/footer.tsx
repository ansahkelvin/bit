import Image from "next/image";
import Link from "next/link";
import { Facebook, Youtube, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#212741] pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Social Links */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="Mybitstore"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
            </Link>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
              >
                <Facebook className="w-5 h-5 text-foreground" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
              >
                <Youtube className="w-5 h-5 text-foreground" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
              >
                <Twitter className="w-5 h-5 text-foreground" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
              >
                <Instagram className="w-5 h-5 text-foreground" />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/user-teams"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  User Teams
                </Link>
              </li>
              <li>
                <Link
                  href="/reward-terms"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Reward Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Product
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/buy-sell-bitcoin"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Buy & Sell Bitcoin
                </Link>
              </li>
              <li>
                <Link
                  href="/buy-sell-usdt"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Buy & Sell USDT
                </Link>
              </li>
              <li>
                <Link
                  href="/otc-trade"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  OTC Trade
                </Link>
              </li>
              <li>
                <Link
                  href="/become-affiliate"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Become Affiliate
                </Link>
              </li>
              <li>
                <Link
                  href="/exchange-gift-cards"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Exchange Gift Cards
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Help
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/support"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/fees-rates"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Fees & Rates
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-[#212741] mb-8" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Mybitstore, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
