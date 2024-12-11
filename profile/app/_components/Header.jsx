"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Left Section: Title */}
        {/* <div className="text-xl font-semibold text-gray-900">Abhijeet Thorat</div> */}
        <Link href="/" className="text-xl font-semibold text-gray-900">
        Abhijeet Thorat
        </Link>
        {/* Right Section: Navigation Links */}
        <div className="flex gap-8 text-sm font-medium text-gray-900">
          {/* Disabled CV Link */}
          <a
            href="#cv"
            className="hover:text-gray-600 cursor-not-allowed"
            style={{ pointerEvents: "none", color: "gray" }}
          >
            CV
          </a>

          {/* Active Resume Link */}
          <a href="#resume" className="hover:text-gray-600">
            Resume
          </a>

          {/* Reading Page Link */}
          <Link href="/reading" className="hover:text-gray-600">
            Reading
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
