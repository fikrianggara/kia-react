import { Link } from "react-router-dom";
import Loader from "@/components/Loader";
import { showFormattedDate } from "@/utils";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { ShareData } from "@/components/ibu-anak/ShareData";
import { CheckBadgeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import {
  UserCircleIcon,
  ArrowLeftIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { PregnancySelection } from "@/components/ibu-anak/PregnancySelection";
import {
  getPregnancyDataByUserId,
  getCheckUpListDataByPatientId,
} from "@/api/data";

export const Dashboard = ({ data }) => {
  const { id } = useParams();

  const user = data[0] ? data[0] : null;

  const [pregnancyData, setPregnancyData] = useState(null);

  const [checkupListData, setCheckupListData] = useState(null);

  useEffect(() => {
    getPregnancyDataByUserId(id, setPregnancyData);

    getCheckUpListDataByPatientId(id, setCheckupListData);
  }, [id]);

  if (!pregnancyData || !checkupListData) return <Loader />;

  return (
    <div className="space-y-4">
      {/* patient overview */}
      <header className="bg-white pb-4 h-fit">
        <div className="bg-sky-600 p-4 text-white pb-2 rounded-b-2xl space-y-2">
          <nav className="flex items-center w-full ">
            <div className="flex space-x-2 items-center  w-full">
              <div className=" w-full space-y-1 flex flex-row justify-between align-middle">
                <div>
                  <div className="flex text-xs items-center">
                    <UserCircleIcon className="w-8 mr-2 mb-2" />
                    <h1 className="font-medium">{user.nama}</h1>
                  </div>

                  <div className="flex text-xs items-center">
                    <MapPinIcon className="w-6" />
                    <h1>{user.alamat}</h1>
                  </div>
                </div>
                <div className="flex space-x-1 items-start">
                  <PregnancySelection
                    preganciesData={[
                      { kehamilan_id: 1, kehamilan_ke: 1 },
                      { kehamilan_id: 2, kehamilan_ke: 2 },
                    ]}
                  />
                  <ShareData />
                </div>
              </div>
            </div>
          </nav>
          {/* patient condition overview start*/}
          <div className="grid grid-cols-3 gap-1 m-auto h-fit p-4 bg-white rounded-xl grid-rows-2">
            <div className="bg-gray-50 h-20 w-full rounded-lg flex m-auto">
              <div className="text-green-400 ring-4 h-16 w-16 bg-gray-50 ring-green-500 rounded-full items-center flex flex-col justify-center m-auto">
                <span className="self-center text-green-500 font-medium text-sm">
                  Janin
                </span>
                <span className="text-xs">Sehat</span>
              </div>
            </div>
            <div className="bg-gray-50 h-20 w-full rounded-lg flex m-auto">
              <div className="text-green-400 ring-4 h-16 w-16 ring-green-500 rounded-full items-center flex flex-col justify-center m-auto">
                <span className="self-center text-green-500 font-medium text-sm">
                  Ibu
                </span>
                <span className="text-xs">Sehat</span>
              </div>
            </div>

            <div className="flex p-2 bg-gray-50 h-full w-full flex-col text-xs items-center justify-center rounded-lg text-center">
              <h2 className="text-black ">Usia Kandungan</h2>
              <h3 className="text-sky-400 font-medium">8 Minggu</h3>
            </div>
            <div className="h-20 p-2 bg-gray-50 w-full rounded-lg flex flex-col text-xs items-center justify-center m-auto text-center">
              <h2 className="text-black ">Estimasi Kelahiran</h2>
              <h3 className="text-sky-400 font-medium">7 Bulan</h3>
            </div>
            <div className="h-20 p-2 bg-gray-50 w-full rounded-lg flex flex-col text-xs items-center justify-center m-auto text-center">
              <h2 className="text-black text-xs ">Check-up Terakhir</h2>
              <h3 className="text-sky-400 font-medium">5 hari yang lalu</h3>
            </div>
            <div className="h-20 p-2 bg-gray-50 w-full rounded-lg flex flex-col text-xs items-center justify-center m-auto text-center">
              <h2 className="text-black text-xs ">Check-up Berikutnya</h2>
              <h3 className="text-sky-400 font-medium">
                {showFormattedDate(new Date())}
              </h3>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex justify-end space-x-2">
              <Link
                to="/ibu-anak"
                className="flex items-center space-x-2 active:bg-sky-700 w-fit p-2 active:opacity-75 pr-4 text-sm rounded-lg"
              >
                <button className="bg-opacity-0 flex justify-evenly items-center space-x-2 rounded-md p-1 px-3 text-white">
                  <ArrowLeftIcon className="w-4" />
                  <span className="ml-2">Kembali</span>
                </button>
              </Link>
            </div>
            <div className="flex justify-end space-x-2">
              <Link
                to={`/ibu-anak/kehamilan/statistik/${pregnancyData[0].id}`}
                className="flex items-center space-x-2 active:bg-sky-700 w-fit p-2 active:opacity-75 pr-4 text-sm rounded-lg"
              >
                <button className=" bg-sky-50 flex py-2 justify-evenly items-center text-sky-500 rounded-md p-1 px-3">
                  {/* <SecurityUpdateGoodOutlined></SecurityUpdateGoodOutlined> */}
                  <CheckBadgeIcon className="w-4 mr-2" />
                  Selengkapnya
                </button>
              </Link>
            </div>
          </div>

          {/* patient condition overview end */}
          {/* back and update data button */}
          <div>
            <div className="flex justify-between"></div>
          </div>
          {/* back and update data button end */}
        </div>
        {/* timeline */}
        <div className="p-3 bg-gray-50 rounded-lg m-4">
          <h1 className="text-black font-medium text-lg">Timeline Kehamilan</h1>

          <div className="w-full text-xs p-4 ">
            {/* timeline graph start */}
            <ol className="items-center grid grid-cols-5 p-2 gap-3 ">
              <li className="mb-6 sm:mb-0 flex-col text-center justify-center items-center">
                <div className="flex items-center text-center justify-center">
                  <div className="flex z-10 justify-center items-center w-6 h-6 bg-sky-200 rounded-full ring-2 ring-sky-400 dark:bg-sky-900  dark:ring-gray-900 shrink-0">
                    {/* <MonitorHeart fontSize="xsmall" className="text-sky-600" /> */}
                  </div>
                  <div className="flex w-full bg-sky-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 mb-2 -ml-[50%]">
                  <span className="text-sky-400 block mb-2 font-normal leading-none  dark:text-gray-500">
                    {
                      showFormattedDate(
                        pregnancyData[0]?.hari_pertama_haid_terakhir
                      ).split(",")[1]
                    }
                  </span>
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="flex z-10 justify-center items-center w-6 h-6 bg-sky-200 rounded-full ring-2 ring-sky-400 dark:bg-sky-900  dark:ring-gray-900 shrink-0">
                    {/* <MonitorHeart fontSize="xsmall" className="text-sky-600" /> */}
                  </div>
                  <div className="flex w-full bg-sky-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 -ml-[20%]">
                  <span className="block mb-2 font-normal leading-none text-sky-400 dark:text-gray-500">
                    Trimester 1
                  </span>
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="flex z-10 justify-center items-center w-6 h-6 bg-sky-200 rounded-full ring-2 ring-sky-400 dark:bg-sky-900  dark:ring-gray-900 shrink-0">
                    {/* <MonitorHeart fontSize="xsmall" className="text-sky-600" /> */}
                  </div>
                  <div className="flex w-full bg-sky-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 -ml-[20%]">
                  <span className="block mb-2 font-normal leading-none text-sky-400 dark:text-gray-500">
                    Trimester 2
                  </span>
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0 ">
                <div className="flex items-center">
                  <div className="flex z-10 justify-center items-center w-6 h-6 bg-sky-200 rounded-full ring-2 ring-sky-400 dark:bg-sky-900  dark:ring-gray-900 shrink-0">
                    {/* <MonitorHeart fontSize="xsmall" className="text-sky-600" /> */}
                  </div>
                  <div className="flex w-full bg-sky-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 -ml-[20%] text-clip">
                  <span className="block mb-2 font-normal leading-none text-sky-400 dark:text-gray-500">
                    Trimester 3
                  </span>
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="flex z-10 justify-center items-center w-6 h-6 bg-gray-200 rounded-full ring-0 ring-white dark:bg-sky-900 sm:ring-8 dark:ring-gray-900 shrink-0"></div>
                </div>
                <div className="mt-3 -ml-[20%] text-clip">
                  <span className="block mb-2 font-normal leading-none text-gray-400 dark:text-gray-500 ">
                    {
                      showFormattedDate(
                        pregnancyData[0]?.estimasi_tanggal_kelahiran
                      ).split(",")[1]
                    }
                  </span>
                </div>
              </li>
            </ol>
            {/* timeline graph end */}
          </div>
        </div>
        {/* timeline end */}
      </header>
      {/* patient overview end */}

      <div className="notifications p-4 bg-white">
        <div>
          <h2 className="text-black font-medium text-lg p-4">Notifikasi</h2>
        </div>
        <div>
          <div className="bg-gradient-to-r from-red-500 to-blue-500  rounded-lg text-white p-4 w-full">
            <h3 className="w-64 text-start text-lg font-bold align-middle flex">
              {/* <Warning className="mr-2" /> Informasi Imunisasi */}
            </h3>
            <div className="flex items-start space-x-2">
              <InformationCircleIcon className="w-7" />
              <p className="flex text-sm justify-between flex-1">
                Puskesma Bidara Cina mengadakan kelas Ibu pada tanggal{" "}
                {new Date().toLocaleDateString()}, membahas tentang kehamilan,
                persalinan, perawatan masa nifas, perawatan bayi baru lahir, dan
                pemenuhan gizi
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* main */}
      <main className="p-4 bg-white">
        {/* checkup card component list start */}
        <h2 className="text-black font-medium text-lg p-4">Pemeriksaan</h2>
        <div className="flex m-auto">
          <ul className="space-y-3 m-auto">
            {checkupListData.map((checkup) => (
              <li
                key={checkup.id}
                className="p-6 space-y-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex items-center space-x-2">
                  {/* <MonitorHeart className="text-sky-800"></MonitorHeart> */}
                  <h3 className="text-lg font-semibold tracking-tight  dark:text-white text-sky-800">
                    Pemeriksaan{" "}
                    {checkup.tipe_pemeriksaan == "biasa" ? "Rutin" : "Khusus"}
                  </h3>
                </div>
                <div className="flex space-x-2 items-center text-sm">
                  <UserCircleIcon className="w-8 text-sky-800" />
                  <span>
                    {checkup.pemeriksa.jabatan.toLowerCase().includes("dokter")
                      ? "dr. "
                      : ""}
                    {checkup.pemeriksa.nama}
                  </span>
                </div>
                <div className="text-sm ">
                  <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                    Berdasarkan pemeriksaan, diketahui bahwa{" "}
                    {checkup.kesimpulan}.{" "}
                    <span className="text-sky-700">
                      direkomendasikan untuk {checkup.rekomendasi}
                    </span>
                  </p>
                </div>
                <div className="flex justify-between">
                  <Link to={`/ibu-anak/kehamilan/detail/${checkup.id}`}>
                    <span className=" bg-sky-50 text-xs flex justify-evenly items-center text-sky-500 rounded-lg p-1 px-3">
                      Selengkapnya
                    </span>
                  </Link>

                  <div className="text-sky-800 text-xs">
                    {/* <CalendarToday fontSize="xSmall"></CalendarToday> */}{" "}
                    {showFormattedDate(checkup.tanggal_pemeriksaan)}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div></div>
        {/* checkup card component list end */}
      </main>
      {/* main end */}
      <footer></footer>
    </div>
  );
};
