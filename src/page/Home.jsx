import Slider from "@/utils/Silder";
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import CopyExample from "./CopyExample";

const Home = () => {
  const words = ["apple", "banana", "orange", "kiwi", "pear", "avocado"];
  const longestWord = words.reduce((a, b) => (a?.length >= b?.length ? a : b));
  console.log(longestWord); // Output: "avocado"
  return (
    <>
      <Slider />
      <div className=" flex justify-evenly gap-5 mt-4   "></div>
    </>
  );
};

export default Home;

// const [date, setDate] = useState(new Date());
{
  /* <div className="flex justify-evenly   ">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow-2xl w-full"
          />
          <CopyExample />
        </div> */
}
