import React, { use, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Review = () => {
  const busRoute = useSelector((state) => state.search);
  const seatDetails = useSelector((state) => state.seatSelection);
  const passengerInformation = useSelector((state) => state.passengerInfo);
  const busDetail = useSelector((state) => state.addBusDetail);
  const navigate = useNavigate();

  console.log("passengerInformation:", passengerInformation);

  const { fromCity, toCity, journeyDate } = busRoute || {};
  const { selectedSeats, totalSeats } = seatDetails || {};
  const { fullName, gender, email, phone, age } =
    passengerInformation.validData || {};
  const { id, type, fare, busName, availableSeats, depatureTime, arrivalTime } =
    busDetail?.bus || {};

  const onConfirm = () => {
    navigate("/ticket");
  };

  return (
    <div className=" flex flex-col w-full max-w-md mx-auto bg-white shadow-md rounded-xl p-4 gap-4">
      <h2 className="flex justify-center text-lg font-bold">Review</h2>
      <div className="border rounded-2xl p-3">
        <h2 className="text-lg font-semibold">Route</h2>
        <p className="text-gray-600 text-sm">
          {fromCity} → {toCity}
        </p>
        <p className="text-gray-500 text-xs mt-1">{journeyDate}</p>
      </div>

      <div className="border rounded-2xl p-3">
        <h2 className="text-lg font-semibold">Bus</h2>
        <p className="text-gray-600 text-sm">{type}</p>
        <p className="text-gray-600 text-sm">{busName ?? " "}</p>
        <p className="text-gray-500 text-xs">{depatureTime}</p>
        <p className="text-gray-500 text-xs">{arrivalTime}</p>
      </div>

      <div className="border rounded-2xl p-3">
        <h2 className="text-lg font-semibold">Seats</h2>
        <div className="flex flex-wrap gap-2 mt-1">
          {selectedSeats?.map((seat, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm"
            >
              Seat : {seat}
            </span>
          ))}
        </div>
      </div>

      <div className="border rounded-2xl p-3">
        <h2 className="text-lg font-semibold">Fare</h2>
        <p className="text-gray-700 text-xl font-bold mt-1">₹ {fare}</p>
      </div>

      <div className="flex flex-col border rounded-2xl p-3 gap-2 mb-4">
        <h2 className="text-lg font-semibold">Passenger</h2>

        <p className="font-medium text-sm">Full Name - {fullName} </p>
        <p className="font-medium text-sm">Email - {email} </p>
        <p className="font-medium text-sm ">Age - {age} </p>
        <p className="font-medium text-sm ">Gender - {gender} </p>
      </div>

      <button
        onClick={onConfirm}
        className="w-full py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
      >
        Confirm
      </button>
    </div>
  );
};
export default Review;
