import React, { useState } from "react";
import Header from "./Header";
import AdminLogin from "./AdminLogin";
import DoctorReception from "./DoctorReception";
import Patients from "./Patients";
import DoctorCheckiin from "./DoctorCheckiin";
import ReceptionCheckin from "./ReceptionCheckin";
import Footer from "./Footer";
import { Menu } from "lucide-react"; // Make sure lucide-react is installed

const MainPage = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-purple-800 to-black text-gray-100 font-mono">
      {/* Desktop Sidebar */}
      <nav className="hidden md:flex flex-col w-64 h-screen sticky top-0 bg-gray-900 p-6 border-r border-gray-700 justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white mb-8">UNDERSTANDING GUIDE</h1>
          <h1></h1>
            <h1></h1>
          <ul className="space-y-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-600 font-semibold">
            {[
              { id: "admin", label: "Admin Signup" },
              { id: "staff", label: "Staff Add" },
              { id: "patients", label: "Patient App" },
              { id: "doctor", label: "Doctor Fetch" },
              { id: "reception", label: "Reception Fetch" },
            ].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block px-2 py-1 rounded hover:bg-gradient-to-r hover:from-purple-200 hover:to-indigo-600 hover:text-black transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navbar (Hamburger) */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          className="text-white p-2 bg-gray-800 rounded-md"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Mobile Menu Dropdown */}
        {mobileNavOpen && (
          <div className="absolute mt-2 w-56 bg-gray-900 shadow-lg rounded-lg border border-gray-700 z-50">
            <ul className="p-4 space-y-4">
              {[
                { id: "admin", label: "Admin Signup" },
                { id: "staff", label: "Staff Add" },
                { id: "patients", label: "Patient App" },
                { id: "doctor", label: "Doctor Fetch" },
                { id: "reception", label: "Reception Fetch" },
              ].map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMobileNavOpen(false)}
                    className="block px-2 py-1 rounded hover:bg-gradient-to-r hover:from-purple-200 hover:to-indigo-600 hover:text-black transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto scroll-smooth relative">
        {/* Sticky Header */}
        <div className="sticky top-0 z-40 bg-gradient-to-r from-purple-800 to-black">
          <Header />
        </div>

        {/* Page Sections */}
        <div className="px-6 py-6 space-y-20">
          <div id="admin"><AdminLogin /></div>
          <div id="staff"><DoctorReception /></div>
          <div id="patients"><Patients /></div>
          <div id="doctor"><DoctorCheckiin /></div>
          <div id="reception"><ReceptionCheckin /></div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
