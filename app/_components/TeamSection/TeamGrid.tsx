"use client";

import Link from "next/link";
import { Grid } from "@mui/material";

import { TeamMemberCard } from "@/_components/TeamSection/TeamMemberCard";
import { useGetBarberImages } from "@/_hooks";

export const TeamGrid = (): React.JSX.Element => {
  const barberImages = useGetBarberImages();

  return (
    <div className="mx-auto hidden w-full max-w-5xl py-10 md:flex">
      <Grid
        container
        spacing={1}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
      >
        {barberImages.map((barber, index) => (
          <Grid
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
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
