import Link from 'next/link';
import { LogOut, User } from 'lucide-react'; // Example icons
import Image from 'next/image';
import heroImageUrl from '../assets/logo.png';
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">
              <Image
                src={heroImageUrl}
                alt="Doctor and Patient booking appointment"
                width={128}
                height={48}
              />
            </span>
          </Link>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <Link href="#home" className="text-gray-600 hover:text-indigo-600 transition duration-150">
              Home
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-indigo-600 transition duration-150">
              About
            </Link>
            <Link href="#services" className="text-gray-600 hover:text-indigo-600 transition duration-150">
              Services
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 text-sm font-medium">
            
            <div className="flex items-center space-x-2 text-sm font-medium">
              {/* The Login Button/Link is now pointing to the new page */}
              <Link
                href="/login"
                className="px-4 py-1.5 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition" // Applying styling from the new login page header
              >
                Login
              </Link>

              <Link href="/signup" className="px-4 py-1.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-150 shadow-md">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}