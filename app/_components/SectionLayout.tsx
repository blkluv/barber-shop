"use client";

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
      <section className={`px-2 py-14 ${style}`} ref={ref}>
        <h2 className="accent-secondary heading-lg md:heading-xl mx-auto w-fit">
          {title}
        </h2>
        <h3 className="p-sm md:p-lg subtitle underlined relative mx-auto mb-24 w-fit py-2 text-muted">
          {subtitle}
        </h3>
        <div>{children}</div>
      </section>
    );
  }
);
