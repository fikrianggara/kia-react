import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPregnancyDataByUserId } from "../../../api/data";
import {
  AccountCircle,
  MonitorHeart,
  PregnantWomanOutlined,
  BabyChangingStation,
  Favorite,
  ChildCare,
  ArrowBackOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

import moment from "moment-with-locales-es6";
moment.locale("id");

export const Dashboard = ({ data }) => {
  const { id } = useParams();
  const user = data[0] ? data[0] : null;
  const [pregnancyData, setPregnancyData] = useState(null);
  let pregnancyAge = 0;
  let lastCheckup = 0;
  let jarakHinggaKelahiran = 0;

  useEffect(() => {
    getPregnancyDataByUserId(id, setPregnancyData);
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
    ).fromNow();

    jarakHinggaKelahiran = moment(
      pregnancyData[0]?.estimasi_tanggal_kelahiran
        ? pregnancyData[0]?.estimasi_tanggal_kelahiran
        : new Date()
    ).fromNow();
  }

  return (
    <>
      {pregnancyData ? (
        <div>
          {/* patient overview */}
          <header className="bg-white pb-10 h-[350px] relative">
            <div className="bg-sky-500 p-4 text-white space-y-2 rounded-b-2xl">
              <nav className="flex items-center justify-between text-sm">
                <div className="flex space-x-2 items-center ">
                  <AccountCircle fontSize="large"></AccountCircle>
                  <div>
                    <h1 className="font-medium">{user.nama}</h1>
                    <h2>
                      <PregnantWomanOutlined></PregnantWomanOutlined>
                      {pregnancyAge}
                    </h2>
                  </div>
                </div>
                <div className="flex items-center space-x-2 ">
                  <MonitorHeart></MonitorHeart>
                  <h1>{lastCheckup}</h1>
                </div>
              </nav>
              <hr />
              <ul className="p-4 space-y-2 text-sm">
                <li>
                  <BabyChangingStation></BabyChangingStation>
                  {jarakHinggaKelahiran}
                </li>
                <li className="flex space-x-4">
                  <div className="flex items-center">
                    <PregnantWomanOutlined></PregnantWomanOutlined>
                    <div className="relative">
                      <Favorite fontSize="large"></Favorite>
                      <span className="absolute z-10 text-red-400 left-5 top-1 font-bold text-xs">
                        +
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <ChildCare></ChildCare>
                    <div className="relative">
                      <Favorite fontSize="large"></Favorite>
                      <span className="absolute z-10 text-red-400 left-5 top-1 font-bold text-xs">
                        +
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <Link to="/">
              <div className="w-12 h-12 p-2 absolute bottom-4 left-4 rounded bg-gray-200 flex items-center text-sky-700">
                <ArrowBackOutlined fontSize="large"></ArrowBackOutlined>
              </div>
            </Link>
          </header>
          {/* patient overview end */}
          <main></main>
          <footer></footer>
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
};
