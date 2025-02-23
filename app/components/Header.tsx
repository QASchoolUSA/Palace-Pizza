"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="relative w-full bg-newblack text-white px-6 shadow-md z-50">
      <div className="flex items-center justify-between h-36 md:h-32">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white focus:outline-none p-3"
        >
          <Menu size={32} />
        </button>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-6 flex-1">
          <Link href="/menu" className="text-white">Menu</Link>
          <Link href="/catering" className="text-white">Catering</Link>
          <Link href="/about-us" className="text-white">About Us</Link>
          <Link href="/contact-us" className="text-white">Contact Us</Link>
        </nav>

        {/* Center - Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <img
              src="/With Tomato-Gold.png"
              alt="Logo"
              className="h-24 md:h-28"
            />
          </Link>
        </div>

        {/* Order Online Button */}
        <div className="hidden md:flex flex-1 justify-end">
          <Link href="https://orders.cake.net/09000339">
            <button className="bg-black text-white px-4 py-2 rounded">
              Order Online
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        ref={menuRef}
        className={`absolute left-0 w-full bg-newgray text-black shadow-lg z-40 transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
        style={{ top: '100%' }}
      >
        <ul className="flex flex-col items-center py-4">
          <li className="py-2">
            <Link href="/menu" className="text-black" onClick={() => setIsMobileMenuOpen(false)}>Menu</Link>
          </li>
          <li className="py-2">
            <Link href="/catering" className="text-black" onClick={() => setIsMobileMenuOpen(false)}>Catering</Link>
          </li>
          <li className="py-2">
            <Link href="/about-us" className="text-black" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          </li>
          <li className="py-2">
            <Link href="/contact-us" className="text-black" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
          </li>
          <li className="py-2">
            <Link href="https://orders.cake.net/09000339">
              <button className="bg-black text-white px-4 py-2 rounded" onClick={() => setIsMobileMenuOpen(false)}>
                Order Online
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}