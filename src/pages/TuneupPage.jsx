// import { ImgTuneup } from "../data/index.js";
import ImgTuneup1 from "../assets/TuneUp/gambar1.jpg";
import ImgTuneup2 from "../assets/TuneUp/gambar2.jpg";
// import { ListHargaTuneup, ListHargaTuneup125 } from "../data";

const tuneup = () => {
  return (
    <div className="container" id="tuneup">
      <div className="text-center text-2xl font-semibold pt-24">
        <h1>TuneUp</h1>
      </div>
      <br />
      <div className="text-lg font-semibold m-2">
        <h2>Galeri</h2>
        <br />
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-4">
          <img src={ImgTuneup1} alt="" />
          <img src={ImgTuneup2} alt="" />
          <img src={ImgTuneup1} alt="" />
          <img src={ImgTuneup2} alt="" />
          <img src={ImgTuneup1} alt="" />
          <img src={ImgTuneup2} alt="" />
          <img src={ImgTuneup1} alt="" />
          <img src={ImgTuneup2} alt="" />
          <img src={ImgTuneup1} alt="" />
          <img src={ImgTuneup2} alt="" />
          <img src={ImgTuneup1} alt="" />
          <img src={ImgTuneup2} alt="" />
          <img src={ImgTuneup1} alt="" />
          <img src={ImgTuneup2} alt="" />
          <img src={ImgTuneup1} alt="" />
          <img src={ImgTuneup2} alt="" />
        </div>
        <br />
        <div>
          <h2 className="text-center pb-2 lg:text-start lg:pl-80">List harga TuneUp</h2>
          <p className="underline underline-offset-4 text-center lg:text-start">Vario 150</p>
          {/* <div>
            {ListHargaTuneup.map((tuneup) => {
              return(
                <div key={tuneup.id} className="grid grid-cols-2 text-center">
                  <p className="text-start">{tuneup.layanan}</p>
                  <div className="text-start pl-16">
                  <p>{tuneup.price}</p>
                  </div>
                </div>
              )
            })}
            <div className="pt-4">
            <p className="underline underline-offset-4 text-center lg:text-start">Vario 125</p>
              {ListHargaTuneup125.map((vario125) => {
                return(
                  <div key={vario125.id} className="grid grid-cols-2 text-center">
                    <p className="text-start">{vario125.layanan}</p>
                    <div className="text-start pl-16">
                      <p>{vario125.price}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default tuneup;
