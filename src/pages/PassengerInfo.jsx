import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { addPassenger } from "../feature/passengerInfo";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  fullName: yup
    .string()
    .trim()
    .required("Full name is required")
    .min(2, "Enter a valid name"),
  email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Invalid email"),
  phone: yup
    .string()
    .trim()
    .required("Phone is required")
    .matches(/^\+?[0-9]{7,15}$/, "Invalid phone number"),
  age: yup
    .number()
    .typeError("Age must be a number")
    .required("Age is required")
    .integer()
    .min(1, "Enter valid age")
    .max(120, "Enter realistic age"),
  gender: yup.string().required("Gender is required"),
});

const PassengerInfo = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
  });

  const [errors, setErrors] = useState({});
  const [savedData, setSavedData] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log("Submitting form with data:", form);
    e.preventDefault();
    setErrors({});

    try {
      const validData = await schema.validate(form);

      setSavedData(validData);
      console.log("Saved Data:", validData);
      dispatch(addPassenger({ validData }));
      navigate("/review");
    } catch (err) {
      console.log("Validation Error:", err);
      setErrors({ [err.path]: err.message });
    }
  };

  const clearForm = () => {
    setForm({
      fullName: "",
      email: "",
      phone: "",
      age: "",
      gender: "",
    });
    setErrors({});
    setSavedData(null);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Passenger Information</h2>

      <form className="flex flex-col gap-4">
        <label className="flex flex-col">
          <span className="text-sm font-medium">Full Name</span>
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className="mt-1 px-3 py-2 border rounded-md"
            placeholder="Name"
          />
          {errors.fullName && (
            <p className="text-red-600 text-sm">{errors.fullName}</p>
          )}
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Email</span>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="mt-1 px-3 py-2 border rounded-md"
            placeholder="test@mail.com"
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email}</p>
          )}
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Phone</span>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className="mt-1 px-3 py-2 border rounded-md"
            placeholder="Mobile Number"
          />
          {errors.phone && (
            <p className="text-red-600 text-sm">{errors.phone}</p>
          )}
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Age</span>
          <input
            name="age"
            type="number"
            value={form.age}
            onChange={handleChange}
            className="mt-1 px-3 py-2 border rounded-md"
            placeholder="18"
          />
          {errors.age && <p className="text-red-600 text-sm">{errors.age}</p>}
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Gender</span>

          <div className="flex items-center gap-4 mt-1">
            {["male", "female", "other"].map((g) => (
              <label key={g} className="flex items-center gap-2 capitalize">
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={form.gender === g}
                  onChange={handleChange}
                />
                <span>{g}</span>
              </label>
            ))}
          </div>

          {errors.gender && (
            <p className="text-red-600 text-sm">{errors.gender}</p>
          )}
        </label>

        <div className="flex gap-3 mt-3">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            onClick={handleSubmit}
          >
            Confirm Passenger
          </button>

          <button
            type="button"
            onClick={clearForm}
            className="px-4 py-2 border rounded-md"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default PassengerInfo;
