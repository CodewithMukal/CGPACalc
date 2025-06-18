import React from "react";

export const Marks = (props) => {
  let serial = [];
  let subject = [];
  let marks = [];
  let credits = [];

  const handleSubject = (i, value) => {
    const update = [...props.subjectNames];
    update[i] = value;
    props.setSubjectNames(update);
  };
  const handleMarks = (i,value) => {
    const update = [...props.gradeVals];
    value = value/10;
    if(Number.isInteger(value) && value!=10){
      value = value+1;
    }
    else{
      value = Math.ceil(value)
    }
    update[i] = value;
    props.setGrade(update)
  }
  const handleCredits = (i, value) => {
    const update = [...props.creditValues];
    update[i] = value;
    props.setCredit(update);
  };

  for (let i = 0; i < props.count; i++) {
    serial.push(
      <div className="flex justify-center min-h-[30px] md:min-h-[40px] lg:min-h-[58px] my-1 items-center gap-10">
        {i < 9 && <p className="text-white lg:text-xl font-bold">0{i + 1}.</p>}
        {i >= 9 && <p className="text-white lg:text-xl font-bold">{i + 1}.</p>}
      </div>
    );
    subject.push(
      <input
        onChange={(e) => handleSubject(i, e.target.value)}
        placeholder="Subject Name..."
        id="subject"
        className="bg-white text-black flex rounded-[10px] justify-center items-start px-[10px] w-[100px] md:w-[150px] lg:w-[268px] h-[30px] text-[12px] lg:text-[16px]  md:h-[40px] lg:h-[58px]"
      ></input>
    );
    marks.push(
      <div className="flex justify-center items-center gap-1">
        <input
          id="marks"
          type="number"
          min={0}
          max={100}
          onChange={(e) => handleMarks(i,e.target.value)}
          className="bg-white flex text-black justify-center rounded-[10px] items-center text-center focus:ring-0 border-0 h-[30px] text-[12px] lg:text-[16px] md:w-[40px] w-[30px] md:h-[40px] lg:h-[58px] lg:w-[58px]"
          placeholder="xx"
        ></input>
        <p className="text-white text-[12px] md:text-[14px] lg:text-[16px] font-bold">out of 100</p>
      </div>
    );
    credits.push(
      <input
        className="lg:w-[58px] w-[30px] text-[14px] md:text-[16px] md:w-[40px] h-[30px] md:h-[40px] lg:h-[58px] text-black rounded-[10px] bg-white text-center"
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
      <div className="flex justify-center items-center mt-[30px] text-2xl text-white gap-6 md:gap-15 lg:gap-[100px]">
      <div className="flex justify-center items-center flex-col">
          <p className="lg:text-2xl font-bold">S.No.</p>
          {serial}
        </div>
        {props.seeSubjects && (
          <div className="flex justify-center items-center flex-col">
            <p className="lg:text-2xl font-bold">Subject</p>
            <div className="flex flex-col gap-2">{subject}</div>
          </div>
        )}
        <div className="flex justify-center items-center flex-col">
          <p className="lg:text-2xl font-bold">Marks</p>
          <div className="flex flex-col gap-2">{marks}</div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <p className="lg:text-2xl font-bold">Credits</p>
          <div className="flex flex-col gap-2">{credits}</div>
        </div>
      </div>
    </div>
  );
};
