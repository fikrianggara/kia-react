import React from "react";
import {
  ArrowBackOutlined,
  PregnantWomanOutlined,
  AirlineSeatReclineExtraOutlined,
  BabyChangingStationOutlined,
} from "@mui/icons-material";

import { Link } from "react-router-dom";
const Menu = ({ data }) => {
  const user = data[0] ? data[0] : null;
  return (
    <div className="relative min-h-screen">
      {/* header start */}
      <header className="text-center p-4 bg-white space-y-8 pb-4">
        <h1 className="text-black text-2xl font-bold">Monitoring Kehamilan</h1>
        <h2 className="text-sky-600 font-medium">
          kami membantu anda selama periode kehamilan agar kondisi janin dan ibu
          selalu sehat
        </h2>
        <Link to="/">
          <div className="w-12 h-12 p-2 rounded bg-gray-200 flex items-center text-sky-700 mt-4">
            <ArrowBackOutlined fontSize="large"></ArrowBackOutlined>
          </div>
        </Link>
      </header>
      {/* header end */}
      {/* pregnany monitoring features menu section*/}
      <main className="mt-4 bg-white h-fit space-y-10 flex">
        <section className="grid grid-cols-3 gap-6 m-auto h-fit p-4 ">
          <Link to={`/monitoring/kehamilan/${user?.id ? user.id : "menu"}`}>
            <div className="space-y-2">
              <div className="w-full aspect-square rounded-[20px] bg-amber-400 flex items-center justify-center text-white animate-pulse">
                <PregnantWomanOutlined
                  style={{ width: 60, height: 60 }}
                ></PregnantWomanOutlined>
              </div>
              <p className="text-center text-xs">Kehamilan</p>
            </div>
          </Link>

          <Link to="/monitoring/kehamilan/menu">
            <div className="space-y-2">
              <div className="w-full aspect-square rounded-[20px] bg-red-500 flex items-center justify-center text-white">
                <AirlineSeatReclineExtraOutlined
                  style={{ width: 60, height: 60 }}
                ></AirlineSeatReclineExtraOutlined>
              </div>
              <p className="text-center text-xs">Persalinan</p>
            </div>
          </Link>

          <Link to="/monitoring/kehamilan/menu">
            <div className="space-y-2">
              <div className="w-full aspect-square rounded-[20px] bg-sky-600 flex items-center justify-center text-white">
                <BabyChangingStationOutlined
                  style={{ width: 60, height: 60 }}
                ></BabyChangingStationOutlined>
              </div>
              <p className="text-center text-xs">Pasca Kelahiran</p>
            </div>
          </Link>
        </section>
      </main>
      {/* end of primary feature section*/}

      {/* footer section */}
      <footer className="absolute bottom-12 inset-x-0 mb-12 text-center underline text-black">
        <a href="mailto: fikriseptriananggara@gmail.com">
          <p>Berikan Saran</p>
        </a>
      </footer>

      {/* end of footer section */}
    </div>
  );
};

export default Menu;
