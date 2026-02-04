export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 border-b">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl font-semibold text-center">Pricing</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative bg-white rounded-xl shadow-md p-6">
            <span className="absolute top-3 right-3 inline-block bg-indigo-600 text-white text-xs uppercase px-2 py-1 rounded-xl">
              Most popular
            </span>
            <h3 className="text-xl font-medium mb-2">Basic</h3>
            <p className="text-gray-700 mb-4">$99/month</p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>Feature A</li>
              <li>Feature B</li>
            </ul>
            <a href="#" className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700">
              Choose Basic
            </a>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-medium mb-2">Pro</h3>
            <p className="text-gray-700 mb-4">$199/month</p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>Feature A</li>
              <li>Feature B</li>
            </ul>
            <a href="#" className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700">
              Choose Pro
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
