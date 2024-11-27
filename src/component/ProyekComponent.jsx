import gambar1 from "../assets/TuneUp/gambar1.jpg";
import gambar2 from "../assets/TuneUp/gambar2.jpg";
// import gambar3 from "../assets/TuneUp/gambar3.jpg";
// import gambar4 from "../assets/TuneUp/gambar4.jpg";

function Proyek() {
  return (
    <div className="Proyek" id="proyek">
      <div className="container mx-auto pt-28">
        <div className="proyek">
          <h1 className="text-3xl lg:text-5xl font-bold text-center">
            Galeri & List Harga
          </h1>
        </div>
        <div className="tune-up text-xl font-bold pt-10">
          <p className="pl-3">- Tune Up -</p>
          <div className="tuneup-berjalan grid grid-cols-2 lg:grid-cols-4 gap-6 p-4">
            <a href="">
              <img src={gambar1} alt="" className="object-cover" />
            </a>
            <a href="">
              <img src={gambar2} alt="" />
            </a>
            <a href="">
              <img src={gambar2} alt="" />
            </a>
            <a href="">
              <img src={gambar1} alt="" />
            </a>
          </div>
        </div>
        <div className="text-end pr-4">
          <a
            href="#tuneup"
            className="border text-xs bg-slate-500 rounded-full px-5 py-2 font-bold text-white hover:bg-slate-600"
          >
            List Harga TuneUp
          </a>
        </div>
        <div className="text-xl font-bold pt-10">
          <p className="pl-3">- Repaint -</p>
          <div className="tuneup-berjalan grid grid-cols-2 lg:grid-cols-4 gap-6 p-4">
            <a href="">
              <img src={gambar1} alt="" className="object-cover" />
            </a>
            <a href="">
              <img src={gambar2} alt="" />
            </a>
            <a href="">
              <img src={gambar2} alt="" />
            </a>
            <a href="">
              <img src={gambar1} alt="" />
            </a>
          </div>
        </div>
        <div className="text-end pr-4">
          <a
            href="#repaint"
            className="border text-xs bg-slate-500 rounded-full px-5 py-2 font-bold text-white hover:bg-slate-600"
          >
            List Harga Reapint
          </a>
        </div>
        <div className="text-xl font-bold pt-10">
          <p className="pl-3">- Bore Up -</p>
          <div className="tuneup-berjalan grid grid-cols-2 lg:grid-cols-4 gap-6 p-4">
            <a href="">
              <img src={gambar1} alt="" className="object-cover" />
            </a>
            <a href="">
              <img src={gambar2} alt="" />
            </a>
            <a href="">
              <img src={gambar2} alt="" />
            </a>
            <a href="">
              <img src={gambar1} alt="" />
            </a>
          </div>
        </div>
        <div className="text-end pr-4">
          <a
            href="#boreUp"
            className="border text-xs bg-slate-500 rounded-full px-5 py-2 font-bold text-white hover:bg-slate-600"
          >
            List Harga BoreUp
          </a>
        </div>
        <div className="text-xl font-bold pt-10">
          <p className="pl-3">- Upgrade CVT -</p>
          <div className="tuneup-berjalan grid grid-cols-2 lg:grid-cols-4 gap-6 p-4">
            <a href="">
              <img src={gambar1} alt="" className="object-cover" />
            </a>
            <a href="">
              <img src={gambar2} alt="" />
            </a>
            <a href="">
              <img src={gambar2} alt="" />
            </a>
            <a href="">
              <img src={gambar1} alt="" />
            </a>
          </div>
        </div>
        <div className="text-end pr-4">
          <a
            href="#upgradecvt"
            className="border text-xs bg-slate-500 rounded-full px-5 py-2 font-bold text-white hover:bg-slate-600"
          >
            List Harga Upgrade CVT
          </a>
        </div>
        <div className="text-xl font-bold pt-10">
          <p className="pl-3">- Porting Polish -</p>
          <div className="tuneup-berjalan grid grid-cols-2 lg:grid-cols-4 gap-6 p-4">
            <a href="">
              <img src={gambar1} alt="" className="object-cover" />
            </a>
            <a href="">
              <img src={gambar2} alt="" />
            </a>
            <a href="">
              <img src={gambar2} alt="" />
            </a>
            <a href="">
              <img src={gambar1} alt="" />
            </a>
          </div>
        </div>
        <div className="text-end pr-4">
          <a
            href="#portingpolish"
            className="border text-xs bg-slate-500 rounded-full px-5 py-2 font-bold text-white hover:bg-slate-600"
          >
            List Harga Porting Polish
          </a>
        </div>
      </div>
    </div>
  );
}

export default Proyek;
