import LogoFooter from "../assets/Image/LogoPojokGarasi2.png"

function Footer() {
  return (
    <div className="footer bg-white shadow mt-20">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="py-4">
          &copy; Copyright by <span className="font-bold">Pojok Garasi</span>
        </p>
        {/* <div className="social-footer flex items-center sm:gap-7 gap-2">
          <i className="ri-facebook-circle-fill text-2xl"></i>
          <i className="ri-twitter-fill text-2xl"></i>
          <i className="ri-youtube-fill text-2xl"></i>
          <i className="ri-linkedin-box-fill text-2xl"></i>
          <i className="ri-reddit-fill text-2xl"></i>
        </div> */}
        <a href="/">
          <img width={85} src={LogoFooter} alt="logofooter" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
