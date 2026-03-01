"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="py-6 px-6 md:px-12 lg:px-24 bg-[#FFFBF8]/80 backdrop-blur-md sticky top-0 z-50 border-b border-[#EDE5E0]">
      <nav className="flex items-center justify-between max-w-6xl mx-auto">
        <Link href="/" className="flex flex-col group">
          <span className="text-xl md:text-2xl font-medium tracking-wide group-hover:text-[#C17B6E] transition-colors" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
            Naomi Garrett
          </span>
          <span className="text-xs tracking-wider text-[#7D7D7D] mt-0.5">
            Violinist &bull; Soprano &bull; Educator
          </span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 hover:bg-[#F5EBE6] rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop navigation */}
        <ul className="hidden md:flex items-center space-x-10 text-sm">
          <li>
            <Link href="/about" className="nav-link">About</Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="nav-link flex items-center gap-1">
              Wedding & Event Music
              <svg className={`w-3 h-3 ml-1 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <ul
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${
                servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="py-4 px-6 bg-[#FFFBF8] border border-[#EDE5E0] rounded-xl shadow-lg min-w-[180px]">
                <li className="py-2">
                  <Link href="/services/ensembles" className="block text-[#7D7D7D] hover:text-[#C17B6E] transition-colors">
                    Ensembles
                  </Link>
                </li>
                <li className="py-2">
                  <Link href="/services/solo-violin" className="block text-[#7D7D7D] hover:text-[#C17B6E] transition-colors">
                    Solo Violin
                  </Link>
                </li>
              </div>
            </ul>
          </li>
          <li>
            <Link href="/samples" className="nav-link">Samples</Link>
          </li>
          <li>
            <Link href="/lessons" className="nav-link">Lessons</Link>
          </li>
          <li>
            <Link href="/contact" className="btn !py-3 !px-6 !text-xs">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Mobile navigation */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"}`}>
        <div className="pt-6 border-t border-[#EDE5E0]">
          <ul className="flex flex-col space-y-4 text-base">
            <li>
              <Link href="/about" onClick={() => setIsOpen(false)} className="block py-2 hover:text-[#C17B6E] transition-colors">
                About
              </Link>
            </li>
            <li>
              <span className="block text-[#7D7D7D] text-xs uppercase tracking-wider mb-2">Wedding & Event Music</span>
              <ul className="pl-4 space-y-2">
                <li>
                  <Link href="/services/ensembles" onClick={() => setIsOpen(false)} className="block py-1 hover:text-[#C17B6E] transition-colors">
                    Ensembles
                  </Link>
                </li>
                <li>
                  <Link href="/services/solo-violin" onClick={() => setIsOpen(false)} className="block py-1 hover:text-[#C17B6E] transition-colors">
                    Solo Violin
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/samples" onClick={() => setIsOpen(false)} className="block py-2 hover:text-[#C17B6E] transition-colors">
                Samples
              </Link>
            </li>
            <li>
              <Link href="/lessons" onClick={() => setIsOpen(false)} className="block py-2 hover:text-[#C17B6E] transition-colors">
                Lessons
              </Link>
            </li>
            <li className="pt-2">
              <Link href="/contact" onClick={() => setIsOpen(false)} className="btn inline-block">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
