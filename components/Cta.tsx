export default function Cta() {
    return (
      <section className="py-24" style={{ backgroundColor: '#215c73' }}> {/* Custom dark teal color */}
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Take Control of Your Health?
          </h2>
          <p className="mt-4 text-lg text-indigo-200 max-w-3xl mx-auto">
            Join thousands of satisfied users who trust **DocBooker** for their medical appointments. Sign up today and experience a new era of healthcare convenience.
          </p>
          <div className="mt-8">
            <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg shadow-lg text-indigo-700 bg-white hover:bg-gray-100 transition duration-150">
              Create Your Account
            </button>
          </div>
        </div>
      </section>
    );
  }