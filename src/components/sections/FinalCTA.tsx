import CTAButton from "../../components/ui/CTAButton";

export default function FinalCTA() {
  return (
    <section id="FinalCTA" className="bg-gradient-to-r from-indigo-500 to-indigo-600">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 text-center text-white">
        <h2 className="text-3xl font-semibold">Ready to get started?</h2>
        <p className="mt-4 max-w-lg mx-auto">Let’s chat and see how I can help your business.</p>
        <div className="mt-6">
          <CTAButton />
        </div>
      </div>
    </section>
  );
}
