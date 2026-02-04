export default function FAQ() {
  const faqs = [
    { q: "Question 1?", a: "Answer to question 1." },
    { q: "Question 2?", a: "Answer to question 2." },
    { q: "Question 3?", a: "Answer to question 3." },
    { q: "Question 4?", a: "Answer to question 4." },
    { q: "Question 5?", a: "Answer to question 5." },
  ];
  return (
    <section id="faq" className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl font-semibold text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <details key={i} className="p-4 border rounded-xl shadow-sm">
              <summary className="font-medium cursor-pointer">{item.q}</summary>
              <p className="mt-2 text-gray-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
