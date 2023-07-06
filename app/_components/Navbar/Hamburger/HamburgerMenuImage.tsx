import { motion } from "framer-motion";
import Image from "next/image";

export const HamburgerMenuImage = (): React.JSX.Element => {
  return (
    <motion.div
      initial={{ x: 200, y: -200, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 0.2 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      exit={{
        opacity: 0,
        transition: {
          ease: "easeInOut",
          duration: 0.4,
          delay: 0.2,
        },
      }}
      className="absolute right-0 top-0 max-h-80 max-w-xs rounded-xl opacity-20"
    >
      <Image
        src={"/images/bg.jpg"}
        alt=""
        width={612}
        height={408}
        className="rounded-bl-full"
      />
    </motion.div>
  );
};
