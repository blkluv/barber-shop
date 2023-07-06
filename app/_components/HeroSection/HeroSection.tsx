import { Banner } from "./Banner";
import { Video } from "./Video";

export const HeroSection = (): React.JSX.Element => {
  return (
    <section
      key="hero"
      className="col-center z-10 min-h-screen w-full tall:pt-20"
    >
      <Video />
      <Banner />
    </section>
  );
};
