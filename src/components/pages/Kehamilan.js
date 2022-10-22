import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPregnancyDataByUserId } from "../../api/data";
import {
  AccountCircle,
  MonitorHeart,
  PregnantWomanOutlined,
} from "@mui/icons-material";
import moment from "moment-with-locales-es6";
moment.locale("id");

const Kehamilan = ({ data }) => {
  const { id } = useParams();
  const user = data[0] ? data[0] : null;
  const [pregnancyData, setPregnancyData] = useState(null);
  let pregnancyAge = 0;
  let pemeriksaanTerakhir = 0;
  useEffect(() => {
    getPregnancyDataByUserId(id, setPregnancyData);
  }, []);

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
    pemeriksaanTerakhir = moment(
      pregnancyData[0]?.pemeriksaan_terakhir
        ? pregnancyData[0]?.pemeriksaan_terakhir.tanggal_pemeriksaan
        : new Date()
    ).fromNow();
  }

  return (
    <>
      {pregnancyData ? (
        <div>
          {/* patient overview */}
          <header className="bg-sky-500 p-4 text-white ">
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
                <h1>{pemeriksaanTerakhir}</h1>
              </div>
            </nav>
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

export default Kehamilan;
