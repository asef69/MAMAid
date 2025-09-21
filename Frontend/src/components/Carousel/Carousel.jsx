import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import BabyStage from "@/assets/babystages.jpg"
import FamilyPic from "@/assets/familypic.jpg"
import MothersDay from "@/assets/mothersday.jpg"
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

function CarouselComponent(){
    const plugin = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    );

    const picArr = [BabyStage, FamilyPic, MothersDay];



    return(
        <div>
            <Carousel
                plugins={[plugin.current]}
                className="w-full h-full ml-5"
            >
                <CarouselContent className="w-full">
                    {picArr.map((banner, index) => (
                    <CarouselItem key={index} className="w-full h-full">
                        <div className="w-full h-full flex justify-center">
                        <img
                            src={banner}
                            alt="Course Image"
                            className="w-full h-[400px] object-cover"
                        />
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}

export default CarouselComponent;