import CTAButton from "../../components/ui/CTAButton";

export default function Hero() {
  return (
    <section id="hero" className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-sm uppercase text-indigo-600 font-medium">AI Web & App Bootcamp</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold leading-tight max-w-xl">
            全方位 Ai 学习平台
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-md leading-relaxed">
            Subheadline goes here.
          </p>
          <div className="mt-8 space-x-4">
            <CTAButton />
            <a href="#faq" className="inline-block px-6 py-3 text-indigo-600 rounded-xl shadow-md hover:underline">
              Learn More
            </a>
          </div>
        </div>
        <div>
          <div className="rounded-xl shadow-md bg-white p-6">
            {/* Visual placeholder skeleton */}
            <div className="h-3 bg-slate-200 rounded-full mb-4 w-1/3" />
            <div className="space-y-2">
              <div className="h-4 bg-slate-200 rounded" />
              <div className="h-4 bg-slate-200 rounded w-5/6" />
              <div className="h-4 bg-slate-200 rounded w-2/3" />
            </div>
            <div className="mt-6 h-48 bg-slate-200 rounded" />
          </div>
        </div>
      </div>
    </section>
  );
}
