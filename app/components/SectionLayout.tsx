import { ReactNode, forwardRef } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  style?: string;
}

export const SectionLayout = forwardRef<HTMLDivElement, SectionProps>(
  function Section(
    { title, subtitle, children, style = "" },
    ref
  ): React.JSX.Element {
    return (
      <section className={`py-14 ${style}`} ref={ref}>
        <motion.h2
          initial={{ x: "-50%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="accent-secondary heading-lg md:heading-xl mx-auto w-fit"
        >
          {title}
        </motion.h2>
        <motion.h3
          initial={{ x: "-50%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="p-sm md:p-lg subtitle underlined relative mx-auto mb-24 w-fit py-2 text-muted"
        >
          {subtitle}
        </motion.h3>
        {children}
      </section>
    );
  }
);
