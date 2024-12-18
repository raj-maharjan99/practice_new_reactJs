import axios from "axios";
import React, { useEffect, useState } from "react";
import Details from "./Details";
import { useNavigate } from "react-router-dom";
import RegionButton from "./RegionButton";

const Home = () => {
  const [countries, setCountries] = useState([]);

  const [show, setShow] = useState(false);
  const [region, setRegion] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setCountries(res.data))
      .catch((error) => console.log(error));
  }, []);
  const nav = useNavigate();
  const countryDetails = (country) => {
    nav(`/detail/${country.region}`, { state: { country } });
  };

  const regionCountry = countries?.filter(
    (cntry) => cntry.region === `${region}`
  );
  console.log(regionCountry);
  return (
    <div>
      {" "}
      <RegionButton setRegion={setRegion} />
      {region === "" ? (
        <div className="grid lg:grid-cols-4 md:grid-cols-2  m-5 gap-5">
          {countries?.map((country) => (
            <div
              key={country.name.common}
              className="sm:p-8 space-y-4 border border-black  "
            >
              {" "}
              <img
                onClick={() => countryDetails(country)}
                className="w-full sm:h-[200px] cursor-pointer "
                src={country.flags.png}
                alt=""
              />{" "}
              <p>Flag Name : {country.name.common}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-2  m-5 gap-5 ">
          {regionCountry?.map((country) => (
            <div
              key={country.name.common}
              className="sm:p-8 space-y-4  border border-black  "
            >
              {" "}
              <img
                onClick={() => countryDetails(country)}
                className="w-full sm:h-[200px] cursor-pointer "
                src={country.flags.png}
                alt=""
              />{" "}
              <p>Flag Name : {country.name.common}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
