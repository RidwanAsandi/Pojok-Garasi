import ImgTuneup1 from "../assets/TuneUp/gambar1.jpg"
import ImgTuneup2 from "../assets/TuneUp/gambar2.jpg"


const RepaintPage = () => {
  return (
    <div className="container" id="repaint">
      <div className="text-center text-2xl font-semibold pt-24">
        <h1>Repaint</h1>
      </div>
      <br />
      <div className="text-lg font-semibold">
      <h2 className="pl-2 ">Galeri</h2>
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 p-2">
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
          <h2 className="text-center pb-2">List harga Repaint</h2>
          <p className="text-center">Vario 150</p>
          <div className="grid grid-cols-2 text-center">
            <p>Trotol Body</p>
            <p>Rp. 30.000,-</p>
          </div>
          <div className="grid grid-cols-2 text-center">
            <p>CVT</p>
            <p>Rp. 50.000,-</p>
          </div>
          <p className="text-center">Vario 125</p>
          <div className="grid grid-cols-2 text-center">
            <p>Trotol Body</p>
            <p>Rp. 30.000,-</p>
          </div>
          <div className="grid grid-cols-2 text-center">
            <p>CVT</p>
            <p>Rp. 50.000,-</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RepaintPage