export default function Testimonials() {
  return (
    <>
      <div className="-mt-1">
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0,16L1440,32L1440,0L0,0Z" fill="currentColor" className="text-white" />
        </svg>
      </div>
      <section id="testimonials" className="bg-background">
      <div className="max-w-7xl mx-auto px-6 py-32">
        <h2 className="text-3xl font-semibold text-center">What People Say</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1,2,3].map((i) => (
            <div key={i} className="bg-slate-50 rounded-xl shadow-md p-6">
              <p className="text-gray-700 italic">“Testimonial placeholder.”</p>
              <div className="mt-4 flex items-center">
                <div className="h-10 w-10 bg-slate-200 rounded-full mr-3" />
                <div>
                  <p className="font-medium">User {i}</p>
                  <p className="text-sm text-gray-500">Role / Company</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
