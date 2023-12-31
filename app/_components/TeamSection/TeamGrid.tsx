"use client";

import Link from "next/link";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";

import { TeamMemberCard } from "@/_components/TeamSection/TeamMemberCard";
import { useGetBarberImages } from "@/_hooks";

const MotionGrid = motion(Grid);

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const TeamGrid = (): React.JSX.Element => {
  const barberImages = useGetBarberImages();

  return (
    <div className="mx-auto hidden w-full max-w-5xl py-10 md:flex">
      <MotionGrid
        container
        spacing={1}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
        variants={container}
        initial="hidden"
        whileInView="show"
      >
        {barberImages.map((barber, index) => (
          <MotionGrid
            variants={item}
            key={`${index}-${barber.name}`}
            className="w-full"
            item
            xs={2}
            sm={4}
            md={4}
          >
            <Link href={"/"} className="flex">
              <TeamMemberCard
                src={barber.src}
                height={barber.height}
                width={barber.width}
                name={barber.name}
              />
            </Link>
          </MotionGrid>
        ))}
      </MotionGrid>
    </div>
  );
};
