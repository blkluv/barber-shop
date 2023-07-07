"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { motion } from "framer-motion";
import Link from "next/link";

import "./styles.css";

import { TeamMemberCard } from "../TeamMemberCard";
import { useGetBarberImages } from "@/_hooks";

export const TeamSwiper = () => {
  const barberImages = useGetBarberImages();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      className="md:hidden"
    >
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
        {barberImages.map((barber, index) => (
          <SwiperSlide
            key={`${index}-${barber.name}`}
            className={"w-35 w-full items-center justify-around md:flex"}
          >
            <Link href={"/"} className="flex">
              <TeamMemberCard
                src={barber.src}
                height={barber.height}
                width={barber.width}
                name={barber.name}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};
