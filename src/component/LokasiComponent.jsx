function Lokasi() {
  return (
    <div className="Lokasi" id="lokasi">
      <div className="container pt-28 mx-auto">
        <div className="lokasi">
          <h1 className="text-3xl lg:text-5xl font-bold text-center">Lokasi</h1>
        </div>
        <div className="grid lg:grid-cols-2 lg:pt-20 ">
          <div className="alamat lg:px-40 lg:pt-8 pl-2 pt-10 pb-5">
            <h2 className="font-bold text-xl lg:text-4xl pb-6">Pojok Garasi</h2>
            <div className="flex items-center gap-2">
              <i className="ri-map-pin-5-line text-2xl"></i>
              <p className="text-lg">Jalan Kemang Barat No. 7G</p>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-calendar-schedule-line text-2xl"></i>
              <p className="text-lg">Buka : 09.00 - 17.00</p>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-account-box-line text-2xl"></i>
              <p className="text-lg">M Taufik</p>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-phone-line text-2xl"></i>
              <p className="text-lg">+62 857-1871-4888</p>
            </div>
          </div>
          <div className="maps lg:px-28 mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.4999775096481!2d106.81842593245382!3d-6.26374035989093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f2298a74a3d9%3A0x18eab1a351949991!2sJl.%20Kemang%20Barat%20No.7G%2C%20RT.9%2FRW.1%2C%20Bangka%2C%20Kec.%20Mampang%20Prpt.%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012730!5e0!3m2!1sid!2sid!4v1727788059329!5m2!1sid!2sid"
              width="400"
              height="300"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lokasi;
