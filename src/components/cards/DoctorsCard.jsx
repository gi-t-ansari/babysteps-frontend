import React from "react";
import dummyImg from "../../assets/dummy-image.jpg";
import { useNavigate } from "react-router-dom";
import { APP_URL } from "../../config";

const DoctorsCard = ({ doctor }) => {
  const navigate = useNavigate();

  const handleOpenAvailability = (e) => {
    e?.preventDefault();
    navigate(APP_URL.BOOKING.replace(":doctorId", doctor?._id));
  };

  return (
    <div
      className="p-4 bg-white rounded-lg hover:scale-105 shadow-xl w-1/5 h-fit cursor-pointer transition-all duration-300 ease-linear"
      onClick={handleOpenAvailability}
    >
      <header className="flex items-center gap-x-4">
        <div className="h-16 w-16 rounded-full overflow-hidden border">
          <img
            className="w-full h-full"
            src={dummyImg || null}
            alt={doctor?.name}
          />
        </div>
        <h5>{doctor?.name}</h5>
      </header>
      <p
        className="my-2
      "
      >
        <span className=" text-sm">Specialization: </span>
        <span className="font-semibold text-normal">
          {doctor?.specialization}
        </span>
      </p>
      <p>
        <span className=" text-sm">Availability: </span>
        <span className="font-semibold text-normal">{`${doctor?.workingHours?.start} - ${doctor?.workingHours?.end}`}</span>
      </p>
    </div>
  );
};

export default DoctorsCard;
