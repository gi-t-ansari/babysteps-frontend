import React from "react";

const SlotCard = ({ slot, setSelectedSlot, selectedSlot }) => {
  return (
    <div
      className={`px-4 py-2 w-fit h-fit rounded-sm text-white ${
        selectedSlot === slot
          ? "bg-slate-700 cursor-not-allowed"
          : "bg-blue-400 cursor-pointer"
      } `}
      onClick={() => setSelectedSlot(slot)}
    >
      {slot}
    </div>
  );
};

export default SlotCard;
