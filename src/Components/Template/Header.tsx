"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import Button from "../Info/Button";

const Navbar = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Produk", href: "/produk" },
    { name: "Kritik & Saran", href: "/saran" },
    { name: "Tentang Kami", href: "/aboutUs" },
  ];
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={`z-10 ${scrolled ? "bg-white" : ""}`}>
      <nav className="flex items-center justify-between p-2 md:p-6 py-3 sm:p-8">
        <div className="p-2">
          <h1 className="text-2xl md:text-2xl font-black text-primary">
            Keripik Papaya
          </h1>
        </div>
        <div className="flex items-center space-x-4 md:space-x-10">
          <div className="hidden md:flex">
            <ul className="flex space-x-4 md:space-x-10">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-sm md:text-base text-secondary"
                    aria-label={item.name}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center search-container">
            <Link href="/auth/login">
            <Button name="Gabung" />
            </Link>
          </div>
          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="text-secondary" />
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div ref={menuRef} className="md:hidden shadow-md z-10 p-4 bg-white">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">Menu</h2>
          </div>
          <ul className="flex flex-col space-y-6 mt-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-[18px] font-semibold text-secondary bg-bgproduksekunder flex justify-center p-2 rounded-xl border-2 border-b-[7px]                  border-secondary"
                  aria-label={item.name}
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <hr />
          </ul>
          <button onClick={() => setIsMenuOpen(false)} className="flex justify-center items-center mx-auto mt-4 bg-primary p-1 rounded-full border-2 border-secondary">
            <X className="text-white" />
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
