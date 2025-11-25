import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cities } from "../services/citesData";
import { useDispatch, useSelector } from "react-redux";
import { addSearchData } from "../feature/searchSlice";

const TODAY = new Date().toISOString().split("T")[0];

const SearchForm = () => {
  const navigate = useNavigate();
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [journeyDate, setJourneyDate] = useState("");
  const [showFromList, setShowFromList] = useState(false);
  const [showToList, setShowToList] = useState(false);
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.search);
  console.log(searchData);

  useEffect(() => {
    if (searchData) {
      setFromCity(searchData.fromCity || "");
      setToCity(searchData.toCity || "");
      setJourneyDate(searchData.journeyDate || "");
    }
  }, [searchData]);

  const handleSearch = () => {
    if (fromCity === toCity) {
      alert("From city and To city can not be same");
      return;
    }
    if (fromCity && toCity && journeyDate) {
      dispatch(addSearchData({ fromCity, toCity, journeyDate }));
      navigate("/search");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="flex justify-between gap-5 relative ">
      <div className="relative flex flex-col w-[300px]">
        <input
          type="text"
          className="bg-white border border-gray-300 rounded-md px-3 py-2 outline-none  w-full"
          value={fromCity}
          placeholder="From City"
          onFocus={() => {
            setShowFromList(true);
            setShowToList(false);
          }}
          onBlur={() => setShowFromList(false)}
        />
        {showFromList && (
          <div className="max-h-[300px] w-full overflow-y-scroll flex flex-col bg-white border rounded shadow absolute z-50 mt-10">
            {cities.map((city, index) => (
              <span
                key={index}
                onMouseDown={() => {
                  setFromCity(city.name);
                  setShowFromList(false);
                }}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer border-b last:border-b-0"
              >
                {city.name}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center">↔</div>
      <div className="relative flex flex-col w-[300px]">
        <input
          type="text"
          className="bg-white border border-gray-300 rounded-md px-3 py-2 outline-none  w-full"
          value={toCity}
          placeholder="To City"
          onFocus={() => {
            setShowToList(true);
            setShowFromList(false);
          }}
          onBlur={() => setShowToList(false)}
        />
        {showToList && (
          <div className="max-h-[300px] w-full overflow-y-scroll flex flex-col bg-white border rounded shadow absolute z-50 mt-10">
            {cities.map((city, index) => (
              <span
                key={index}
                onMouseDown={() => {
                  setToCity(city.name);
                  setShowToList(false);
                }}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer border-b last:border-b-0"
              >
                {city.name}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="w-[250px]">
        <input
          type="date"
          className="bg-white border border-gray-300 rounded-md px-3 py-2 outline-none w-full"
          value={journeyDate}
          min={TODAY}
          onChange={(e) => setJourneyDate(e.target.value)}
        />
      </div>
      <div className="w-[250px] flex items-center">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg hover:cursor-pointer"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
