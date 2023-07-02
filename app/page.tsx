import { HeroSection } from "@/_components/HeroSection/HeroSection";
import { GallerySection } from "@/_components/GallerySection/GallerySection";
import { TeamSection } from "@/_components/TeamSection/TeamSection";
import { MapSection } from "@/_components/MapSection/MapSection";
import { Map } from "@/_components/MapSection/Map";

export default function Home(): React.JSX.Element {
  return (
    <>
      <HeroSection />
      <GallerySection />
      <TeamSection />
      <MapSection>
        <Map />
      </MapSection>
    </>
  );
}
