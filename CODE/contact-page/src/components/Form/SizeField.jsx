import { useState } from "react";

export default function SizeField() {
  const [selectedOption, setSelectedOption] = useState("50-100 employees");

  return (
    <div className="grid gap-1 text-sm relative">
      <p className="text-white">Company Size</p>
      <div
        className="h-11 rounded-lg px-4 text-custom-black bg-box-bg flex justify-between items-center"
        onClick={() =>
          document.querySelector(".menu").classList.toggle("hidden")
        }
      >
        <p>{selectedOption}</p>
        <img src="Expand_down.svg" alt="down-arrow" className="w-4" />
      </div>
      <div className="rounded-lg px-4 text-custom-black bg-box-bg hidden menu absolute top-full w-full shadow-lg">
        <p
          className="h-11 grid content-center cursor-pointer"
          onClick={() => {
            setSelectedOption("50-100 employees");
            document.querySelector(".menu").classList.toggle("hidden");
          }}
        >
          50-100 employees
        </p>
        <hr />
        <p
          className="h-11 grid content-center cursor-pointer"
          onClick={() => {
            setSelectedOption("101-500 employees");
            document.querySelector(".menu").classList.toggle("hidden");
          }}
        >
          101-500 employees
        </p>
        <hr />
        <p
          className="h-11 grid content-center cursor-pointer"
          onClick={() => {
            setSelectedOption("501-2000 employees");
            document.querySelector(".menu").classList.toggle("hidden");
          }}
        >
          501-2000 employees
        </p>
      </div>
    </div>
  );
}
