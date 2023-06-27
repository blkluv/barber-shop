import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  width: number;
  height: number;
  classes: string;
}

export const Logo = ({
  width,
  height,
  classes,
}: LogoProps): React.JSX.Element => {
  return (
    <Link href={"/"} className="block w-fit">
      <Image
        src="/images/logo.png"
        width={width}
        height={height}
        sizes="100%"
        alt="website logo"
        priority
        className={classes}
      />
    </Link>
  );
};
