import Service from "../assets/Image/sm.png";
import Paint from "../assets/Image/kompresor.png";
import Piston from "../assets/Image/pistons.png";
import CVT from "../assets/Image/CVT.png";
import TuneUp from "../assets/Image/TuneUp.png";

function Layanan() {
  return (
    <div className="service" id="service">
      <div className="container mx-auto pt-24 lg:pt-36">
        <div className="layanan">
          <h1 className="text-3xl lg:text-5xl font-bold text-center">
            Layanan
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-2 p-2 lg:grid-cols-5 text-center lg:pt-14">
          <a
            href="#tuneup"
            className="card rounded-xl shadow-xl lg:p-10 lg:m-8 p-9 m-1"
          >
            <img src={Service} alt="Services" className="pb-7" />
            <h3 className="font-bold text-xl text-center">Tune Up</h3>
          </a>
          <a
            href="#repaint"
            className="card rounded-xl shadow-xl lg:p-10 lg:m-8 p-9 m-1"
          >
            <img src={Paint} alt="Paint" className="pb-7" />
            <h3 className="font-bold text-xl text-center">Repaint</h3>
          </a>
          <a
            href="#boreUp"
            className="card rounded-xl shadow-xl lg:p-10 lg:m-8 p-9 m-1"
          >
            <img src={Piston} alt="Pistons" className="pb-7" />
            <h3 className="font-bold text-xl">Bore Up</h3>
          </a>
          <a
            href="#upgradecvt"
            className="card rounded-xl shadow-xl lg:p-10 lg:m-8 p-9 m-1"
          >
            <img src={CVT} alt="Pistons" className="pb-7" />
            <h3 className="font-bold text-xl">Upgrade CVT</h3>
          </a>
          <a
            href="#portingpolish"
            className="card rounded-xl shadow-xl lg:p-10 lg:m-8 p-9 m-1"
          >
            <img src={TuneUp} alt="Pistons" className="pb-7" />
            <h3 className="font-bold text-xl">Porting Polish</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Layanan;
