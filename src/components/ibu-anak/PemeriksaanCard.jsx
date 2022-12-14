import React from "react";

const PemeriksaanCard = ({ children, title, info, id }) => {
  return (
    <div className="border rounded-lg p-4 space-y-2">
      <div className="flex text-sky-800 font-medium items-center justify-between">
        <h3 id={id}>{title}</h3>
        {info}
      </div>
      {children}
    </div>
  );
};

export default PemeriksaanCard;
