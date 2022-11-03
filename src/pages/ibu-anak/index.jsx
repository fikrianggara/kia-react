import React from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "@/components/menu/Item";
import { InfoCard } from "@/components/ibu-anak/InfoCard";
import { UserIcon, ArrowLeftIcon } from "@heroicons/react/24/outline"

// static images
import IbuAnak1 from "@/assets/ibu-anak/1.png";
import IbuAnak2 from "@/assets/ibu-anak/2.png";
import IbuAnak3 from "@/assets/ibu-anak/3.png";
import IbuAnak4 from "@/assets/ibu-anak/4.png";


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
        <Link to="/" className="flex items-center space-x-2 active:bg-sky-200 hover:bg-sky-100 w-fit p-2 active:opacity-75 pr-4 text-sm rounded-lg text-sky-700">
          <ArrowLeftIcon className="w-6" />
          <span>Kembali</span>
        </Link>
      </header>

      <main className="mt-4 bg-white h-fit space-y-10 flex">
        <section className="grid grid-cols-3 gap-6 m-auto h-fit p-4 ">
          <Link to={`/ibu-anak/kehamilan/${user?.id ? user.id : ""}`}>
            <MenuItem title="Kehamilan" className="bg-amber-400 hover:bg-amber-500 transition-all duration-150">
              <div className="h-8 w-8 md:w-12 md:h-12">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="100%" fill="#FFFFFF">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z" />
                </svg>
              </div>
            </MenuItem>
          </Link>
          <Link to={`/ibu-anak/persalinan/${user?.id ? user.id : ""}`}>
            <MenuItem title="Persalinan" className="bg-red-500 hover:bg-red-600 transition-all duration-150">
              <div className="h-8 w-8 md:w-12 md:h-12">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="100%" fill="#FFFFFF">
                  <g><rect fill="none" height="24" width="24" /><path d="M14,8v2h-3L8.31,8.82L7,12.75V22H3V12l1.58-4.63C4.96,6.25,6.22,5.69,7.3,6.18l4.15,1.83L14,8z M8,1C6.9,1,6,1.9,6,3 s0.9,2,2,2s2-0.9,2-2S9.1,1,8,1z M9,19h12v-2H9V19z M19.5,16c0.83,0,1.5-0.67,1.5-1.5c0-0.83-0.67-1.5-1.5-1.5S18,13.67,18,14.5 C18,15.33,18.67,16,19.5,16z M13,12c0-0.55-0.45-1-1-1H9v2h2v1c0,1.1,0.9,2,2,2h2c1.1,0,2-0.9,2-2v-3h-2v2h-2V12z" /></g>
                </svg>
              </div>
            </MenuItem>
          </Link>
          <Link to="/ibu-anak">
            <MenuItem title="Perkembangan Anak" className="bg-sky-600 hover:bg-sky-500 transition-all duration-150">
              <div className="h-8 w-8 md:w-12 md:h-12">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="100%" fill="#FFFFFF">
                  <path d="M0 0h24v24H0V0z" fill="none" /><circle cx="14.5" cy="10.5" r="1.25" /><circle cx="9.5" cy="10.5" r="1.25" /><path d="M22.94 11.34c-.25-1.51-1.36-2.74-2.81-3.17-.53-1.12-1.28-2.1-2.19-2.91C16.36 3.85 14.28 3 12 3s-4.36.85-5.94 2.26c-.92.81-1.67 1.8-2.19 2.91-1.45.43-2.56 1.65-2.81 3.17-.04.21-.06.43-.06.66 0 .23.02.45.06.66.25 1.51 1.36 2.74 2.81 3.17.52 1.11 1.27 2.09 2.17 2.89C7.62 20.14 9.71 21 12 21s4.38-.86 5.97-2.28c.9-.8 1.65-1.79 2.17-2.89 1.44-.43 2.55-1.65 2.8-3.17.04-.21.06-.43.06-.66 0-.23-.02-.45-.06-.66zM19 14c-.1 0-.19-.02-.29-.03-.2.67-.49 1.29-.86 1.86C16.6 17.74 14.45 19 12 19s-4.6-1.26-5.85-3.17c-.37-.57-.66-1.19-.86-1.86-.1.01-.19.03-.29.03-1.1 0-2-.9-2-2s.9-2 2-2c.1 0 .19.02.29.03.2-.67.49-1.29.86-1.86C7.4 6.26 9.55 5 12 5s4.6 1.26 5.85 3.17c.37.57.66 1.19.86 1.86.1-.01.19-.03.29-.03 1.1 0 2 .9 2 2s-.9 2-2 2zm-7 3c2.01 0 3.74-1.23 4.5-3h-9c.76 1.77 2.49 3 4.5 3z" />
                </svg>
              </div>
            </MenuItem>
          </Link>
        </section>
      </main>

      <section className="space-y-4 bg-white py-6 mt-2">
        <h1 className="px-4 text-xl text-black">Informasi Kehamilan</h1>
        <div className="gap-5 text-transparent p-4 flex flex-col align-middle">
          <InfoCard
            title="Periksa Kehamilan"
            description="Pastikan ibu hamil mendapatkan pelayanan pemeriksaan kehamilan y"
          >
            <div className="w-full min-w-[400px] border shadow-sm rounded-lg text-white font-bold text-center">
              <img src={IbuAnak1} alt="Ilustrasi" />
            </div>
          </InfoCard>
          <InfoCard
            title="Perawatan Kehamilan"
            description="Perawatan Sehari-hari Ibu Hamil"
          >
            <div className="w-full min-w-[400px] border shadow-sm rounded-lg text-white font-bold  text-center">
              <img src={IbuAnak2} alt="Ilustrasi" />
            </div>
          </InfoCard>
          <InfoCard
            title="Porsi Makan Minum"
            description="Porsi makan dan minum ibu hamil untuk kebutuhan sehari-hari"
          >
            <div className="w-full min-w-[400px] border shadow-sm rounded-lg text-white font-bold  text-center">
              <img src={IbuAnak3} alt="Ilustrasi" />
            </div>
          </InfoCard>
          <InfoCard
            title="Persalinan"
            description="Persiapan melahirkan (Persalinan)"
          >
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
