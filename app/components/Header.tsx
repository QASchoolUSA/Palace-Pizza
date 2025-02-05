"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import clsx from "clsx";
import OrderOnlineButton from "./OrderOnlineButton";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="bg-black text-white px-6 py-4 shadow-md relative z-50">
      {/* Desktop Header */}
      <div className="hidden md:grid grid-cols-3 items-center">
        {/* Left - Navigation Links */}
        <nav className="flex space-x-6">
          <Link href="/menu" className="text-lg font-bold hover:text-gray-400">
            Menu
          </Link>
          <Link href="/catering" className="text-lg font-bold hover:text-gray-400">
            Catering
          </Link>
          <Link href="/about-us" className="text-lg font-bold hover:text-gray-400">
            About
          </Link>
          <Link href="/contact-us" className="text-lg font-bold hover:text-gray-400">
            Contact
          </Link>
        </nav>

        {/* Center - Logo */}
        <div className="flex justify-center">
          <Link href="/">
            <img src="/logo-palace-pizza.png" alt="Logo" className="h-14" />
          </Link>
        </div>
        <OrderOnlineButton />
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between">
        {/* Mobile Menu Button */}
        <div>
          <button
            ref={buttonRef}
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-gray-300"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Center - Logo */}
        <div className="flex-1 flex justify-center">
          <Link href="/">
            <img src="/logo-palace-pizza.png" alt="Logo" className="h-14" />
          </Link>
        </div>

        {/* Placeholder to balance the layout */}
        <div className="w-6" />
      </div>

      {/* Mobile Menu - Animated Dropdown */}
      <div
        ref={menuRef}
        className={clsx(
          "absolute top-20 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center space-y-4 text-black z-50 overflow-hidden transition-all duration-500",
          isOpen ? "max-h-[400px] py-4 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <Link
          href="/menu"
          className="text-lg font-medium hover:text-gray-600"
          onClick={() => setIsOpen(false)}
        >
          Menu
        </Link>
        <Link
          href="/catering"
          className="text-lg font-medium hover:text-gray-600"
          onClick={() => setIsOpen(false)}
        >
          Catering
        </Link>
        <Link
          href="/about-us"
          className="text-lg font-medium hover:text-gray-600"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          href="/contact-us"
          className="text-lg font-medium hover:text-gray-600"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
        <OrderOnlineButton options={{ onClick: () => setIsOpen(false) }} />      </div>
    </header>
  );
}