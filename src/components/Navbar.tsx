"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Linkedin,
  Github,
} from "lucide-react";
import { socialLinks, personalInfo } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: isHome ? "#home" : "/#home" },
    { name: "About", href: isHome ? "#about" : "/#about" },
    { name: "Education", href: isHome ? "#education" : "/#education" },
    { name: "Skills", href: isHome ? "#skills" : "/#skills" },
    { name: "Experience", href: isHome ? "#experience" : "/#experience" },
    { name: "Projects", href: isHome ? "#projects" : "/#projects" },
    { name: "Courses", href: isHome ? "#courses" : "/#courses" },
    { name: "Contact", href: isHome ? "#contact" : "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1F1D26]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo & Avatar */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/20 group-hover:border-accent-cyan transition-colors shrink-0 bg-[#25232E]">
            <Image
              src="/profile.jpg"
              alt={personalInfo.name}
              fill
              sizes="36px"
              className="w-9 h-9 rounded-full object-cover"
              priority
            />
          </div>
          <span className="font-mono text-sm tracking-wider font-semibold text-white group-hover:text-accent-cyan transition-colors">
            {personalInfo.shortName}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-xs font-medium text-[#A7A5AE] hover:text-white hover:bg-white/5 rounded-md transition-colors font-sans"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={socialLinks.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            title={`LinkedIn: ${personalInfo.linkedInName}`}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-[#25232E] border border-white/10 text-xs font-mono text-[#A7A5AE] hover:text-white hover:border-accent-blue transition-all"
          >
            <Linkedin className="w-3.5 h-3.5 text-accent-blue" />
            <span className="hidden xl:inline">LinkedIn</span>
          </a>

          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-[#25232E] border border-white/10 text-xs font-mono text-[#A7A5AE] hover:text-white hover:border-white/30 transition-all"
          >
            <Github className="w-3.5 h-3.5" />
            <span className="hidden xl:inline">GitHub</span>
          </a>

          {/* Theme Toggle Client Component */}
          <ThemeToggle />
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-md bg-[#25232E] border border-white/10 text-[#A7A5AE] hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#1F1D26]/98 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 text-sm text-[#A7A5AE] hover:text-white hover:bg-white/5 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center gap-3">
            <a
              href={socialLinks.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-md bg-[#25232E] border border-white/10 text-xs font-mono text-white"
            >
              <Linkedin className="w-4 h-4 text-accent-blue" />
              LinkedIn
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-md bg-[#25232E] border border-white/10 text-xs font-mono text-white"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
