
export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      <div className="w-full max-w-4xl bg-white/90 rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Section - Promotional Content */}
        <div className="w-full md:w-1/2 p-6 bg-cover bg-center relative" style={{ backgroundImage: 'url(https://via.placeholder.com/600x800)' }}>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-sm">Discover our story and mission.</p>
          </div>
        </div>

        {/* Right Section - About Content */}
        <div className="w-full md:w-1/2 p-6 flex flex-col items-center justify-center">
          <div className="w-full max-w-md space-y-6">
            <h1 className="text-3xl font-bold text-gray-800 text-center">Our Story</h1>
            <p className="text-gray-600">
              Welcome to our platform! Founded in 2023, we are dedicated to providing innovative solutions for users worldwide. Our journey began with a passion for technology and a desire to connect people through seamless experiences.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to empower individuals with tools that enhance productivity and creativity. We strive to deliver high-quality services with a focus on user satisfaction and continuous improvement.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
            <p className="text-gray-600">
              Have questions? Reach out to us at <a href="mailto:support@example.com" className="text-blue-600 hover:underline">support@example.com</a> or call us at +1-800-555-1234. We’re here to help!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}