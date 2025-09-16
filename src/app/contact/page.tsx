export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="text-3xl font-semibold">Kontak Kami</h1>
      <p className="mt-2 text-gray-600">Silakan tinggalkan pesan Anda. Kami akan membalas secepatnya.</p>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <form action="#" method="post" className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">Nama</label>
              <input type="text" className="form-control" placeholder="Nama lengkap" required />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Email</label>
              <input type="email" className="form-control" placeholder="email@domain.com" required />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Pesan</label>
              <textarea className="form-control" rows={5} placeholder="Tulis pesan Anda" required />
            </div>
            <button type="submit" className="btn btn-primary">Kirim Pesan</button>
          </div>
        </form>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Alamat & Kontak</h2>
          <p className="mt-2 text-sm text-gray-600">Toko Mebel Evas<br />Telp/WA: 089-6660-77720</p>
          <div className="mt-4 overflow-hidden rounded-lg">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.883268951148!2d112.730!3d-7.143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDgnMzQuOCJTIDExMsKwNDMnNDguMCJF!5e0!3m2!1sen!2sid!4v1610000000000"
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a href="https://wa.me/6289666077720" target="_blank" className="btn btn-outline-primary mt-4">Chat WhatsApp</a>
        </div>
      </div>
    </main>
  );
}
