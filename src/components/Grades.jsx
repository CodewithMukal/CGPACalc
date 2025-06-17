import React, { useState } from "react";

export const Grades = (props) => {
  let serial = [];
  let subject = [];
  let grades = [];
  let credits = [];

  const handleSubject = (i, value) => {
    const update = [...props.subjectNames];
    update[i] = value;
    props.setSubjectNames(update)
  };
  const handleGrades = (i, value) => {
    const update = [...props.gradeVals];
    update[i] = value;
    props.setGrade(update)
  };
  const handleCredits = (i, value) => {
    const update = [...props.creditValues];
    update[i] = value;
    props.setCredit(update)
  };

  for (let i = 0; i < props.count; i++) {
    serial.push(
      <div className="flex justify-center min-h-[58px] my-1 items-center gap-10">
        {i < 9 && <p className="text-white text-xl font-bold">0{i + 1}.</p>}
        {i >= 9 && <p className="text-white text-xl font-bold">{i + 1}.</p>}
      </div>
    );
    subject.push(
      <input
        onChange={(e) => handleSubject(i, e.target.value)}
        placeholder="Subject Name..."
        id="subject"
        className="bg-white text-black flex rounded-[10px] justify-center items-start px-[10px] w-[268px] h-[58px]"
      ></input>
    );
    grades.push(
      <div className="flex justify-center text-black items-center gap-1">
        <select
          id="grades"
          onChange={(e) => handleGrades(i, e.target.value)}
          className="bg-white flex justify-center rounded-[10px] items-center text-center focus:ring-0 border-0 w-[58px] h-[58px]"
          placeholder="x"
        >
          <option disabled selected>
            x
          </option>
          <option value={10}>S</option>
          <option value={9}>A</option>
          <option value={8}>B</option>
          <option value={7}>C</option>
          <option value={6}>D</option>
          <option value={5}>E</option>
        </select>
      </div>
    );
    credits.push(
      <input
        className="w-[58px] h-[58px] text-black rounded-[10px] bg-white text-center"
        min={1}
        type="number"
        onChange={(e) => handleCredits(i, e.target.value)}
        max={10}
        placeholder="x"
      ></input>
    );
  }
  return (
    <div>
      <div className="flex justify-center items-center mt-[30px] text-white gap-[100px]">
        <div className="flex justify-center items-center flex-col">
          <p className="text-2xl font-bold">S.No.</p>
          {serial}
        </div>
        <div className="flex justify-center items-center flex-col">
          <p className="text-2xl font-bold">Subject</p>
          <div className="flex flex-col gap-2">{subject}</div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <p className="text-2xl font-bold">Grade</p>
          <div className="flex flex-col gap-2">{grades}</div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <p className="text-2xl font-bold">Credits</p>
          <div className="flex flex-col gap-2">{credits}</div>
        </div>
      </div>
    </div>
  );
};
