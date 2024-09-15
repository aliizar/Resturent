import React from "react";
import "../CSS/ImageGallery.css";
import HotelsData from "./HotelsData";

const DestinationList: React.FC = () => {
  

  return (
    <section className="page-content get">
      <header className="ImgHeader flex justify-center items-center h-[24rem] w-full bg-[#1a2964] text-white px-8">
        <div className="text-center max-w-[48rem]">
          <p className="text-sm uppercase tracking-wide text-white opacity-90 font-semibold mb-4">
            Take a trip
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white opacity-65 leading-tight">
            Destinations Unveiled: Inspiring Journeys Await
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            Embark on a virtual adventure to stunning destinations worldwide,
            where breathtaking landscapes, vibrant cultures, and unforgettable
            experiences await.
          </p>
        </div>
      </header>

      <HotelsData/>
    </section>
  );
};

export default DestinationList;
