export default function ContactPage() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold text-center">联系我们</h1>
      <p className="mt-2 text-center text-lg text-gray-600">
        有任何问题或合作意向，请填写下方表单与我们联系。
      </p>
      <form className="mt-8 grid gap-6 max-w-xl mx-auto">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 font-medium">
            全名 <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="请输入您的全名"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 font-medium">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="请输入您的邮箱"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 font-medium">
            信息／留言 <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            required
            rows={5}
            className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="在此输入您的留言..."
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-primary text-white rounded-xl shadow-md hover:bg-secondary transition"
        >
          发送
        </button>
      </form>

      <div className="mt-12 text-center space-y-2 text-gray-600">
        <p>或通过以下方式联系：</p>
        <p>
          WhatsApp: <a href="https://wa.me/" className="text-primary hover:underline">点击聊天</a>
        </p>
        <p>
          Email: <a href="mailto:example@example.com" className="text-primary hover:underline">example@example.com</a>
        </p>
      </div>
    </section>
  );
}
