import React from "react";
import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import Form from "./components/Form/Form";

export default function App() {
  return (
    <div className="min-h-screen bg-[url('/bg-image.svg')] bg-no-repeat bg-cover p-4 flex flex-col gap-16 font-custom-font">
      <Navbar />
      <Heading />
      <Form />
    </div>
  );
}
