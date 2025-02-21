import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { doctorsSelector } from "../redux/doctorSlice";
import { fetchAvailableSlots, fetchSingleDoctor } from "../api";
import { useLocation } from "react-router-dom";
import dummyImg from "../assets/dummy-image.jpg";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import moment from "moment/moment";
import SlotCard from "../components/cards/SlotCard";
import { BookAppointmentForm } from "../components";

const Booking = () => {
  const [doctorData, setDoctorData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const today = dayjs();
  const maxDate = today.add(6, "day");

  console.log(selectedDate);

  const location = useLocation();
  const doctorId = location?.pathname?.split("/").pop();

  const getDoctorData = async () => {
    const data = await fetchSingleDoctor(doctorId);
    setDoctorData(data);
  };

  useEffect(() => {
    getDoctorData();
  }, []);

  const getAvailableSlots = async () => {
    setLoading(true);
    const data = await fetchAvailableSlots(
      doctorId,
      moment(selectedDate).format("YYYY-MM-DD")
    );
    console.log("Available Slots -->", doctorId, data?.availableSlots);

    setAvailableSlots(data?.availableSlots);
    setLoading(false);
  };

  return (
    <div className="w-screen h-screen py-4 px-10 bg-slate-300 flex flex-col">
      <h1 className="text-center text-2xl font-bold mb-10 h-fit">
        Doctor Details & Availability
      </h1>

      <header className=" flex justify-between h-fit">
        <div className="flex items-center gap-x-4">
          <div className="h-20 w-20 rounded-full overflow-hidden border">
            <img
              className="w-full h-full"
              src={dummyImg || null}
              alt={doctorData?.name}
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold">{doctorData?.name}</h2>
            <h5 className="text ">{doctorData?.specialization}</h5>
            <h5 className="text ">
              {`${doctorData?.workingHours?.start} - ${doctorData?.workingHours?.end}`}
            </h5>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Select a Date"
              minDate={today}
              maxDate={maxDate}
              onChange={(newDate) => setSelectedDate(newDate?.$d)}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </LocalizationProvider>
          <button
            className={`px-4 py-4 text-white rounded-sm  ${
              selectedDate
                ? "bg-blue-500 cursor-pointer"
                : "bg-blue-200 cursor-not-allowed"
            }`}
            onClick={getAvailableSlots}
          >
            {loading ? "Checking..." : "Check Availability"}
          </button>
        </div>
      </header>

      <div className="flex flex-wrap gap-x-4 justify-center h-fit my-4">
        {availableSlots &&
          availableSlots?.map((slot) => (
            <SlotCard
              key={`${doctorId}-${slot}`}
              slot={slot}
              selectedSlot={selectedSlot}
              setSelectedSlot={setSelectedSlot}
            />
          ))}
      </div>
      {selectedSlot && (
        <BookAppointmentForm
          selectedSlot={selectedSlot}
          selectedDate={selectedDate}
          doctorId={doctorId}
        />
      )}
    </div>
  );
};

export default Booking;
