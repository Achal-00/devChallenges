import { useState } from "react";

export default function SubjectField() {
  const [selectedOption, setSelectedOption] = useState(
    "Building Landing pages"
  );

  return (
    <div className="grid gap-1 text-sm relative">
      <p className="text-white">Subject</p>
      <div
        className="h-11 rounded-lg px-4 text-custom-black bg-box-bg flex justify-between items-center"
        onClick={() =>
          document.querySelector(".menuSubject").classList.toggle("hidden")
        }
      >
        <p>{selectedOption}</p>
        <img src="Expand_down.svg" alt="down-arrow" className="w-4" />
      </div>
      <div className="rounded-lg px-4 text-custom-black bg-box-bg hidden menuSubject absolute top-full w-full shadow-lg">
        <p
          className="h-11 grid content-center cursor-pointer"
          onClick={() => {
            setSelectedOption("Building Landing pages");
            document.querySelector(".menuSubject").classList.toggle("hidden");
          }}
        >
          Building Landing pages
        </p>
        <hr />
        <p
          className="h-11 grid content-center cursor-pointer"
          onClick={() => {
            setSelectedOption("Building back-end");
            document.querySelector(".menuSubject").classList.toggle("hidden");
          }}
        >
          Building back-end
        </p>
        <hr />
        <p
          className="h-11 grid content-center cursor-pointer"
          onClick={() => {
            setSelectedOption("Building full-stack app");
            document.querySelector(".menuSubject").classList.toggle("hidden");
          }}
        >
          Building full-stack app
        </p>
      </div>
    </div>
  );
}
