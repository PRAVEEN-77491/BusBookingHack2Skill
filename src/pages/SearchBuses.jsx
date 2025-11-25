import React from "react";
import BusCard from "../components/BusCard";
import SearchForm from "../components/SearchForm";
import { busDetails } from "../services/citesData";

const SearchBuses = () => {
  return (
    <div className="">
      <div className="w-[600px] align-middle mx-auto mt-3">
        <SearchForm />
      </div>
      <div className="mt-4">
        <BusCard busData={busDetails} />
      </div>
    </div>
  );
};

export default SearchBuses;
