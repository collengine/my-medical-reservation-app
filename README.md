This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.



```bash
# 1. Create Next.js app
npx create-next-app docbooker

# 2. Go inside project
cd docbooker

# 3. Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### globals.css (inside `/app/globals.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-white text-gray-800;
}
```

---

### app/page.js

```jsx
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center py-4 px-8 shadow-sm">
        <div className="text-xl font-bold text-blue-600">⭐ Logo</div>
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Services</a>
        </div>
        <div className="space-x-2">
          <button className="px-4 py-2 rounded hover:bg-gray-100">Login</button>
          <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center bg-blue-50 mt-8 rounded-lg p-10">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-bold">Book Your Next Doctor&apos;s Appointment With Ease</h1>
          <p className="text-gray-600">
            DocBooker simplifies healthcare, allowing you to find, book, and manage your
            medical appointments effortlessly. Experience convenience and peace of mind.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
            Get Started Now
          </button>
        </div>
        <div className="flex-1 flex justify-center mt-8 md:mt-0">
          <Image
            src="/doctor-patient.jpg"
            alt="Doctor with patient"
            width={400}
            height={250}
            className="rounded-md"
          />
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="w-full max-w-6xl mx-auto py-20">
        <h2 className="text-2xl font-bold text-center">Why Choose DocBooker?</h2>
        <p className="text-center text-gray-600 mt-2 mb-12">
          We provide a seamless and efficient way to manage your healthcare appointments.
          Here’s what makes us stand out.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            ["Easy Booking", "Find and book appointments anytime, anywhere."],
            ["Secure & Private", "Your health data is protected with top-tier security."],
            ["Instant Confirmations", "Get immediate confirmation, no waiting."],
            ["Nearby Doctors", "Discover healthcare providers close to you."],
            ["Reminder Alerts", "Never miss a visit with timely reminders."],
            ["Personalized Care", "Manage your health records easily."],
          ].map(([title, desc]) => (
            <div key={title} className="p-6 bg-white shadow rounded">
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full max-w-6xl mx-auto py-20">
        <h2 className="text-2xl font-bold text-center">What Our Users Say</h2>
        <p className="text-center text-gray-600 mt-2 mb-12">
          Don’t just take our word for it. Hear from real users.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Alice Johnson",
              role: "Marketing Manager",
              review:
                "DocBooker has revolutionized how I schedule my doctor’s appointments. User-friendly and saves so much time!",
            },
            {
              name: "Robert Smith",
              role: "Software Engineer",
              review:
                "I love the instant confirmations and reminders. Helps me stay on top of my health checkups. Highly recommended!",
            },
            {
              name: "Sarah Chen",
              role: "Small Business Owner",
              review:
                "Finding doctors and booking has never been easier. The interface is clean and efficient. A must-have app!",
            },
          ].map(({ name, role, review }) => (
            <div key={name} className="p-6 bg-white shadow rounded">
              <p className="mb-4 text-gray-700">⭐️⭐️⭐️⭐️⭐️</p>
              <p className="text-gray-700 italic">“{review}”</p>
              <p className="mt-4 font-semibold">{name}</p>
              <p className="text-gray-500 text-sm">{role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-2xl font-bold">Ready to Take Control of Your Health?</h2>
        <p className="mt-4 mb-6">
          Join thousands who trust DocBooker. Sign up today and experience a new era of
          healthcare management.
        </p>
        <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100">
          Create Your Account
        </button>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-6xl mx-auto py-10 px-6">
        <div className="flex justify-between items-center flex-wrap gap-6">
          <div>
            <div className="text-xl font-bold text-blue-600">⭐ Logo</div>
            <p className="text-gray-600 mt-2">
              Your reliable partner for booking doctor appointments online.
            </p>
          </div>
          <div className="flex gap-10">
            <div>
              <h4 className="font-semibold">Product</h4>
              <ul className="space-y-1 text-gray-600">
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Resources</h4>
              <ul className="space-y-1 text-gray-600">
                <li><a href="#">Blog</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-1 text-gray-600">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-6">© {new Date().getFullYear()} DocBooker. All rights reserved.</p>
      </footer>
    </main>
  );
}
```
