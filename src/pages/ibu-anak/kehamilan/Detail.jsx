import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import moment from "moment-with-locales-es6";
import React, { useState, useEffect } from "react";
import { showFormattedDate } from "../../../utils/index";
import PemeriksaanCard from "../../../components/ibu-anak/PemeriksaanCard";
import { CustomModal } from "../../../components/CustomModal";
import { getCheckUpListDataById } from "../../../api/data";
import { ToTopButton } from "../../../components/ToTopButton";
import {
  AccountCircle,
  ArrowBackOutlined,
  LocationOn,
  HealthAndSafety,
  AddLocation,
  CheckCircle,
  RemoveCircle,
  HelpOutline,
  Download,
} from "@mui/icons-material";

moment.locale("id");

export const PemeriksaanTimbang = ({ timbang }) => {
  return (
    <PemeriksaanCard
      title="Timbang"
      info={
        <CustomModal
          btn={
            <HelpOutline fontSize="medium" className="hover:cursor-pointer" />
          }
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
      info={
        <CustomModal
          btn={
            <HelpOutline fontSize="medium" className="hover:cursor-pointer" />
          }
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
      <div className="flex justify-between p-2">
        <div className="text-start">
          <div className="flex justify-between align-middle">
            <h4>Meliputi :</h4>
            <div className="w-4/12">
              <Link to={usg.link_hasil_usg}>
                <button className=" w-full bg-sky-50 text-xs flex justify-evenly items-center text-sky-500 rounded-lg p-1 px-3">
                  <Download></Download>Hasil USG
                </button>
              </Link>
            </div>
          </div>
          <ul className="text-sm mt-4 flex flex-wrap">
            {usg.pemeriksaan.map((item) => (
              <li
                key={item.nama}
                className="px-2 py-1 mb-2 mr-2 bg-gray-100 rounded"
              >
                {item.nama}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PemeriksaanCard>
  );
};

export const PemeriksaanFisik = ({ fisik }) => {
  return (
    <PemeriksaanCard
      title="Fisik"
      info={
        <CustomModal
          btn={
            <HelpOutline fontSize="medium" className="hover:cursor-pointer" />
          }
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
        <div className="flex justify-between p-2">
          <span>Keadaan Umum</span>
          <span
            className={`text-green-500 font-bold ${
              fisik.keadaan_umum !== "Semuanya Normal" ? "text-amber-600" : ""
            }`}
          >
            {fisik.keadaan_umum}
          </span>
        </div>
        <div>
          <h2>Pemeriksaan</h2>
          <div className="flex">
            <table className="text-sm m-auto w-3/4 bg-blue-200 rounded-lg border">
              <thead>
                <tr>
                  {Object.keys(fisik.pemeriksaan[0]).map((kolom) => (
                    <th>{kolom}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-gray-400">
                {fisik.pemeriksaan.map((item) => {
                  return (
                    <tr key={item.nama}>
                      <td>{item.nama}</td>
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

          {JSON.stringify(fisik)}
        </div>
      </div>
    </PemeriksaanCard>
  );
};

export const PemeriksaanSkriningPreeklampsia = ({ skriningPreeklampsia }) => {
  return (
    <PemeriksaanCard
      title="skriningPreeklampsia"
      info={
        <CustomModal
          btn={
            <HelpOutline fontSize="medium" className="hover:cursor-pointer" />
          }
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
        {JSON.stringify(skriningPreeklampsia)}
      </div>
    </PemeriksaanCard>
  );
};

export const PemeriksaanUkurLingkarLenganAtas = ({ ukurLingkarLenganAtas }) => {
  return (
    <PemeriksaanCard
      title="Ukur Lingkar Lengan Atas"
      info={
        <CustomModal
          btn={
            <HelpOutline fontSize="medium" className="hover:cursor-pointer" />
          }
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
        {JSON.stringify(ukurLingkarLenganAtas)}
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
  return checkedupList.map((checkup) => (
    <PemeriksaanMapper key={checkup} checkupData={checkupData} type={checkup} />
  ));
};
export const Detail = ({ data }) => {
  const { id } = useParams();
  const user = data[0] ? data[0] : null;
  const [checkupData, setCheckupListData] = useState(null);

  console.log(
    checkupData &&
      Object.keys(checkupData).filter((key) =>
        Object.keys(checkupData.pemeriksaan_yang_dilakukan).includes(key)
      )
  );
  useEffect(() => {
    getCheckUpListDataById(id, setCheckupListData);
  }, [id]);

  if (!checkupData) {
    return <span>loading...</span>;
  }
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
            {/* patient profile start*/}
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
                        <CheckCircle className="text-green-400" />
                      ) : (
                        <RemoveCircle className="text-gray-300"></RemoveCircle>
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
          <ToTopButton reference="#header"></ToTopButton>
        </main>
        {/* main end */}
        <footer></footer>
      </div>
    </>
  );
};
