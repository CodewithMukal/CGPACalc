import React from "react";

export const Marks = (props) => {
  let serial = [];
  for (let i = 0; i < props.count; i++) {
    serial.push(
      <div className="flex justify-center items-center gap-10">
        {i < 9 && <p className="text-white text-xl font-bold">0{i + 1}.</p>}
        {i >= 9 && <p className="text-white text-xl font-bold">{i + 1}.</p>}
        <input
          id="subject"
          className="bg-white flex rounded-[10px] justify-center items-start px-[10px] w-[268px] h-[58px]"
          placeholder="Subject Name..."
        ></input>
        <div className="flex justify-center items-center gap-1">
          <input
            id="marks"
            type="number"
            min={0}
            max={100}
            className="bg-white flex justify-center rounded-[10px] items-center text-center focus:ring-0 border-0 w-[58px] h-[58px]"
            placeholder="xx"
          ></input>
          <p className="text-white font-bold">out of 100</p>
        </div>
        <input
          className="w-[58px] h-[58px] rounded-[10px] bg-white text-center"
          min={1}
          type="number"
          max={10}
          placeholder="x"
        ></input>
      </div>
    );
  }
  return (
    <div>
      <div className="flex justify-center items-center mt-[30px] text-2xl font-bold text-white gap-[110px]">
        <p>S. No.</p>
        <p>Subject</p>
        <p>Marks</p>
        <p>Credits</p>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center my-2">
        {serial}
      </div>
    </div>
  );
};
