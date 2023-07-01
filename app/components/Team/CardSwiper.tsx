import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import Link from "next/link";

import { BARBERS } from "@/utils";
import { BarberCard } from "./BarberCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export const CardSwiper = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Autoplay, Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
    >
      {BARBERS.map((barber, index) => (
        <SwiperSlide
          key={`${index}-${barber.name}`}
          className={"w-35 w-full items-center justify-around md:flex"}
        >
          <Link href={"/"} className="flex">
            <BarberCard
              src={barber.src}
              height={barber.height}
              width={barber.width}
              name={barber.name}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
