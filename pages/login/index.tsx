// app/login/page.tsx

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
export default function LoginPage() {
  
  // NOTE: Assuming you have a logo image saved in /public/images/docbooker-logo.png
  // Replace the image source with your actual logo component or image path if different.
  const logoUrl = "/images/docbooker-logo.png";
  const router = useRouter(); 
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 1. Get form data (e.g., Email and Password)
    // 2. Perform validation
    // 3. Send data to your API route or backend service
    // 4. On success, redirect the user to their dashboard
    console.log("Login button clicked. Implement form submission logic here.");
    router.push('/dashboard'); 
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* --- Header (Minimal) --- */}
      <header className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-900">
            {/* Replace with your actual logo */}
            <span className="text-xl font-bold text-indigo-600 flex items-center">
              DocBooker
            </span>
          </Link>
          <div className="flex space-x-3">
            <Link href="/login" className="px-4 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 transition">
              Login
            </Link>
            <Link href="/signup" className="px-4 py-1.5 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition shadow-md">
              Sign Up
            </Link>
          </div>
        </div>
      </header>
      
      {/* --- Login Form Container --- */}
      <div className="flex flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md bg-white p-8 border border-gray-200 rounded-xl shadow-lg">
          
          {/* Logo and Header Text */}
          <div className="flex flex-col items-center">
            {/* If using the image I generated, use this div: */}
            <div className="relative h-10 w-40 mb-4">
               {/* NOTE: If you use the image, uncomment the Image component */}
               {/* <Image src={logoUrl} alt="DocBooker Logo" layout="fill" objectFit="contain" /> */}
            </div>
             
            <h2 className="text-2xl font-bold text-gray-900 mt-4">
              Welcome Back
            </h2>
            <p className="mt-2 text-sm text-gray-500 text-center">
              Please log in to manage your appointments.
            </p>
          </div>

          {/* Form */}
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john.doe@example.com"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Link href="#" className="text-xs font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot Password?
                </Link>
              </div>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="********"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150"
                style={{ backgroundColor: '#47839b' }} // Custom color to match the design
              >
                Login
              </button>
            </div>
          </form>

          {/* No account link */}
          <div className="mt-6 text-center text-sm">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}