import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBusDetail } from "../feature/busDetails";

const BusCard = ({ busData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelectSeat = (bus) => {
    dispatch(addBusDetail({ bus }));
    navigate(`/seats/${bus.id}`);
  };
  return (
    <div className="w-screen flex justify-center items-center mb-2 ">
      <div className="w-[400px]">
        {busData.length > 0 &&
          busData.map((bus, index) => (
            <div
              key={index}
              className=" w-full p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200 mb-4"
            >
              <div className="flex justify-between items-center mb-3">
                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    {bus.depatureTime} → {bus.arrivalTime}
                  </p>
                  <p className="text-sm text-gray-500">{bus.type}</p>
                </div>
                <div className="text-right">
                  <span className="text-xl font-bold text-green-600">
                    ₹{bus.fare}
                  </span>
                  <p className="text-sm text-gray-500">
                    {bus.availableSeats} seats
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between ">
                <p className="text-sm text-gray-500">{bus?.busName}</p>
                <button
                  className=" bg-blue-600 text-white text-bold px-2 py-1 rounded-md hover:bg-blue-700 hover:cursor-pointer"
                  onClick={() => handleSelectSeat(bus)}
                >
                  Select Seat
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BusCard;
