import { useParams } from "react-router-dom";
import { getDatesInRange, showFormattedDate } from "@/utils/index";
import React, { useState, useEffect } from "react";
import { LineChart } from "@/components/Chart/LineChart";
import { getPregnancyDataById, getCheckupDataById } from "@/api/data";
import {
  MapPinIcon,
  ArrowLeftIcon,
  UserCircleIcon,
  PlusIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { AddBodyWeight } from "@/components/ibu-anak/AddBodyWeight";
import { CalendarCustom } from "@/components/Chart/Calendar";
import { Link } from "react-router-dom";
import Loader from "@/components/Loader";

export const Statistik = ({ data }) => {
  const { id } = useParams();
  const user = data[0] ? data[0] : null;
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [pregnancyData, setPregnancyData] = useState(null);
  const [checkupData, setCheckupListData] = useState(null);

  useEffect(() => {
    getPregnancyDataById(id, setPregnancyData);

    getCheckupDataById(id, setCheckupListData);
  }, [id]);

  if (!pregnancyData || !checkupData) <Loader />;

  return (
    <>
      {pregnancyData && checkupData ? (
        <div className="space-y-4">
          {/* patient overview */}
          <header className="bg-white pb-4 h-fit">
            <div className="p-4 text-black pb-2 rounded-b-2xl space-y-4">
              <nav className="flex items-center ">
                <div className="flex space-x-2 items-center ">
                  <div className=" space-y-1 ">
                    <div className="flex text-xs items-center">
                      <UserCircleIcon className="w-8 mr-2 mb-2" />
                      <h1 className="font-medium">{user.nama}</h1>
                    </div>

                    <div className="flex text-xs items-center ">
                      <MapPinIcon className="w-8 mr-2 mb-2" />
                      <h1>{user.alamat}</h1>
                    </div>
                  </div>
                </div>
              </nav>
              <hr />
              {/* patient profile start*/}
              <h1 className="text-lg font-bold text-center">
                Pemeriksaan pada{" "}
                {showFormattedDate(
                  pregnancyData.pemeriksaan_terakhir.tanggal_pemeriksaan
                )}
              </h1>
              <div>
                {/* <div className="bg-gray-50 h-20 w-full rounded-lg flex m-auto">
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
                </div> */}
                <ul className="grid grid-cols-3 gap-1 m-auto h-fit p-4 bg-white rounded-xl grid-rows-2">
                  {checkupData.laboratorium.pemeriksaan.map((item) => (
                    <li key={item.nama}>
                      <div className="flex p-2 bg-gray-50 h-full w-full flex-col text-xs items-center justify-center rounded-lg text-center">
                        <h2 className="text-black ">{item.nama}</h2>
                        <h3 className="text-sky-400 font-medium">
                          {item.nilai} {item.satuan}
                        </h3>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* patient profile end */}
              {/* back and update data button */}
              <div className="">
                <div className="flex justify-between">
                  <Link
                    to={`/ibu-anak/kehamilan/${user.id}`}
                    className="flex items-center space-x-2 active:bg-gray-200 w-fit p-2 active:opacity-75 pr-4 text-sm rounded-lg"
                  >
                    <ArrowLeftIcon className="w-4" />
                    <span>Kembali</span>
                  </Link>
                  <AddBodyWeight />
                  {isConfirmed ? (
                    <button
                      disabled
                      className=" bg-sky-50 flex py-1 sm:py-2 justify-evenly items-center text-sky-500 rounded-md px-2 sm:px-3 text-xs sm:text-sm"
                    >
                      {/* <SecurityUpdateGoodOutlined></SecurityUpdateGoodOutlined> */}
                      <CheckCircleIcon className="w-4 mr-2 text-green-500" />
                      TTD Dikonfirmasi
                    </button>
                  ) : (
                    <button
                      onClick={(e) => setIsConfirmed(true)}
                      className=" bg-green-50 flex py-1 sm:py-2 justify-evenly items-center text-green-500 rounded-md px-2 sm:px-3 text-xs sm:text-sm"
                    >
                      {/* <SecurityUpdateGoodOutlined></SecurityUpdateGoodOutlined> */}
                      <PlusIcon className="w-4 mr-2" />
                      Konfirmasi TTD
                    </button>
                  )}
                </div>
              </div>
              {/* back and update data button end */}
            </div>
          </header>
          {/* patient overview end */}

          {/* main */}
          <main className="p-4 bg-white">
            <div className="space-y-2">
              <LineChart judul={"Berat Badan (Kilogram)"} color="sky" id="1" />
            </div>
            {/* <div className="space-y-2">
              <LineChart
                judul={"Tablet Tambah Darah (TTD)"}
                color="pink"
                data
                id="1"
              />
            </div> */}
            <div className="space-y-2  p-2 rounded border font-medium">
              <h2 className="text-lg">Tablet Tambah Darah (TTD)</h2>
              <CalendarCustom
                datesInput={getDatesInRange(new Date("2022-10-15"), new Date())}
              />
            </div>
            {/* <div className="space-y-2">
              <LineChart judul={"Gula Darah Puasa"} id="2" />
            </div> */}
          </main>
          {/* main end */}
          <footer></footer>
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
};
