import React from "react";

const PopulairesPage = () => {
  return (
    <div className="populaires-page">
      <div className="head flex items-baseline gap-[40px] mt-[42px] mx-[54px]">
        <button className="back cursor-pointer" onClick={() => navigate(-1)}>
          <BackIcon className="h-[20px]" />
        </button>
        <h1 className="text-[24px] font-bold">Populaires</h1>
      </div>
    </div>
  );
};

export default PopulairesPage;
