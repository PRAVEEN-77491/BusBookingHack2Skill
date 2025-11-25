import React, { useState } from "react";
import { addSeats } from "../feature/seatSelection";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SeatSelection() {
  const totalSeats = 40;
  const [selected, setSelected] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const busDetail = useSelector((state) => state.addBusDetail);
  console.log("busDetails:", busDetail);

  const toggleSeat = (index) => {
    setSelected((prev) =>
      prev.includes(index)
        ? prev.filter((val) => val !== index)
        : [...prev, index]
    );
  };

  const handleBook = () => {
    if (selected.length === 0) return;
    dispatch(addSeats({ totalSeats: selected, selectedSeats: [selected] }));
    navigate("/passenger-info");
  };

  return (
    <div className="p-6 max-w-70 m-auto">
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
        <div className="flex flex-wrap gap-2">
          {[...Array(totalSeats)].map((seat, index) => {
            const isSelected = selected.includes(index);
            return (
              <button
                key={index}
                type="button"
                onClick={() => toggleSeat(index)}
                className={`w-10 h-10 rounded-md flex items-center justify-center text-sm font-medium transition-shadow focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  isSelected
                    ? "bg-blue-600 text-white ring-blue-400"
                    : "bg-white text-gray-800 border border-gray-300 hover:shadow"
                }`}
              >
                {index}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-gray-700">
          Total Fare : {busDetail?.bus?.fare * selected?.length || 1}
        </span>
        <button
          onClick={handleBook}
          disabled={selected.length === 0}
          className={` px-4 py-2 rounded-md text-white font-medium transition disabled:opacity-60 disabled:cursor-not-allowed ${
            selected.length ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400"
          }`}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
