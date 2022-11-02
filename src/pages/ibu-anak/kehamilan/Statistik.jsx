import { useParams } from "react-router-dom";
import { showFormattedDate } from "@/utils/index";
import React, { useState, useEffect } from "react";
import { LineChart } from "@/components/Chart/LineChart";
import { getPregnancyDataById, getCheckupDataById } from "@/api/data";

import { AccountCircle, ArrowBackOutlined, LocationOn, } from "@mui/icons-material";

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
export const Statistik = ({ data }) => {
  const { id } = useParams();
  const user = data[0] ? data[0] : null;
  const [pregnancyData, setPregnancyData] = useState(null);
  const [checkupData, setCheckupListData] = useState(null);
  let pregnancyAge = 0;
  let lastCheckup = 0;
  let jarakHinggaKelahiran = 0;

  useEffect(() => {
    getPregnancyDataById(id, setPregnancyData);

    getCheckupDataById(id, setCheckupListData);
  }, [id]);
  if (pregnancyData !== null) {
    pregnancyAge = moment(
      pregnancyData?.hari_pertama_haid_terakhir
        ? pregnancyData?.hari_pertama_haid_terakhir
        : new Date(),
      "YYYY-MM-DD"
    )
      .fromNow()
      .split(" ")
      .splice(0, 2)
      .join(" ");
    lastCheckup = moment(
      pregnancyData?.pemeriksaan_terakhir
        ? pregnancyData?.pemeriksaan_terakhir.tanggal_pemeriksaan
        : new Date()
    )
      .fromNow()
      .split(" ")
      .splice(0, 2)
      .join(" ");

    jarakHinggaKelahiran = moment(
      pregnancyData?.estimasi_tanggal_kelahiran
        ? pregnancyData?.estimasi_tanggal_kelahiran
        : new Date()
    ).fromNow();
  }
  console.log(checkupData);
  if (!pregnancyData || !checkupData) {
    return <span>loading...</span>;
  }
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
              <LineChart judul={"Tekanan Darah (mmHg)"} id="1" />
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
