import moment from "moment";
import React from "react";

const BookAppointmentForm = ({ selectedSlot, doctorId, selectedDate }) => {
  return (
    <form>
      <div className="mb-3">
        <label>Date of Appointment:</label>
        <input
          className="bg-white block w-full py-1.5 pl-2 rounded-sm"
          type="text"
          readOnly
          value={moment(selectedDate).format("DD-MM-YYYY")}
        />
      </div>
      <div className="mb-3">
        <label>Time of Appointment:</label>
        <input
          className="bg-white block w-full py-1.5 pl-2 rounded-sm"
          type="text"
          readOnly
          value={selectedSlot}
        />
      </div>
      <div className="mb-3">
        <label>Patient Name:</label>
        <input
          className="bg-white block w-full py-1.5 pl-2 rounded-sm"
          type="text"
        />
      </div>
    </form>
  );
};

export default BookAppointmentForm;
