"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import Button from "../Info/Button";
import Image from "next/image";

const Navbar = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Produk", href: "/produk" },
    { name: "Kritik & Saran", href: "/saran" },
    { name: "Tentang Kami", href: "/about-us" },
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
    <header className={`${scrolled ? "bg-white sticky top-0 z-10 " : ""}`}>
      <nav className="flex items-center justify-between  md:p-2 py-2 sm:p-2 ">
        <Link href={"/"} className="p-2 lg:px-10 cursor-pointer">
          <Image
            alt="Logo"
            src={"/image/LogoKeripik.png"}
            width={200}
            height={100}
            className="text-3xl md:text-4xl font-black text-primary"
          />
        </Link>
        <div className="flex items-center space-x-4 md:space-x-10 lg:px-10">
          <div className="hidden lg:flex">
            <ul className="flex space-x-4 md:space-x-10">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-md md:text-base text-secondary hover:text-primary hover:underline trasnform duration-500 "
                    aria-label={item.name}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex items-center search-container">
            <Link href="/produk">
              <Button name="Pesan Sekarang" />
            </Link>
          </div>
          {/* Hamburger Icon */}
          <div className="lg:hidden px-6 w-20 ">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="text-secondary text-[24px] hover-bg-red-500" />
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="relative lg:hidden shadow-md p-8 bg-white rounded-b-3xl transform translate duration-500"
        >
          <ul className="flex flex-col space-y-6 mt-4">
            {navItems.map((item, index) => (
              <li key={index} onClick={() => setIsMenuOpen(false)}>
                <Link
                  href={item.href}
                  className="text-[18px] font-semibold text-secondary bg-bgproduksekunder flex justify-center p-2 rounded-xl border-2 border-b-[7px] border-secondary"
                  aria-label={item.name}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <hr />
          </ul>
          <div className="flex w-full items-center mt-4">
            <Link
              href="/produk"
              className="bg-primary text-white border-2 border-b-[7px] border-secondary rounded-2xl py-3 px-2 w-full text-center font-bold"
            >
              Pesan Sekarang
            </Link>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="flex justify-center items-center mx-auto mt-8 bg-primary p-2 rounded-full border-2 border-secondary"
          >
            <X className="text-white" />
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
