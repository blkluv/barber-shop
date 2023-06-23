import { Url } from "next/dist/shared/lib/router/router";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface CustomLinkProps {
  onClick?: () => void;
  href: Url;
  title: String;
}

export const CustomLink = ({
  onClick,
  href,
  title,
}: CustomLinkProps): React.JSX.Element => {
  const currentRoute = usePathname();

  return (
    <Link
      onClick={onClick}
      className={currentRoute === href ? "active link" : "link"}
      href={href}
    >
      {title}
    </Link>
  );
};
