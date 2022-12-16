import React from "react";

const About = () => {
  return (
    <div className=" w-screen " id="about">
      <div className="flex flex-col items-center">
        <div
          className="md:px-10 px-2 text-center flex pb-20 flex-col justify-center"
          style={{
            background: "#2e4463",
          }}
        >
          <div className="font-1 text-5xl text-white py-10">
            {" "}
            HISTORY & BACKGROUND
          </div>
          <div className="text-sm text-white" align="justify">
            Japan Logistics and General Supply Limited: started its operations
            way back in 2014 with only two staff inclusive of the Director
            serving 2 corporate accounts as well as walk-in clients at its then
            location at kijitonyama Street. Thereafter, the company expanded and
            became fully registered with BRELA Accredited in the year 2020 and
            increased its workforce gradually. In the year 2021, World of Wild
            Travel Services was registered for provision of inbound services
            alongside Japan Food Products. One company which is owned by an
            independent Tanzanian entrepreneur with a compliment of staff is 10
            personnel. The company has 10 key corporate accounts i.e.,
            government offices, Parastatals, Pension Funds, Embassies,
            International organisations and private companies. Japan Logistics
            and General Supply Limited has its Head Office located in Lindi and
            Branch at Kijitonyama Road, Block No C, Plot No 18 EKAMA BULDING –
            kijitonyama road and active partners around our country respectively
            of which its operations are guided by the Principal Vision and
            Mission as outlined below, namely: - VISION To provide higher
            customer service within and outside of our country, also to lead in
            tourism and Travel services company by providing personalized,
            tailor-made services while promoting sustainable environment
            practices to conserve nature for posterity. Japan Logistics and
            General Supply Limited aims to become the ‘Preferred Travel Agency
            of Choice’ offering excellent quality service of corporate clientele
            standard and etiquette worldwide. MISSION To actively promote
            Tanzania and East Africa to the world by introducing value for
            money, ground transport, tourism products and services in every
            sphere of activities and contribute to our National Economy at the
            same time adding value to the company. By doing so, the Mission is
            to establish with each customer a long-term business partnership
            built upon competitive, cost effective, transparent and high-quality{" "}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 md:p-10 ">
          <div className="text-sm ">
            <div className="mt -4 font-bold text-lg">VISION</div>
            <div>
              To provide higher customer service within and outside of our
              country, also to lead in tourism and Travel services company by
              providing personalized, tailor-made services while promoting
              sustainable environment practices to conserve nature for
              posterity. Japan Logistics and General Supply Limited aims to
              become the ‘Preferred Travel Agency of Choice’ offering excellent
              quality service of corporate clientele standard and etiquette
              worldwide.
            </div>
          </div>
          <div className="text-sm ">
            <div className=" font-bold text-lg">MISSION</div>
            <div>
              To actively promote Tanzania and East Africa to the world by
              introducing value for money, ground transport, tourism products
              and services in every sphere of activities and contribute to our
              National Economy at the same time adding value to the company. By
              doing so, the Mission is to establish with each customer a
              long-term business partnership built upon competitive, cost
              effective, transparent and high-quality assurance corporate
              standard of service aimed to achieve maximum level of “competence
              and excellence.”
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
