function KontakPage() {
  return (
    <div className="container" id="kontak">
      <div className="text-center text-3xl font-semibold pt-24">
        <h1>Kontak Kami</h1>
      </div>
      <form>
        <div className="mb-2 p-2 ">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nama
          </label>
          <input
            type="text"
            id="name"
            className="shadow-sm appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
          />
        </div>
        <div className="mb-2 p-2">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
          />
        </div>
        <div className="mb-1 p-2">
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Pesan
          </label>
          <textarea
            className="shadowsm  appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 h-32"
            id="message"
          ></textarea>
        </div>
        <div className="flex items-center justify-between p-2">
          <div className="social-footer flex items-center sm:gap-7 gap-2">
            <a
              href="https://wa.me/6281289892790?text=Halo%20apakah%20bengkel%20buka%20?"
              className="ri-whatsapp-fill text-3xl text-center"
            ></a>
            <a
              href="https://www.instagram.com/pojokgarasi16/"
              className="ri-instagram-fill text-3xl text-center"
            ></a>
          </div>
          <button
            className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-5 rounded-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Kirim
          </button>
        </div>
      </form>
    </div>
  );
}

export default KontakPage;
