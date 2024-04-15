import React from 'react';
import img1 from "@/images/img1.jpg";
import img2 from "@/images/img2.jpg";
import img3 from "@/images/img3.jpg";
import img4 from "@/images/img4.jpg";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

const HomeCarousel = () => {
    return (

        <Carousel className ="mb-20">
        <CarouselPrevious />
        <CarouselContent className="ml-0 md:ml-0"> {/* Adjust margin if needed */}
            <CarouselItem className="px-2 md:px-4"> {/* Adjust padding for spacing */}
                <img src={img1} alt="Book cover of The lord of the mysteries by Cuttlefish" className="w-full h-auto max-w-xs md:max-w-sm"/> {/* Adjust width and height */}
            </CarouselItem>
            <CarouselItem className="px-2 md:px-4">
                <img src={img2} alt="Book cover of Mistborn: the final empire by Brandon Sanderson" className="w-full h-auto max-w-xs md:max-w-sm"/>
            </CarouselItem>
            <CarouselItem className="px-2 md:px-4">
                <img src={img3} alt="Book cover of The will of the many by James Islington" className="w-full h-auto max-w-xs md:max-w-sm"/>
            </CarouselItem>
            <CarouselItem className="px-2 md:px-4">
                <img src={img4} alt="Book cover of Morning Star by Pierce Brown" className="w-full h-auto max-w-xs md:max-w-sm"/>
            </CarouselItem>
        </CarouselContent>
        <CarouselNext />
    </Carousel>

    );
}

export default HomeCarousel;