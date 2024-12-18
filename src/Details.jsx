import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
const Details = () => {
  const nav = useNavigate();
  const location = useLocation();

  const country = location.state?.country;
  // useEffect(() => {

  //   delete L.Icon.Default.prototype._getIconUrl;
  // }, []);
  return (
    <div className="flex justify-center flex-col">
      <div className="flex justify-evenly m-4">
        <h2>{country?.translations?.bre?.common}</h2>{" "}
        <button
          className=" border border-black px-2 rounded-md"
          onClick={() => nav(-1)}
        >
          Back
        </button>
      </div>

      <div className="flex justify-center gap-2">
        <div className="lg:w-[60%]   md:w-full">
          <img
            onClick={() => nav("/")}
            className="w-full cursor-pointer"
            src={
              Object.keys(country?.coatOfArms).length !== 0
                ? country?.coatOfArms?.png
                : country?.flags?.png
            }
            alt=""
          />{" "}
        </div>
      </div>
      <div className="map  ">
        <div className="h-[400px] p-4">
          <MapContainer
            center={country?.latlng} // Set initial center of the map
            zoom={7}
            scrollWheelZoom={true}
            style={{ width: "100%", height: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution={`&copy; <a href="https://www.openstreetmap.org/relation/1983629">OpenStreetMap</a> contributors`}
            />
            <Marker position={country?.latlng}>
              <Popup>A sample popup with OpenStreetMap.</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Details;
