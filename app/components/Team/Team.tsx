import { Grid } from "@mui/material";
import { motion } from "framer-motion";

import { BARBERS } from "@/utils";
import { SectionLayout } from "@/components";
import { BarberCard } from "./BarberCard";
import { CardSwiper } from "./CardSwiper";

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

export const Team = () => {
  return (
    <SectionLayout
      title={"Echipa"}
      subtitle={"The barbers"}
      style="overflow-hidden container mx-auto px-2 flex flex-col"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="md:hidden"
      >
        <CardSwiper />
      </motion.div>
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
          {BARBERS.map((barber, index) => (
            <MotionGrid
              variants={item}
              key={`${index}-${barber.name}`}
              className="w-full"
              item
              xs={2}
              sm={4}
              md={4}
            >
              <BarberCard
                src={barber.src}
                height={barber.height}
                width={barber.width}
                name={barber.name}
              />
            </MotionGrid>
          ))}
        </MotionGrid>
      </div>
    </SectionLayout>
  );
};
