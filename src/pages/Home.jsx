import React, { useEffect } from "react";
import { useState } from "react";
import { fetchDoctors } from "../api";
import { useDispatch } from "react-redux";
import { listDoctors } from "../redux/doctorSlice";
import { DoctorsCard } from "../components";

const Home = () => {
  const dispatch = useDispatch();
  const [doctorsData, setDoctorsData] = useState([]);

  const getAllDoctors = async () => {
    const data = await fetchDoctors();
    setDoctorsData(data);
    dispatch(listDoctors(data));
  };

  useEffect(() => {
    getAllDoctors();
  }, []);

  return (
    <div className="w-screen h-screen py-4 px-10 bg-slate-300 flex flex-col">
      <h1 className="text-center text-2xl mb-10 h-fit">Doctors Near You</h1>
      <div className="flex font-bold justify-center flex-wrap gap-x-8 flex-1">
        {doctorsData &&
          doctorsData?.map((doctor) => (
            <DoctorsCard key={doctor?.name} doctor={doctor} />
          ))}
      </div>
    </div>
  );
};

export default Home;
