import { Routes, Route } from "react-router-dom";
import Navbar from "./component/NavbarComponent";
import Homepage from "./pages/Homepage";
import Layanan from "./component/LayananComponent";
import Kontak from "./pages/KontakPage";
import LokasiPage from "./pages/LokasiPage";
import Tuneup from "./pages/TuneupPage";
import BoreUp from "./pages/BoreUpPage";
import Repaint from "./pages/RepaintPage";
import UpgradeCVT from "./pages/UpgradeCVTPage";
import Portingpolish from "./pages/PortingPolishPage";
import NotFound from "./pages/NotFountPage";
import Footer from "./component/FooterComponent";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <HashRouter> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/layanan" element={<Layanan />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/lokasi" element={<LokasiPage />} />
          <Route path="/tuneup" element={<Tuneup />} />
          <Route path="/boreUp" element={<BoreUp />} />
          <Route path="/repaint" element={<Repaint />} />
          <Route path="/upgradecvt" element={<UpgradeCVT />} />
          <Route path="/portingpolish" element={<Portingpolish />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      {/* </HashRouter> */}
      <Footer />
    </div>
    // <div>
    //   <Homepage />
    // </div>
  );
};

export default App;
