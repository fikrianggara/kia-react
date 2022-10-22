import React from "react";
import {
  AccountCircleOutlined,
  NotificationsNoneOutlined,
  KeyboardArrowDownOutlined,
  CropFreeOutlined,
  HelpOutlineOutlined,
} from "@mui/icons-material";

import { Link } from "react-router-dom";
const Home = ({ data }) => {
  const user = data[0] ? data[0] : null;

  return (
    <div className="min-h-screen relative">
      <header className="h-fit bg-white p-4 pb-8">
        <nav>
          <ul className="flex justify-between">
            <li className="flex items-center space-x-4">
              <div>
                <AccountCircleOutlined fontSize="large"></AccountCircleOutlined>
              </div>
              <div>
                <span className="font-medium">
                  Hi, <span className="underline">{user?.nama}</span>
                </span>
              </div>
            </li>
            <li>
              <NotificationsNoneOutlined fontSize="large"></NotificationsNoneOutlined>
            </li>
          </ul>
        </nav>
        <div className="shadow rounded-lg mt-3">
          <div className="py-2 px-4 bg-sky-500 rounded-t-lg text-white text-lg">
            <h2 className="font-medium ">Entering Public Place ? </h2>
            <h3>Stay alert to stay safe</h3>
          </div>
          <div className="py-2 px-4 flex text-black items-center justify-between">
            <div className="w-2/3 flex items-center text-sm">
              <KeyboardArrowDownOutlined fontSize="large"></KeyboardArrowDownOutlined>
              <h3>Check-in Preferences</h3>
            </div>

            <button className="w-1/3 bg-sky-100 text-xs flex justify-evenly items-center text-sky-500 rounded-full p-2">
              <CropFreeOutlined fontSize="medium"></CropFreeOutlined> Check-in
            </button>
          </div>
        </div>
      </header>
      <main className="mt-4 bg-white h-fit space-y-10">
        <section className="grid grid-cols-4 gap-6 m-auto h-fit p-4 ">
          <div className="space-y-2">
            <div className="w-full aspect-square rounded-[20px] bg-amber-400"></div>
            <p className="text-center text-xs">Vaccine and Immunization</p>
          </div>
          <div className="space-y-2">
            <div className="w-full aspect-square rounded-[20px] bg-red-500"></div>
            <p className="text-center text-xs">Covid-19 Test Result</p>
          </div>
          <div className="space-y-2">
            <div className="w-full aspect-square rounded-[20px] bg-green-500"></div>
            <p className="text-center text-xs">Travel Regulation</p>
          </div>

          <div className="space-y-2">
            <div className="w-full aspect-square rounded-[20px] bg-amber-400"></div>
            <p className="text-center text-xs">Telemedicine</p>
          </div>
          <div className="space-y-2">
            <div className="w-full aspect-square rounded-[20px] bg-green-500"></div>
            <p className="text-center text-xs">Healthcare Facility</p>
          </div>
          <div className="space-y-2">
            <div className="w-full aspect-square rounded-[20px] bg-red-500"></div>
            <p className="text-center text-xs">Covid-19 Statistic</p>
          </div>
          <div className="space-y-2">
            <div className="w-full aspect-square rounded-[20px] bg-amber-400"></div>
            <p className="text-center text-xs">Find Hospital Bed</p>
          </div>
          <Link to="/kehamilan/menu">
            <div className="space-y-2">
              <div className="w-full aspect-square rounded-[20px] bg-sky-600"></div>
              <p className="text-center text-xs">Pregnancy Monitoring</p>
            </div>
          </Link>
        </section>
        <section className="space-y-4">
          <h1 className="px-4 text-xl text-black">Health Information</h1>
          <div className="flex overflow-x-scroll space-x-4 text-transparent p-4 pb-6">
            <div className="w-64 h-36 bg-sky-700 rounded-lg text-white font-bold p-4 text-center">
              <h1 className="w-64 text-start text-lg pl-4">
                Pandemi Belum Selesai
              </h1>
              <h2 className="text-sm mt-2">
                Tetap Disiplin Prokes di Ruang Publik
              </h2>
              <p>#LawanCOVID19</p>
            </div>
            <div className="w-64 h-36 bg-amber-400 rounded-lg text-white font-bold p-4 text-center">
              <h1 className="w-64 text-start text-lg pl-4 text-red-600">
                Informasi Kebijakan
              </h1>
              <h2 className="text-sm mt-2">
                Antisipasi Cegah Gangguan Ginjal Anak
              </h2>
              <button className="bg-green-700 rounded-full text-xs px-2 py-1 self-start mt-2">
                Selengkapnya
              </button>
            </div>
          </div>
        </section>
      </main>
      <div className="fixed bottom-10 right-5 bg-white rounded-full p-3 shadow text-blue-400">
        <HelpOutlineOutlined fontSize="large"></HelpOutlineOutlined>
      </div>
    </div>
  );
};

export default Home;
