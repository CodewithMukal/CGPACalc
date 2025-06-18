import { createContext, useState } from "react";
import { NavBar } from "./components/NavBar";
import { Marks } from "./components/Marks";
import { Grades } from "./components/Grades";

function App() {
  const [mode, setMode] = useState("");
  const [subject, setSubject] = useState(0);
  const [seeSubjects, setVisible] = useState(false);
  const [cg, setCG] = useState(null);
  let [gradeVals, setGrades] = useState(Array(subject).fill(0));
  let [marks, setMarks] = useState(Array(subject).fill(0));
  let [subjectNames, setSubjectNames] = useState(Array(subject).fill(""));
  let [creditValues, setCredits] = useState(Array(subject).fill(0));

  const handleMode = (e) => {
    setMode(e.target.value);
    setSubject(1);
  };
  const handleCheck = () => {
    setVisible(!seeSubjects);
  };
  const addSubject = () => {
    if (subject < 15) setSubject(subject + 1);
  };
  const removeSubject = () => {
    if (subject > 1) setSubject(subject - 1);
  };
  const handleCalculate = () => {
    let totalCredits = 0;
    let obtainedCredits = 0;
    for (let i of creditValues) {
      totalCredits += Number(i);
    }
    for (let i in creditValues) {
      obtainedCredits += creditValues[i] * gradeVals[i];
    }
    let cgpa = obtainedCredits / totalCredits;
    let rounded = cgpa.toFixed(2);
    setCG(rounded);
  };
  return (
    <>
      <NavBar />
      <h1 className="text-center my-[32px] text-[#0A462F] md:text-3xl text-xl lg:text-5xl fontHerm">
        Specially designed for students of NITJ
      </h1>
      <div className="min-h-[660px] w-[100%] bg-[#14C682] py-[20px]">
        <div className="flex justify-center items-center lg:flex-row flex-col gap-[20px]">
          <p className="font-bold text-[16px] md:text-xl lg:text-2xl text-white">
            Choose to enter Marks or Grades:{" "}
          </p>
          <div class="relative w-48">
            <select
              onChange={handleMode}
              className="appearance-none w-full px-4 py-2 rounded-full outline-none focus:ring-0 text-gray-700 bg-white shadow"
            >
              <option disabled selected>
                Choose...
              </option>
              <option value="marks">Marks</option>
              <option value="grades">Grades</option>
            </select>

            <div class="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg
                class="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-3 items-center mt-[10px]">
          <p className="text-white text-center align-middle lg:text-2xl font-bold">
            Enter Subjects:{" "}
          </p>{" "}
          <input
            type="checkbox"
            onClick={handleCheck}
            className="lg:w-5 lg:h-5 mt-1"
          />
        </div>
        {mode === "marks" && (
          <div>
            <Marks
              gradeVals={gradeVals}
              setGrade={setGrades}
              subjectNames={subjectNames}
              creditValues={creditValues}
              setCredit={setCredits}
              setSubjectNames={setSubjectNames}
              count={subject}
              seeSubjects={seeSubjects}
            />
          </div>
        )}
        {mode === "grades" && (
          <div>
            <Grades
              gradeVals={gradeVals}
              subjectNames={subjectNames}
              creditValues={creditValues}
              setGrade={setGrades}
              setCredit={setCredits}
              setSubjectNames={setSubjectNames}
              count={subject}
              seeSubjects={seeSubjects}
            />
          </div>
        )}
        {mode != "" && (
          <div className="flex justify-center gap-2 items-center my-[20px]">
            <button
              onClick={addSubject}
              className="text-white bg-[#0A462F] font-semibold px-[20px] py-[10px] rounded-md hover:bg-blue-800"
            >
              Add Subject
            </button>
            <button
              onClick={removeSubject}
              className="text-white bg-[#0A462F] font-semibold px-[20px] py-[10px] rounded-md hover:bg-blue-800"
            >
              Remove Subject
            </button>
          </div>
        )}
        {mode != "" && (
          <div className="flex justify-center items-center text-2xl ">
            <button
              onClick={handleCalculate}
              className="flex justify-center items-center px-[150px] py-[10px] max-w-[90%] rounded-[10px] bg-white text-[#14C682] hover:bg-[#14C682] hover:text-white hover:border-2 transition-colors font-bold"
            >
              Calculate
            </button>
          </div>
        )}
        {cg && cg<=10 && (
          <p className="text-white font-bold text-2xl justify-center items-center text-center my-[30px]">
            Your CGPA is : {cg}
          </p>
        )}
      </div>
    </>
  );
}

export default App;
