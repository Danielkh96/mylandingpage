export default function Footer() {
  return (
    <footer className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}
