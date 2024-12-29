import { useState } from "react";

import "./App.css";
import { Button } from "./components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button className="mb-6">hello</Button>
      <Carousel className="mx-2 ">
        <CarouselContent className="-ml-2 md:-ml-4">
          <CarouselItem className="pl-2 md:pl-4">
            <img src={"1.avif"} alt="" />
          </CarouselItem>
          <CarouselItem className="pl-2 md:pl-4">
            {" "}
            <img src={"2.avif"} alt="" />
          </CarouselItem>
          <CarouselItem className="pl-2 md:pl-4">
            {" "}
            <img src={"3.avif"} alt="" />
          </CarouselItem>
          <CarouselItem className="pl-2 md:pl-4">
            {" "}
            <img src={"4.avif"} alt="" />
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}

export default App;
