import React from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "../../components/menu/Item";
import {
  ArrowBackOutlined,
  PregnantWomanOutlined,
  BabyChangingStationOutlined,
  AirlineSeatReclineExtraOutlined,
} from "@mui/icons-material";


export const MenuIbuAnak = ({ data }) => {
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

      <main className="mt-4 bg-white h-fit space-y-10 flex">
        <section className="grid grid-cols-3 gap-6 m-auto h-fit p-4 ">
          <Link to={`/ibu-anak/kehamilan/${user?.id ? user.id : "menu"}`}>
            <MenuItem title="Kehamilan" className="bg-amber-400">
              <PregnantWomanOutlined className="w-8 h-8 md:w-16 md:h-16" />
            </MenuItem>
          </Link>
          <Link to="/ibu-anak">
            <MenuItem title="Persalinan" className="bg-red-500">
              <AirlineSeatReclineExtraOutlined className="w-8 h-8 md:w-16 md:h-16" />
            </MenuItem>
          </Link>
          <Link to="/ibu-anak">
            <MenuItem title="Pasca Kelahiran" className="bg-sky-600">
              <BabyChangingStationOutlined className="w-8 h-8 md:w-16 md:h-16" />
            </MenuItem>
          </Link>
        </section>
      </main>

      <footer className="absolute bottom-12 inset-x-0 mb-12 text-center underline text-black">
        <a href="mailto: fikriseptriananggara@gmail.com">
          <p>Berikan Saran</p>
        </a>
      </footer>

    </div>
  );
};
