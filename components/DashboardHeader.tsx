// components/DashboardHeader.tsx
import Link from 'next/link';
import { LogOut } from 'lucide-react';
import Image from 'next/image';
import heroImageUrl from '../assets/logo.png';
export default function DashboardHeader() {
  return (
    <header className="bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        
        {/* Logo and Main Nav Links */}
        <div className="flex items-center space-x-8">
          <Link href="/dashboard" className="text-xl font-bold text-gray-900">
          <span className="text-xl font-bold text-gray-900">
              <Image
                src={heroImageUrl}
                alt="Doctor and Patient booking appointment"
                width={128}
                height={48}
              />
            </span>
          </Link>
          <nav className="hidden sm:flex space-x-6 text-sm font-medium">
            <Link href="/dashboard" className="text-indigo-600 border-b-2 border-indigo-600 pb-1">
              Dashboard
            </Link>
            <Link href="/appointments" className="text-gray-600 hover:text-indigo-600">
              My Appointments
            </Link>
            <Link href="/profile" className="text-gray-600 hover:text-indigo-600">
              Profile
            </Link>
          </nav>
        </div>

        {/* Logout Button */}
        <button className="px-4 py-1.5 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition shadow-sm">
          Logout
        </button>
      </div>
    </header>
  );
}