import React from "react";
import { useSelector } from "react-redux";

const ViewTicket = () => {
  const busRoute = useSelector((state) => state.search);
  const seatDetails = useSelector((state) => state.seatSelection);
  const passengerInfo = useSelector((state) => state.passengerInfo);
  const busDetail = useSelector((state) => state.addBusDetail);

  const { fromCity, toCity, journeyDate } = busRoute || {};
  const { selectedSeats } = seatDetails || {};
  const { fullName, gender, email, phone, age } = passengerInfo || {};
  const { type, fare, busName, depatureTime, arrivalTime } =
    busDetail?.bus || {};

  const ticketId = crypto.randomUUID().slice(0, 8).toUpperCase();

  return (
    <div className="w-full max-w-[500px] mx-auto bg-white shadow-xl rounded-xl p-5 border relative overflow-hidden">
      <div className="bg-blue-600 text-white rounded-lg py-3 px-4 mb-4">
        <h2 className="text-xl font-bold text-center tracking-wide">
          BUS TICKET
        </h2>
      </div>

      <div className="flex justify-between text-sm text-gray-500 mb-4">
        <p>
          Ticket ID: <span className="font-semibold">{ticketId}</span>
        </p>
        <p>
          Date:{" "}
          <span className="font-semibold">
            {new Date().toLocaleDateString()}
          </span>
        </p>
      </div>

      <div className="border rounded-xl p-4 mb-3">
        <h3 className="text-lg font-semibold mb-1">Route</h3>

        <div className="flex items-center justify-between text-gray-700">
          <div className="text-base font-semibold">{fromCity}</div>
          <div className="text-xl">→</div>
          <div className="text-base font-semibold">{toCity}</div>
        </div>

        <p className="text-gray-500 text-sm mt-2">
          Journey Date: {journeyDate}
        </p>
      </div>

      <div className="border rounded-xl p-4 mb-3">
        <h3 className="text-lg font-semibold mb-1">Bus Details</h3>
        <p className="text-gray-700 text-sm">Bus Name: {busName}</p>
        <p className="text-gray-700 text-sm">Type: {type}</p>

        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <p>Departure: {depatureTime}</p>
          <p>Arrival: {arrivalTime}</p>
        </div>
      </div>

      <div className="border rounded-xl p-4 mb-3">
        <h3 className="text-lg font-semibold mb-1">Seat(s)</h3>

        <div className="flex flex-wrap gap-2 mt-2">
          {selectedSeats?.map((seat, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
            >
              Seat {seat}
            </span>
          ))}
        </div>
      </div>

      <div className="border rounded-xl p-4 mb-3">
        <h3 className="text-lg font-semibold mb-1">Fare</h3>
        <p className="text-gray-800 text-[15px] font-semibold">
          Total: ₹{fare}
        </p>
      </div>

      <div className="border rounded-xl p-4">
        <h3 className="text-lg font-semibold mb-2">Passenger Details</h3>

        <p className="text-sm font-medium text-gray-700">Name: {fullName}</p>
        <p className="text-sm font-medium text-gray-700">Email: {email}</p>
        <p className="text-sm font-medium text-gray-700">Phone: {phone}</p>
        <p className="text-sm font-medium text-gray-700">Age: {age}</p>
        <p className="text-sm font-medium text-gray-700">Gender: {gender}</p>
      </div>
    </div>
  );
};

export default ViewTicket;
