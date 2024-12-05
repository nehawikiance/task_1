export default function TermsAndConditions() {
    return (
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Terms & Conditions</h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              These Terms & Conditions outline the rules and regulations for using our services. Please read them carefully before proceeding.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Service Use</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing or using our services, you agree to comply with our policies and terms as described here.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">User Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Users must ensure that their activities comply with applicable laws and regulations. Misuse of services will result in account suspension.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about these terms, feel free to contact us at <a href="mailto:support@example.com" className="text-blue-600 hover:underline">support@example.com</a>.
            </p>
          </div>
        </div>
      </div>
    );
  }
  