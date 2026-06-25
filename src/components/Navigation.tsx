"use client";

import Link from "next/link";
import { Menu, X, Search, BookOpen } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Start Here", href: "/start-here" },
    { label: "Operating System", href: "/operating-system" },
    { label: "Frameworks", href: "/frameworks" },
    { label: "Portfolio & Value", href: "/portfolio" },
    { label: "Governance", href: "/governance" },
    { label: "Toolkit", href: "/toolkit" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-indigo-600">
            <BookOpen className="w-6 h-6" />
            <span className="hidden sm:inline">Manufacturing AI OS</span>
            <span className="sm:hidden">AI OS</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <button
              className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-slate-600" />
            </button>

            <Link href="/toolkit/discovery-workshop" className="hidden sm:inline-block btn-primary text-sm">
              Discovery Workshop
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/toolkit/discovery-workshop"
                className="btn-primary block text-center text-sm"
                onClick={() => setIsOpen(false)}
              >
                Discovery Workshop
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
