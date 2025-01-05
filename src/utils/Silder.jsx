import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

const Slider = () => {
  return (
    <>
      <Carousel className="mx-2 mt-4 ">
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
};

export default Slider;
