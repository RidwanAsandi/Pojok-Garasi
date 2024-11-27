import { useEffect, useState } from "react";
import LogoNavbar from "../assets/Image/LogoPojokGarasi2.png";


const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => {
    setShow(!show);
    // console.log(show);
  };

  let menuActive = show ? "right-0" : "-right-full";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        // console.log("testing");
        setScroll(true);
        setShow(false);
      } else {
        setScroll(false);
      }
    });
  });

  let scrollActive = scroll ? "py-6 bg-white shadow" : "py-4";

  return (
    <div className={`navbar fixed w-full transition-all ${scrollActive}`}>
      <div className="container mx-auto px-2">
        <div className="navbar-box flex items-center justify-between">
          <div className="logo">
            <a href="/">
              <img
                src={LogoNavbar}
                width={140}
                alt="logonavbar"
                className="lg:h-20 lg:w-44"
              />
            </a>
          </div>
          <ul
            className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:-translate-y-0 md:text-black md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuActive} top-56 -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-slate-300 bg-slate-500 font-bold text-white transition-all`}
          >
            <li className="flex items-center gap-3">
              <i className="ri-home-2-line text-3xl md:hidden block"></i>
              <a href="/" className="font-medium opacity-75">
                Beranda
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-settings-3-line text-3xl md:hidden block"></i>
              <a href="#layanan" className="font-medium opacity-75">
                Layanan
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-information-line text-3xl md:hidden block"></i>
              <a href="#lokasi" className="font-medium opacity-75">
                Lokasi Kami
              </a>
            </li>
          </ul>
          <div className="social flex items-center gap-2">
            <a
              href="#kontak"
              className="bg-slate-500 px-3 py-2 lg:px-5 rounded-full text-white font-bold hover:bg-slate-600"
            >
              Kontak Kami
            </a>
            <i
              className="ri-menu-3-line text-3xl md:hidden block"
              onClick={handleClick}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;