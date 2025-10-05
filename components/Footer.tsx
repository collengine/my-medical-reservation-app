import { Facebook, Twitter, Instagram, Globe } from 'lucide-react';
import Image from 'next/image';
import heroImageUrl from '../assets/logo.png';
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          
          {/* Logo and Tagline */}
          <div className="space-y-4 pr-12">
            <span className="text-xl font-bold text-gray-900">
            <Image 
                src={heroImageUrl} 
                alt="Doctor and Patient booking appointment" 
              />
            </span>
            <p className="text-sm text-gray-500">
              Your reliable partner for booking doctor appointments online.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-indigo-600 transition duration-150">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-600 transition duration-150">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-600 transition duration-150">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-12 grid grid-cols-3 gap-8 text-sm xl:mt-0 xl:col-span-3">
            <div>
              <h3 className="font-semibold text-gray-900">
                Product
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                Resources
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">FAQ</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                Company
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-100 pt-8">
          <p className="text-xs text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Your reliable partner for booking doctor appointments online.
          </p>
        </div>
      </div>
    </footer>
  );
}