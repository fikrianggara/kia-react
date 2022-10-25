import React from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "../../components/menu/Item";
import {
  ArrowBackOutlined,
  PregnantWomanOutlined,
  BabyChangingStationOutlined,
  AirlineSeatReclineExtraOutlined,
} from "@mui/icons-material";

import IbuAnak1 from "../../assets/ibu-anak/1.png"
import IbuAnak2 from "../../assets/ibu-anak/2.png"
import IbuAnak3 from "../../assets/ibu-anak/3.png"
import IbuAnak4 from "../../assets/ibu-anak/4.png"
import { InfoCard } from "../../components/ibu-anak/InfoCard";

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
        <Link
          to="/"
          className="flex items-center space-x-2 active:bg-sky-700 w-fit p-2 active:opacity-75 pr-4 text-sm rounded-lg text-sky-700"
        >
          <ArrowBackOutlined></ArrowBackOutlined>
          <span>Kembali</span>
        </Link>
      </header>

      <main className="mt-4 bg-white h-fit space-y-10 flex">
        <section className="grid grid-cols-3 gap-6 m-auto h-fit p-4 ">
          <Link to={`/ibu-anak/kehamilan/${user?.id ? user.id : "menu"}`}>
            <MenuItem title="Kehamilan" className="bg-amber-400 animate-pulse">
              <PregnantWomanOutlined
                fontSize="large"
                className="w-8 h-8 md:w-16 md:h-16"
              />
            </MenuItem>
          </Link>
          <Link to="/ibu-anak">
            <MenuItem title="Persalinan" className="bg-red-500">
              <AirlineSeatReclineExtraOutlined
                fontSize="large"
                className="w-8 h-8 md:w-16 md:h-16"
              />
            </MenuItem>
          </Link>
          <Link to="/ibu-anak">
            <MenuItem title="Pasca Kelahiran" className="bg-sky-600">
              <BabyChangingStationOutlined
                fontSize="large"
                className="w-8 h-8 md:w-16 md:h-16"
              />
            </MenuItem>
          </Link>
        </section>
      </main>

      <section className="space-y-4 bg-white py-6 mt-2">
        <h1 className="px-4 text-xl text-black">Informasi Kehamilan</h1>
        <div className="gap-5 text-transparent p-4 flex flex-col align-middle">
          <InfoCard title="Periksa Kehamilan" description="Pastikan ibu hamil mendapatkan pelayanan pemeriksaan kehamilan y">
            <div className="w-full min-w-[400px] border shadow-sm rounded-lg text-white font-bold text-center">
              <img src={IbuAnak1} alt="Ilustrasi" />
            </div>
          </InfoCard>
          <InfoCard title="Perawatan Kehamilan" description="Perawatan Sehari-hari Ibu Hamil">
            <div className="w-full min-w-[400px] border shadow-sm rounded-lg text-white font-bold  text-center">
              <img src={IbuAnak2} alt="Ilustrasi" />
            </div>
          </InfoCard>
          <InfoCard title="Porsi Makan Minum" description="Porsi makan dan minum ibu hamil untuk kebutuhan sehari-hari">
            <div className="w-full min-w-[400px] border shadow-sm rounded-lg text-white font-bold  text-center">
              <img src={IbuAnak3} alt="Ilustrasi" />
            </div>
          </InfoCard>
          <InfoCard title="Persalinan" description="Persiapan melahirkan (Persalinan)">
            <div className="w-full min-w-[400px] border shadow-sm rounded-lg text-white font-bold  text-center">
              <img src={IbuAnak4} alt="Ilustrasi" />
            </div>
          </InfoCard>
        </div>
      </section>

      <footer className="pb-16 text-center underline text-black bg-white">
        <a href="mailto: fikriseptriananggara@gmail.com">
          <p>Berikan Saran</p>
        </a>
      </footer>
    </div>
  );
};
