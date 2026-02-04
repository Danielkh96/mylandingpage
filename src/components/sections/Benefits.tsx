export default function Benefits() {
  return (
    <>
      <section id="benefits" className="bg-background">
      <div className="max-w-7xl mx-auto px-6 py-32">
        <h2 className="text-3xl font-semibold text-center">Benefits</h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {['Benefit one','Benefit two','Benefit three'].map((b, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="h-12 w-12 bg-indigo-100 text-indigo-600 rounded-xl mx-auto flex items-center justify-center mb-4">
                {/* icon placeholder */}
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-medium mb-2">{b}</h3>
              <p className="text-gray-600">Short description of the benefit.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <div className="-mt-1">
      <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="w-full h-12">
        <path d="M0,32L1440,16L1440,48L0,48Z" fill="currentColor" className="text-slate-50" />
      </svg>
    </div>
    </>
  );
}
