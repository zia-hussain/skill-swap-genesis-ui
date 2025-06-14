
import { Link, useLocation } from "react-router-dom";
import React from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Register Interest", path: "/register-interest" },
  { name: "FAQ's", path: "/faq" },
  { name: "Legal", path: "/legal" },
];

function Logo() {
  // Minimal colourful logo (svg)
  return (
    <div className="flex items-center gap-3">
      <span className="block rounded-full bg-brand-yellow w-10 h-10 grid place-content-center shadow-soft">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="11" fill="#F5C738"/>
          <circle cx="6" cy="8" r="2" fill="#0072CE"/>
          <circle cx="22" cy="8" r="2" fill="#EF476F"/>
          <circle cx="14" cy="22" r="2" fill="#44CF6C"/>
          <circle cx="8" cy="20" r="1.5" fill="#0072CE"/>
          <circle cx="20" cy="20" r="1.5" fill="#FFB800"/>
        </svg>
      </span>
      <span className="font-extrabold tracking-tight text-2xl text-gray-900 font-inter">Skill x Swap</span>
    </div>
  );
}

export default function NavBar() {
  const { pathname } = useLocation();
  return (
    <header className="sticky top-0 z-30 bg-white/90 border-b border-gray-100 backdrop-blur-xl">
      <nav className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        <div className="flex gap-2 md:gap-4 items-center">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={cn(
                "px-2 py-1 mx-1 font-medium rounded transition-colors hover:bg-brand-yellow/20 hover:text-brand-yellow",
                pathname === path && "text-brand-yellow underline underline-offset-8"
              )}
            >
              {name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
