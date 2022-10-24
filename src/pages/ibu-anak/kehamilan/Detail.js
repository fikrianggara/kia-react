import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getPregnancyDataByUserId,
  getCheckUpListDataById,
} from "../../../api/data";
import { showFormattedDate } from "../../../utils/index";
import {
  AccountCircle,
  MonitorHeart,
  ArrowBackOutlined,
  SecurityUpdateGoodOutlined,
  LocationOn,
  CalendarToday,
  HealthAndSafety,
  AddLocation,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import moment from "moment-with-locales-es6";
moment.locale("id");

export const Detail = ({ data }) => {
  const { id } = useParams();
  const user = data[0] ? data[0] : null;
  const [pregnancyData, setPregnancyData] = useState(null);
  const [checkupData, setCheckupListData] = useState(null);
  let pregnancyAge = 0;
  let lastCheckup = 0;
  let jarakHinggaKelahiran = 0;

  useEffect(() => {
    getPregnancyDataByUserId(id, setPregnancyData);
    getCheckUpListDataById(id, setCheckupListData);
  }, [id]);
  if (pregnancyData !== null) {
    pregnancyAge = moment(
      pregnancyData[0]?.hari_pertama_haid_terakhir
        ? pregnancyData[0]?.hari_pertama_haid_terakhir
        : new Date(),
      "YYYY-MM-DD"
    )
      .fromNow()
      .split(" ")
      .splice(0, 2)
      .join(" ");
    lastCheckup = moment(
      pregnancyData[0]?.pemeriksaan_terakhir
        ? pregnancyData[0]?.pemeriksaan_terakhir.tanggal_pemeriksaan
        : new Date()
    )
      .fromNow()
      .split(" ")
      .splice(0, 2)
      .join(" ");

    jarakHinggaKelahiran = moment(
      pregnancyData[0]?.estimasi_tanggal_kelahiran
        ? pregnancyData[0]?.estimasi_tanggal_kelahiran
        : new Date()
    ).fromNow();
  }
  if (!checkupData) {
    return <span>loading...</span>;
  }
  return (
    <>
      {checkupData ? (
        <div className="space-y-4">
          {/* patient overview */}
          <header className="bg-white pb-4 h-fit">
            <div className="p-4 text-black pb-2 rounded-b-2xl space-y-4">
              <nav className="flex items-center ">
                <div className="flex space-x-2 items-center ">
                  <div className=" space-y-1 ">
                    <div className="flex text-xs items-center">
                      <AccountCircle></AccountCircle>
                      <h1 className="font-medium">{user.nama}</h1>
                    </div>

                    <div className="flex text-xs items-center">
                      <LocationOn />
                      <h1>{user.alamat}</h1>
                    </div>
                  </div>
                </div>
              </nav>
              <hr />
              {/* 
patient profile start
*/}
              <h1 className="text-lg font-bold text-center">
                Hasil Pemeriksaan pada{" "}
                {showFormattedDate(checkupData.tanggal_pemeriksaan)}
              </h1>
              <h2 className="text-black font-medium">Ringkasan</h2>
              <div className="space-y-4">
                <ul className="grid grid-cols-2 text-sm space-y-2 items-center">
                  <li className="flex space-x-2 items-center text-sky-800 font-medium">
                    <AccountCircle></AccountCircle>
                    <span>
                      {checkupData.pemeriksa.jabatan
                        .toLowerCase()
                        .includes("dokter")
                        ? "dr. "
                        : ""}
                      {checkupData.pemeriksa.nama}
                    </span>
                  </li>
                  <li>
                    <p>
                      <AddLocation />
                      {checkupData.tempat.nama}, {checkupData.tempat.alamat}
                    </p>
                  </li>
                  <li className="">Trimester ke {checkupData.trimester}</li>

                  <li>
                    Minggu pemeriksaan ke {checkupData.minggu_pemeriksaan}
                  </li>
                  <li>
                    Urutan pemeriksaan ke {checkupData.urutan_pemeriksaan}
                  </li>
                  <li>
                    Usia Kandungan{" "}
                    <span className="font-medium">
                      {checkupData.usia_kandungan}
                    </span>
                  </li>

                  <li>
                    Kondisi Ibu{" "}
                    <span
                      className={`${
                        checkupData.kondisi_ibu == "Baik"
                          ? "text-green-500"
                          : "text-amber-500"
                      }`}
                    >
                      {checkupData.kondisi_ibu}
                      <HealthAndSafety />
                    </span>
                  </li>
                  <li>
                    Kondisi janin{" "}
                    <span
                      className={`${
                        checkupData.kondisi_janin == "Baik"
                          ? "text-green-500"
                          : "text-amber-500"
                      }`}
                    >
                      {checkupData.kondisi_janin}
                      <HealthAndSafety />
                    </span>
                  </li>
                </ul>
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                    Berdasarkan pemeriksaan, diketahui bahwa{" "}
                    {checkupData.kesimpulan}.{" "}
                    <span className="text-sky-700">
                      direkomendasikan untuk {checkupData.rekomendasi}
                    </span>
                  </p>
                </div>
              </div>
              {/* patient profile end */}
              {/* back and update data button */}
              <div>
                <div className="flex justify-between">
                  <Link
                    to={`/ibu-anak/kehamilan/${user.id}`}
                    className="flex items-center space-x-2 active:bg-sky-700 w-fit p-2 active:opacity-75 pr-4 text-sm rounded-lg"
                  >
                    <ArrowBackOutlined></ArrowBackOutlined>
                    <span>Kembali</span>
                  </Link>
                </div>
              </div>
              {/* back and update data button end */}
            </div>
          </header>
          {/* patient overview end */}

          {/* main */}
          <main className="p-4 bg-white"></main>
          {/* main end */}
          <footer></footer>
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
};
