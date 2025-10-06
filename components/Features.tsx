import { CalendarCheck, Shield, Clock, MapPin, Bell, Heart } from 'lucide-react';

// Define the structure for a single feature
interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  // ... (Feature data remains the same)
  {
    icon: <CalendarCheck className="h-6 w-6 text-indigo-600" />,
    title: "Easy Booking",
    description: "Find and book appointments in minutes, anytime, anywhere."
  },
  {
    icon: <Shield className="h-6 w-6 text-indigo-600" />,
    title: "Secure & Private",
    description: "Your health data is protected with strong encryption and privacy parameters..."
  },
  {
    icon: <Clock className="h-6 w-6 text-indigo-600" />,
    title: "Instant Confirmations",
    description: "Receive immediate confirmation of your booking via email or app notification..."
  },
  {
    icon: <MapPin className="h-6 w-6 text-indigo-600" />,
    title: "Nearby Doctors",
    description: "DocBooker finds doctors close to you, simplifying your journey to better health."
  },
  {
    icon: <Bell className="h-6 w-6 text-indigo-600" />,
    title: "Reminder Alerts",
    description: "Get timely reminders for your upcoming appointments so you never miss a visit."
  },
  {
    icon: <Heart className="h-6 w-6 text-indigo-600" />,
    title: "Personalized Care",
    description: "Manage all your doctor's appointments and medical history in one place, tailored to your needs."
  },
];

export default function Features() {
  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose DocBooker
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            We provide a seamless and efficient way to manage your healthcare appointments. Here's what makes us stand out.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6">
              <div className="flex-shrink-0 mb-4 p-3 rounded-full border-2 border-indigo-200 bg-white shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-3 text-base text-gray-500 max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}