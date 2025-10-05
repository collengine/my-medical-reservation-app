import Image from 'next/image';
import heroImageUrl from '../assets/doctor-patient.png';
export default function Hero() {
  // Use a relative path from the /public folder
  

  return (
    <section className="pt-20 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          
          {/* Content Block */}
          <div className="text-left pt-8 pb-12">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Book Your Next Doctor's Appointment With Ease
            </h1>
            <p className="mt-6 text-xl text-gray-500 max-w-lg">
              <span style="weight=bold">DocBooke</span>r simplifies healthcare, allowing you to find a doctor, manage your medical appointments effortlessly. Experience care with just a piece of mind.
            </p>
            <div className="mt-8">
              <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150">
                Get Started Now
              </button>
            </div>
          </div>

          {/* Image Block */}
          <div className="mt-12 lg:mt-0 relative">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl bg-gray-100 border border-gray-200">
              {/* NOTE: You need to place an image (e.g., doctor-patient.png) in your /public/images directory for this to work */}
              <Image 
                src={heroImageUrl} 
                alt="Doctor and Patient booking appointment" 
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
