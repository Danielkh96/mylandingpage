export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-500 text-white min-h-[90vh]"
    >
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        {/* Left Column */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-xl">
            Build & Ship AI Apps Without Code
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-lg leading-relaxed">
            Describe what you want. AI builds it. You iterate in real time.
          </p>
          <div className="mt-8 flex space-x-4">
            <a
              href="#"
              className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition"
            >
              Start Building
            </a>
            <a
              href="#"
              className="inline-block px-6 py-3 border border-white text-white rounded-xl shadow-md hover:bg-white hover:text-indigo-600 transition"
            >
              Watch Live Demo
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="mt-12 md:mt-0 md:w-1/2">
          <div className="rounded-xl shadow-md bg-white p-6">
            <img
              src="/images/001-a-cartoon-style-ai-robot-surrounded-by-v.png"
              alt="AI cartoon robot illustration"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
