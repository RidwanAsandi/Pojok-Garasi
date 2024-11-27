import ImageHero from "../assets/Image/LogoPojokGarasi2.png";

const Hero = () => {
  return (
    <div>
      <div className="homepage" id="home">
        <div className="container px-4 mx-auto">
          {/* section hero  */}
          <div className="hero grid items-center lg:gap-8 lg:pt-56 md:grid-cols-2 pt-28">
            <div className="box order-2 lg:order-1 ">
              <h1 className="text-2xl/tight lg:text-5xl/tight md:text-4xl/tight font-bold mb-5">
                Pojok Garasi
              </h1>
              <p className="text-sm lg:text-2xl md:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, esse!
              </p>
              <div className="pt-5">
                <a
                  href="#layanan"
                  className="text-sm bg-slate-500 px-7 py-2 rounded-full text-white font-bold"
                >
                  Layanan Kami
                </a>
              </div>
            </div>
            <div className="img order-1 lg:order-2 pb-7">
              <img
                src={ImageHero}
                alt="Hero Image"
                className="md:w-full w-[400px] mx-auto md:m-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
