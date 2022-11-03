import { Link } from "react-router-dom";
import Loader from "@/components/Loader";
import { useParams } from "react-router-dom";
import { showFormattedDate } from "@/utils/index";
import React, { useState, useEffect } from "react";
import { getCheckUpListDataById } from "@/api/data";
import { CustomModal } from "@/components/CustomModal";
import { ToTopButton } from "@/components/ToTopButton";
import PemeriksaanCard from "@/components/ibu-anak/PemeriksaanCard";
import UsgDummy from "@/assets/ibu-anak/usg_dummy.jpeg";

import {
  MapPinIcon,
  ArrowLeftIcon,
  UserCircleIcon,
  CheckCircleIcon,
  MinusCircleIcon,
  QuestionMarkCircleIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";

export const PemeriksaanTimbang = ({ timbang }) => {
  return (
    <PemeriksaanCard
      title="Timbang"
      id="timbang"
      info={
        <CustomModal
          icon={<QuestionMarkCircleIcon className="hover:cursor-pointer w-6" />}
        >
          <h2 className="text-sky-800 font-medium">Index Massa Tubuh</h2>
          <div className="space-y-2 p-2">
            <p className="text-sm">
              nilai kenormalan dari pemeriksaan timbangan diperoleh menggunakan
              Indeks Massa Tubuh, (IBM). merupakan perhitungan lemak pada tubuh
              berdasarkan berat dan tinggi badan.
            </p>
            <ul className="text-sm">
              <li>
                di bawah 18.5, maka{" "}
                <span className="text-amber-500 font-bold">Kurus</span>
              </li>
              <li>
                18.5-24.9, maka{" "}
                <span className="text-green-500 font-bold">Normal</span>
              </li>
              <li>
                25.0-29.9, maka{" "}
                <span className="text-amber-500 font-bold">Gemuk</span>
              </li>
              <li>
                di atas 30, maka{" "}
                <span className="text-red-500 font-bold">Obesitas</span>
              </li>
            </ul>
          </div>
        </CustomModal>
      }
    >
      <div className="flex justify-between p-2">
        <ul className="flex space-x-4">
          <li>{timbang.berat.nilai + " " + timbang.berat.satuan}</li>
          <li>{timbang.tinggi.nilai + " " + timbang.tinggi.satuan}</li>
        </ul>
        <h4
          className={`${
            timbang.imt == "Normal" ? "text-green-500 font-bold" : ""
          }`}
        >
          {timbang.imt}
        </h4>
      </div>
    </PemeriksaanCard>
  );
};

export const PemeriksaanUSG = ({ usg }) => {
  return (
    <PemeriksaanCard
      title="USG"
      id="usg"
      info={
        <CustomModal
          icon={<QuestionMarkCircleIcon className="hover:cursor-pointer w-6" />}
        >
          <h2 className="text-sky-800 font-medium">USG</h2>
          <div className="space-y-2">
            <p>
              Ultrasonografi (USG) adalah prosedur pengambilan gambar dari
              bagian tubuh tertentu. Ini dilakukan dengan memanfaatkan gelombang
              suara frekuensi tinggi.
            </p>
          </div>
        </CustomModal>
      }
    >
      <div className="flex justify-between">
        <div className="text-start space-y-2 w-full">
          <div className="flex justify-between items-center w-full">
            <h4>Meliputi :</h4>
            <div className="">
              <CustomModal
                icon={
                  <span className=" w-full hover:cursor-pointer bg-sky-50 flex justify-evenly items-center text-sky-500 rounded-lg p-1 px-3 text-sm">
                    Hasil USG
                  </span>
                }
              >
                <h2 className="text-sky-800 font-medium">USG</h2>
                <div className="flex-rows space-y-2">
                  <img
                    src={UsgDummy}
                    alt="hasil usg"
                    className="w-full aspect-auto m-auto rounded"
                  />
                  <div>
                    <div className=" hover:cursor-pointer text-xs bg-sky-100 hover:bg-sky-200 transition-all duration-150 text-sky-500 rounded-lg p-1 px-3">
                      <div className="flex flex-row items-center justify-center">
                        <ArrowDownTrayIcon className="w-6 mr-2" />
                        Download
                      </div>
                    </div>
                  </div>
                </div>
              </CustomModal>
            </div>
          </div>
          <div>
            <table className="text-sm text-left m-auto w-full">
              <thead>
                <tr className="border p-2">
                  <th key="usg-nama" className="p-2">
                    Nama
                  </th>
                  <th key="usg-nilai" className="p-2">
                    Nilai
                  </th>
                </tr>
              </thead>
              <tbody>
                {usg.pemeriksaan.map((item) => {
                  return (
                    <tr key={item.nama} className="border p-2">
                      <td className="p-2">{item.nama}</td>
                      <td className="p-2">
                        {`${item.nilai} ${item.satuan ? item.satuan : ""}`}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PemeriksaanCard>
  );
};

export const PemeriksaanFisik = ({ fisik }) => {
  return (
    <PemeriksaanCard
      title="Fisik"
      id="fisik"
      info={
        <CustomModal
          icon={<QuestionMarkCircleIcon className="hover:cursor-pointer w-6" />}
        >
          <h2 className="text-sky-800 font-medium">Fisik</h2>
          <div className="space-y-2">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam ab ex, saepe laborum dolorem possimus asperiores
              impedit repellendus culpa quo. Nemo dolor iure dicta? Quos,
              laudantium ipsum. Iusto nesciunt magnam alias maiores aliquid sint
              est nihil magni ullam natus? Tempora.
            </p>
          </div>
        </CustomModal>
      }
    >
      <div>
        <div className="flex justify-between mb-4">
          <span>Keadaan Umum</span>
          <span
            className={`text-green-500 font-bold ${
              fisik.keadaan_umum !== "Semuanya Normal" ? "text-amber-600" : ""
            }`}
          >
            {fisik.keadaan_umum}
          </span>
        </div>
        <div className="text-regular">
          <h2>Pemeriksaan</h2>
          <div className="flex mt-4">
            <table className="text-sm m-auto w-full">
              <thead>
                <tr className="border text-left">
                  {Object.keys(fisik.pemeriksaan[0]).map((kolom) => (
                    <th key={kolom} className="p-2">
                      {kolom}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-gray-400">
                {fisik.pemeriksaan.map((item) => {
                  return (
                    <tr key={item.nama} className="border p-2">
                      <td className="p-2">{item.nama}</td>
                      <td
                        className={`text-green-500  ${
                          item.keadaan !== "Normal" ? "text-amber-600" : ""
                        }`}
                      >
                        {item.keadaan}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PemeriksaanCard>
  );
};

export const PemeriksaanSkriningPreeklampsia = ({ skriningPreeklampsia }) => {
  console.log(skriningPreeklampsia);
  return (
    <PemeriksaanCard
      title="Screening Preeklampsia"
      id="skrining_preeklampsia"
      info={
        <CustomModal
          icon={<QuestionMarkCircleIcon className="hover:cursor-pointer w-6" />}
        >
          <h2 className="text-sky-800 font-medium">Skrining Preeklampsia</h2>
          <div className="space-y-2">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam ab ex, saepe laborum dolorem possimus asperiores
              impedit repellendus culpa quo. Nemo dolor iure dicta? Quos,
              laudantium ipsum. Iusto nesciunt magnam alias maiores aliquid sint
              est nihil magni ullam natus? Tempora.
            </p>
          </div>
        </CustomModal>
      }
    >
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <div className="flex space-x-2 items-center text-sky-800 font-medium">
            <UserCircleIcon className="w-8" />
            <span>{skriningPreeklampsia.nama_dokter}</span>
          </div>
          <div className="mr-2">
            {showFormattedDate(skriningPreeklampsia.tanggal_pemeriksaan)}
          </div>
        </div>

        <div className="p-2 bg-sky-50 rounded text-sm">
          <p className="mb-3 font-normal text-sky-500 dark:text-gray-400">
            Berdasarkan skrining, diperoleh informasi bahwa{" "}
            {skriningPreeklampsia.kesimpulan}
          </p>
        </div>
        <ul className="flex space-x-2 text-gray-600">
          <li>
            <span
              className={`text-green-500 ${
                skriningPreeklampsia.jumlah_risiko_sedang == 0
                  ? ""
                  : "text-amber-600"
              }`}
            >
              {skriningPreeklampsia.jumlah_risiko_sedang == 0
                ? "tidak ada"
                : skriningPreeklampsia.jumlah_risiko_sedang}
            </span>{" "}
            resiko sedang
          </li>
          <li>
            <span
              className={`text-green-500 ${
                skriningPreeklampsia.jumlah_risiko_berat == 0
                  ? ""
                  : "text-amber-600"
              }`}
            >
              {skriningPreeklampsia.jumlah_risiko_berat == 0
                ? "tidak ada"
                : skriningPreeklampsia.jumlah_risiko_berat}
            </span>{" "}
            resiko berat
          </li>
        </ul>
        <div className="space-y-2 text-gray-600">
          <h2 className="font-bold mt-4">Pemeriksaan kriteria amnesis</h2>
          <div className="flex">
            <table className="m-auto text-sm text-left w-full border">
              <thead>
                <tr>
                  <th className="p-2">Nama</th>
                  <th className="w-2/4 p-2">Resiko</th>
                </tr>
              </thead>
              <tbody>
                {skriningPreeklampsia.kriteria_anamnesis.map((kriteria) => {
                  return (
                    <tr key={`skrining-${kriteria.nama}`} className="border">
                      <td className="p-2">{kriteria.nama}</td>
                      <td
                        className={`w-2/4 p-2 text-green-500${
                          kriteria.risiko == null ? "" : "text-amber-500"
                        }`}
                      >
                        {kriteria.risiko == null
                          ? "tidak ada"
                          : kriteria.risiko}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PemeriksaanCard>
  );
};

export const PemeriksaanUkurLingkarLenganAtas = ({ ukurLingkarLenganAtas }) => {
  return (
    <PemeriksaanCard
      title="Ukur Lingkar Lengan Atas"
      id="ukur_lingkar_lengan_atas"
      info={
        <CustomModal
          icon={<QuestionMarkCircleIcon className="hover:cursor-pointer w-6" />}
        >
          <h2 className="text-sky-800 font-medium">Skrining Preeklampsia</h2>
          <div className="space-y-2">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam ab ex, saepe laborum dolorem possimus asperiores
              impedit repellendus culpa quo. Nemo dolor iure dicta? Quos,
              laudantium ipsum. Iusto nesciunt magnam alias maiores aliquid sint
              est nihil magni ullam natus? Tempora.
            </p>
          </div>
        </CustomModal>
      }
    >
      <div className="flex justify-between p-2">
        <div className="flex space-x-4">
          <span>
            {ukurLingkarLenganAtas.nilai + " " + ukurLingkarLenganAtas.satuan}
          </span>
        </div>
        <h4
          className={`text-green-500 font-bold ${
            ukurLingkarLenganAtas.status !== "Normal" ? "text-amber-600" : ""
          }`}
        >
          {ukurLingkarLenganAtas.status}
        </h4>
      </div>
    </PemeriksaanCard>
  );
};

export const PemeriksaanMapper = ({ type, checkupData }) => {
  switch (type) {
    case "timbang":
      return <PemeriksaanTimbang timbang={checkupData.timbang} />;
    case "usg":
      return <PemeriksaanUSG usg={checkupData.usg} />;
    case "ukur_lingkar_lengan_atas":
      return (
        <PemeriksaanUkurLingkarLenganAtas
          ukurLingkarLenganAtas={checkupData.ukur_lingkar_lengan_atas}
        />
      );
    case "fisik":
      return <PemeriksaanFisik fisik={checkupData.fisik} />;
    case "skrining_preeklampsia":
      return (
        <PemeriksaanSkriningPreeklampsia
          skriningPreeklampsia={checkupData.skrining_preeklampsia}
        />
      );
  }
};

export const ListDetailPemeriksaan = ({ checkupData, checkedupList }) => {
  return (
    <>
      {checkedupList.map((checkup, id) => (
        <PemeriksaanMapper key={id} checkupData={checkupData} type={checkup} />
      ))}
    </>
  );
};

export const Detail = ({ data }) => {
  const { id } = useParams();

  const user = data[0] ? data[0] : null;

  const [checkupData, setCheckupListData] = useState(null);

  useEffect(() => {
    getCheckUpListDataById(id, setCheckupListData);
  }, [id]);

  if (!checkupData || checkupData === null) return <Loader />;

  return (
    <>
      <div className="space-y-4 relative">
        {/* patient overview */}
        <header className="bg-white pb-4 h-fit" id="header">
          <div className="p-4 text-black pb-2 rounded-b-2xl space-y-4">
            <nav className="flex items-center ">
              <div className="flex space-x-2 items-center ">
                <div className=" space-y-1 ">
                  <div className="flex text-xs items-center">
                    <UserCircleIcon className="w-8 mb-2" />
                    <h1 className="font-medium">{user.nama}</h1>
                  </div>

                  <div className="flex text-xs items-center">
                    <MapPinIcon className="w-8" />
                    <h1>{user.alamat}</h1>
                  </div>
                </div>
              </div>
            </nav>
            <hr />
            {/* patient profile start*/}
            <h1 className="text-lg font-bold text-center">
              Hasil Pemeriksaan pada{" "}
              {showFormattedDate(checkupData.tanggal_pemeriksaan)}
            </h1>
            <h2 className="text-sky-800 font-medium">Ringkasan</h2>
            <div className="space-y-4">
              <ul className="grid grid-cols-2 text-sm space-y-2 items-center">
                <li className="flex space-x-2 items-center text-sky-800 font-medium">
                  <UserCircleIcon className="w-6" />
                  <span>
                    {checkupData.pemeriksa.jabatan
                      .toLowerCase()
                      .includes("dokter")
                      ? "dr. "
                      : ""}
                    {checkupData.pemeriksa.nama}
                  </span>
                </li>
                <li className="flex items-center text-sky-800 font-medium">
                  <MapPinIcon className="min-w-6 w-6 h-6 mr-2" />
                  <div className="flex-1 ">
                    {checkupData.tempat.nama}, {checkupData.tempat.alamat}
                  </div>
                </li>

                <li className="">Trimester ke {checkupData.trimester}</li>

                <li>Minggu pemeriksaan ke {checkupData.minggu_pemeriksaan}</li>

                <li>Urutan pemeriksaan ke {checkupData.urutan_pemeriksaan}</li>

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
                    {/* <HealthAndSafety /> */}
                  </span>
                </li>
              </ul>
              <div className="flex space-x-4 text-sm">
                <span>Rencana kontrasepsi</span>
                <span className="text-sky-600">
                  {checkupData.rencana_kontrasepsi}
                </span>
              </div>
              <div className="text-sm">
                {checkupData.butuh_konseling ? (
                  <span className="text-amber-600">Butuh konseling</span>
                ) : (
                  <span className="text-green-500">Tidak butuh konseling</span>
                )}
              </div>

              <div className="p-2 bg-gray-50 rounded text-sm">
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  Berdasarkan pemeriksaan, diketahui bahwa{" "}
                  {checkupData.kesimpulan}.{" "}
                  {checkupData.rekomendasi && (
                    <span className="text-sky-700">
                      direkomendasikan untuk {checkupData.rekomendasi}
                    </span>
                  )}
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
                  <ArrowLeftIcon className="w-8" />
                  <span>Kembali</span>
                </Link>
              </div>
            </div>
            {/* back and update data button end */}
          </div>
        </header>
        {/* patient overview end */}
        {/* main */}
        <main className="p-4 bg-white" id="main">
          <div className="space-y-2">
            <h2 className="text-sky-800 font-medium">Pemeriksaan</h2>
            {/* start list pemeriksaan yang dilakukan */}
            <ul className="flex flex-wrap  text-sm p-4">
              {Object.keys(checkupData.pemeriksaan_yang_dilakukan).map(
                (pemeriksaan) => (
                  <li key={pemeriksaan} className="mr-2 mb-2">
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
                      {checkupData.pemeriksaan_yang_dilakukan[pemeriksaan] ? (
                        <CheckCircleIcon className="w-5 text-green-400" />
                      ) : (
                        <MinusCircleIcon className="w-5 text-gray-400"></MinusCircleIcon>
                      )}
                    </a>
                  </li>
                )
              )}
            </ul>
            {/* end list pemeriksaan yang dilakukan */}

            {/* start list detail pemeriksaan berdasarkan pemeriksaan yang dilakukan */}
            <ListDetailPemeriksaan
              checkupData={checkupData}
              checkedupList={Object.keys(checkupData).filter((key) =>
                Object.keys(checkupData.pemeriksaan_yang_dilakukan).includes(
                  key
                )
              )}
            />
            {/* end list detail pemeriksaan berdasarkan pemeriksaan yang dilakukan */}
          </div>
        </main>
        {/* main end */}
        <footer></footer>
        <ToTopButton reference="#main" />
      </div>
    </>
  );
};
