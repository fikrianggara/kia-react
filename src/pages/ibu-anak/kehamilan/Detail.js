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
  CheckCircle,
  HelpOutline,
  Download,
} from "@mui/icons-material";
import { Modal, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import moment from "moment-with-locales-es6";
moment.locale("id");

export default function CustomModal({ children, btn }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div onClick={handleOpen}>{btn}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] shadow bg-white h-fit w-96 rounded-lg p-4">
          {children}
        </Box>
      </Modal>
    </div>
  );
}
export const Detail = ({ data }) => {
  console.log(data);
  const { id } = useParams();
  const user = data[0] ? data[0] : null;
  const [pregnancyData, setPregnancyData] = useState(null);
  const [checkupData, setCheckupListData] = useState(null);
  let pregnancyAge = 0;
  let lastCheckup = 0;
  let jarakHinggaKelahiran = 0;

  useEffect(() => {
    getPregnancyDataByUserId(user.id, setPregnancyData);
    getCheckUpListDataById(id, setCheckupListData);
  }, [id]);

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
              <h2 className="text-sky-800 font-medium">Ringkasan</h2>
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
                    className="flex items-center space-x-2 active:bg-gray-200 w-fit p-2 active:opacity-75 pr-4 text-sm rounded-lg"
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
          <main className="p-4 bg-white">
            <div className="space-y-2">
              <h2 className="text-sky-800 font-medium">Pemeriksaan</h2>
              <ul className="flex flex-wrap space-x-4 space-y-2 text-sm p-4">
                {Object.keys(checkupData.pemeriksaan_yang_dilakukan).map(
                  (pemeriksaan) => (
                    <li key={pemeriksaan}>
                      <a
                        href={`#${pemeriksaan}`}
                        className={`px-1 py-1 flex items-center rounded-full space-x-2 ${
                          checkupData.pemeriksaan_yang_dilakukan[pemeriksaan]
                            ? "bg-green-50"
                            : "bg-gray-50 "
                        }`}
                      >
                        <p
                          className={`${
                            checkupData.pemeriksaan_yang_dilakukan[pemeriksaan]
                              ? "text-green-600"
                              : "text-gray-300"
                          }`}
                        >
                          {pemeriksaan.split("_").join(" ")}
                        </p>
                        <CheckCircle
                          className={`${
                            checkupData.pemeriksaan_yang_dilakukan[pemeriksaan]
                              ? "text-green-400"
                              : "text-gray-300"
                          }`}
                        ></CheckCircle>
                      </a>
                    </li>
                  )
                )}
              </ul>
              {/* timbangan */}
              <div className="border rounded-lg p-4 space-y-2">
                <div className="flex space-x-2 text-sky-800 font-medium items-center justify-between">
                  <h3 id="timbang">Timbangan</h3>

                  <CustomModal
                    btn={
                      <HelpOutline
                        fontSize="medium"
                        className="hover:cursor-pointer"
                      />
                    }
                  >
                    <h2 className="text-sky-800 font-medium">
                      Index Massa Tubuh
                    </h2>
                    <div className="space-y-2 p-2">
                      <p className="text-sm">
                        nilai kenormalan dari pemeriksaan timbangan diperoleh
                        menggunakan Indeks Massa Tubuh, (IBM). merupakan
                        perhitungan lemak pada tubuh berdasarkan berat dan
                        tinggi badan.
                      </p>
                      <ul className="text-sm">
                        <li>
                          di bawah 18.5, maka{" "}
                          <span className="text-amber-500 font-bold">
                            Kurus
                          </span>
                        </li>
                        <li>
                          18.5-24.9, maka{" "}
                          <span className="text-green-500 font-bold">
                            Normal
                          </span>
                        </li>
                        <li>
                          25.0-29.9, maka{" "}
                          <span className="text-amber-500 font-bold">
                            Gemuk
                          </span>
                        </li>
                        <li>
                          di atas 30, maka{" "}
                          <span className="text-red-500 font-bold">
                            Obesitas
                          </span>
                        </li>
                      </ul>
                    </div>
                  </CustomModal>
                </div>
                <div className="flex justify-between p-2">
                  <ul className="flex space-x-4">
                    <li>
                      {checkupData.timbangan.berat.nilai +
                        " " +
                        checkupData.timbangan.berat.satuan}
                    </li>
                    <li>
                      {checkupData.timbangan.tinggi.nilai +
                        " " +
                        checkupData.timbangan.tinggi.satuan}
                    </li>
                  </ul>
                  <h4
                    className={`${
                      checkupData.timbangan.imt == "Normal"
                        ? "text-green-500 font-bold"
                        : ""
                    }`}
                  >
                    {checkupData.timbangan.imt}
                  </h4>
                </div>
              </div>
              {/* timbangan end */}
              {/* usg */}
              <div className="border rounded-lg p-4 space-y-2">
                <div className="flex space-x-2 text-sky-800 font-medium items-center justify-between">
                  <h3 id="timbang">USG</h3>

                  <CustomModal
                    btn={
                      <HelpOutline
                        fontSize="medium"
                        className="hover:cursor-pointer"
                      />
                    }
                  >
                    <h2 className="text-sky-800 font-medium">USG</h2>
                    <div className="space-y-2">
                      <p>
                        Ultrasonografi (USG) adalah prosedur pengambilan gambar
                        dari bagian tubuh tertentu. Ini dilakukan dengan
                        memanfaatkan gelombang suara frekuensi tinggi.
                      </p>
                    </div>
                  </CustomModal>
                </div>
                <div className="flex justify-between p-2">
                  <div className="text-start  w-8/12">
                    <h4>Meliputi :</h4>
                    <ul className="text-sm p-2 flex flex-wrap space-x-2 space-y-2">
                      {checkupData.usg.pemeriksaan.map((item) => (
                        <li
                          key={item.nama}
                          className="px-2 py-1 bg-gray-100 rounded"
                        >
                          {item.nama}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-4/12">
                    <a href={checkupData.usg.link_hasil_usg}>
                      <button className=" w-full bg-sky-50 text-xs flex justify-evenly items-center text-sky-500 rounded-lg p-1 px-3">
                        <Download></Download>Hasil USG
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              {/* usg end */}
            </div>
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
