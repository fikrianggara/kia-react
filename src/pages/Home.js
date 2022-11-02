import React from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "../components/menu/Item";
import {
  CropFreeOutlined,
  HelpOutlineOutlined,
  AccountCircleOutlined,
  NotificationsNoneOutlined,
  KeyboardArrowDownOutlined,
} from "@mui/icons-material";

const Header = ({ user }) => {
  return (
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

      <div className="shadow rounded-xl mt-3">
        <div className="py-2 px-4 bg-sky-500 rounded-t-xl text-white text-lg">
          <h2 className="font-medium ">Entering Public Place ? </h2>
          <h3>Stay alert to stay safe</h3>
        </div>
        <div className="py-2 px-4 flex text-black items-center justify-between">
          <div className="w-2/3 flex items-center text-sm">
            <KeyboardArrowDownOutlined fontSize="large" />
            <h3>Check-in Preferences</h3>
          </div>

          <button className="w-1/3 bg-sky-100 text-xs flex justify-evenly items-center text-sky-500 rounded-full p-2">
            <CropFreeOutlined fontSize="medium" />
            Check-in
          </button>
        </div>
      </div>
    </header>
  );
};

const Menu = () => {
  return (
    <section className="grid grid-cols-4 gap-6 m-auto h-fit p-4 ">
      <MenuItem title="Vaccine and Immunization" className="bg-amber-400" />
      <MenuItem title="Covid-19 Test Result" className="bg-red-400" />
      <MenuItem title="Travel Regulation" className="bg-green-400" />
      <MenuItem title="Telemedicine" className="bg-amber-400" />
      <MenuItem title="Healthcare Facility" className="bg-green-400" />
      <MenuItem title="Covid-19 Statistic" className="bg-red-400" />
      <MenuItem title="Find Hospital Bed" className="bg-amber-400" />
      <Link to="/ibu-anak">
        <MenuItem title="Peduli Ibu Anak" className="bg-sky-600 animate-pulse">
          <div className="w-sm">
            <svg
              width="48"
              viewBox="0 0 275 309"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M137.245 96.5073C168.846 96.5073 194.441 74.9138 194.441 48.2537C194.441 21.5935 168.846 0 137.245 0C105.644 0 80.049 21.5935 80.049 48.2537C80.049 74.9138 105.644 96.5073 137.245 96.5073ZM99.0667 246.576L117.369 227.275L73.4 196.392L40.5837 231.014C32.4333 239.579 32.2188 251.764 40.0118 260.57L74.3294 299.173C79.9775 305.506 88.5569 308.824 97.2078 308.824C103.142 308.824 109.219 307.255 114.367 303.998C127.021 296.036 129.524 280.897 120.086 270.221L99.0667 246.576ZM201.09 196.392L157.121 227.275L175.423 246.576L154.404 270.221C144.967 280.897 147.469 296.036 160.123 303.998C165.271 307.255 171.277 308.824 177.282 308.824C186.005 308.824 194.584 305.506 200.161 299.173L234.478 260.57C242.271 251.764 242.057 239.579 233.906 231.014L201.09 196.392V196.392ZM269.296 87.4598C260.217 76.5424 242.414 73.9488 229.474 81.5487L200.447 98.7391C162.769 121.056 111.65 121.056 74.0434 98.7391L45.0164 81.609C32.0758 73.9488 14.2736 76.6027 5.1937 87.4598C-3.88617 98.3772 -0.74039 113.396 12.1287 121.056L41.1557 138.247C53.3099 145.425 66.465 150.853 80.049 155.075V173.713H194.441V155.136C208.025 150.913 221.18 145.485 233.334 138.307L262.361 121.117C275.302 113.396 278.376 98.3772 269.296 87.4598Z"
                fill="white"
              />
            </svg>
          </div>
        </MenuItem>
      </Link>
    </section>
  );
};

const Informations = () => {
  return (
    <section className="space-y-4">
      <h1 className="px-4 text-xl text-black">Health Information</h1>
      <ul className="flex overflow-x-scroll scroll-px-8 snap-x space-x-4 text-transparent p-4 pb-6">
        <li className="snap-start w-64 h-36 bg-sky-700 rounded-lg text-white font-bold p-4 text-center">
          <h1 className="w-64 text-start text-lg pl-4">
            Pandemi Belum Selesai
          </h1>
          <h2 className="text-sm mt-2">
            Tetap Disiplin Prokes di Ruang Publik
          </h2>
          <p>#LawanCOVID19</p>
        </li>
        <li className="snap-start w-64 h-36 bg-amber-400 rounded-lg text-white font-bold p-4 text-center">
          <h1 className="w-64 text-start text-lg pl-4 text-red-600">
            Informasi Kebijakan
          </h1>
          <h2 className="text-sm mt-2">
            Antisipasi Cegah Gangguan Ginjal Anak
          </h2>
          <button className="bg-green-700 rounded-full text-xs px-2 py-1 self-start mt-2">
            Selengkapnya
          </button>
        </li>
      </ul>
    </section>
  );
};

const FAB = () => {
  return (
    <div className="fixed bottom-10 right-5 bg-white rounded-full p-3 shadow text-blue-400">
      <HelpOutlineOutlined fontSize="large"></HelpOutlineOutlined>
    </div>
  );
};

const Home = ({ data }) => {
  const user = data[0] ?? null;

  return (
    <div className="min-h-screen relative">
      <Header user={user} />

      <main className="mt-4 bg-white h-fit space-y-10">
        <Menu />
        <Informations />
      </main>
      <FAB />
    </div>
  );
};

export default Home;
