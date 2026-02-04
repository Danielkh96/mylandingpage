export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-primary text-white overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6 py-32 flex flex-col md:flex-row items-center gap-12">
        {/* Left Column */}
        <div className="md:w-1/2">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight max-w-xl dark:text-dark-text-primary">
            全方位 AI 学习平台
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-lg leading-relaxed dark:text-dark-text-secondary">
            Describe what you want. AI builds it. You iterate in real time.
          </p>
          <div className="mt-8 flex space-x-4">
            <a
              href="#"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl shadow-lg hover:opacity-90 transition dark:from-dark-primary dark:to-dark-secondary dark:text-dark-text-primary"
            >
              Start Building
            </a>
            <a
              href="#"
              className="inline-block px-8 py-4 border-2 border-white text-white rounded-2xl shadow-lg hover:bg-white hover:text-primary transition dark:border-dark-text-secondary dark:text-dark-text-primary dark:hover:bg-dark-background dark:hover:border-dark-primary dark:hover:text-dark-primary"
            >
              Watch Live Demo
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="mt-12 md:mt-0 md:w-1/2">
          <img
            src="/images/hero-new.jpg"
            alt="AI cartoon robot illustration"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
