import { Star } from 'lucide-react';
import Image from 'next/image';

import avatarUrl1 from '../assets/simon.jpeg';
import avatarUrl2 from '../assets/simon-2.jpeg';
import avatarUrl3 from '../assets/simon-3.jpeg';

// Define the structure for a single testimonial (data simplified for brevity)
interface TestimonialItem {
  quote: string;
  name: string;
  title: string;
  avatarUrl: string; 
}
const imageUrl = avatarUrl1.src;
const imageUrl2 = avatarUrl2.src;
const imageUrl3 = avatarUrl3.src;
const testimonials: TestimonialItem[] = [
  // ... (Testimonial data remains the same)
  {
    quote: "DocBooker has revolutionized how I schedule my doctor's appointments. It's incredibly intuitive and saves so much time!",
    name: "Alice Johnson",
    title: "Software Engineer",
    avatarUrl: imageUrl,
  },
  {
    quote: "I love the instant confirmations and reminder alerts. I've never forgotten a follow-up or check-up. Highly recommended!",
    name: "Robert Smith",
    title: "Marketing Manager",
    avatarUrl: imageUrl2,
  },
  {
    quote: "Finding doctors and booking appointments has never been easier. Finally, a service that is focused on patient convenience. A must-have app!",
    name: "Sarah Chen",
    title: "Small Business Owner",
    avatarUrl: imageUrl3,
  },
];

// Helper component for the star rating
const StarRating: React.FC = () => (
  <div className="flex text-yellow-400">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-current" />
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Users Say
          </h2>
          <p className="mt-4 text-base text-gray-500 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from real users who have transformed their appointment booking experience with DocBooker.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col justify-between">
              <div>
                <StarRating />
                <blockquote className="mt-3 text-sm text-gray-600 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>
              
              <div className="mt-5 flex items-center">
                <div className="relative h-10 w-10">
                  <Image
                    className="rounded-full object-cover border-2 border-white shadow"
                    src={testimonial.avatarUrl}
                    alt={testimonial.name}
                    layout="fill"
                  />
                </div>
                
                <div className="ml-3 text-left">
                  <p className="text-sm font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}