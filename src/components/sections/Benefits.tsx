export default function Benefits() {
  return (
    <section id="benefits" className="bg-slate-50 border-b">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
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
  );
}
