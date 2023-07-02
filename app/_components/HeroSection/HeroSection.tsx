import { Banner } from "./Banner";

export const HeroSection = (): React.JSX.Element => {
  return (
    <section
      key="hero"
      className="col-center z-10 min-h-screen w-full tall:pt-20"
    >
      <video
        muted
        autoPlay
        loop
        className="absolute left-0 top-0 h-full w-full object-cover opacity-30"
        poster="/images/bg.jpg"
      >
        <source
          src={`https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/video/upload/q_auto:eco/f_auto/dpr_auto/v1688124893/sergiu-barbershop/hero-bg-video_xcftft.mp4`}
          type="video/mp4"
        />
      </video>
      <Banner />
    </section>
  );
};
