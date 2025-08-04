"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./globals.css"; 
export default function RootLayout({ children }) {
   const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  return (
    <html lang="en">
      <body>
        <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left: Logo + Name */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="h-10 w-10" />
            <span className="text-xl font-bold text-indigo-600">Study manegement</span>
          </div>

          {/* Right: Buttons */}
          <div className="flex items-center gap-4 relative">
            {/* Login Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setLoginOpen(!loginOpen);
                  setSignupOpen(false);
                }}
                className="flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium bg-indigo-800 transition"
              >
                Login <ChevronDown size={16} />
              </button>
              {loginOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-10">
                  {["Admin", "Student", "School", "Teacher"].map((role) => (
                    <a
                      key={role}
                      href={`/login?role=${role}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100"
                    >
                      Login as {role}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Signup Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setSignupOpen(!signupOpen);
                  setLoginOpen(false);
                }}
                className="flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium bg-indigo-800 transition"
              >
                Signup <ChevronDown size={16} />
              </button>
              {signupOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-10">
                  {["Admin", "Student", "School", "Teacher"].map((role) => (
                    <a
                      key={role}
                      href={`/signup?role=${role}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100"
                    >
                      Signup as {role}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Logout */}
            <button className="px-4 py-2 text-sm font-medium bg-red-500 text-white rounded-md hover:bg-red-600 transition">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
        {children}
      </body>
    </html>
  );
}
