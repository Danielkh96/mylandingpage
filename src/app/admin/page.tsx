import Image from 'next/image';

const admins = [
  { name: 'Admin Alice', img: 'https://via.placeholder.com/150?text=Alice' },
  { name: 'Admin Bob', img: 'https://via.placeholder.com/150?text=Bob' },
  { name: 'Admin Carol', img: 'https://via.placeholder.com/150?text=Carol' },
  { name: 'Admin Dave', img: 'https://via.placeholder.com/150?text=Dave' },
];

export default function AdminPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold text-center mb-12">管理后台</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {admins.map((admin) => (
          <div key={admin.name} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
            <Image
              src={admin.img}
              alt={admin.name}
              width={150}
              height={150}
              className="rounded-full mb-4"
            />
            <h2 className="text-xl font-medium mb-4">{admin.name}</h2>
            <button className="px-6 py-2 bg-primary text-white rounded-xl shadow hover:bg-secondary transition">
              Log in
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
