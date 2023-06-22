import { Url } from "next/dist/shared/lib/router/router";
import { usePathname } from 'next/navigation';
import Link from "next/link";

interface CustomLinkProps {
    href: Url,
    title: String
}

export default function CustomLink({ href, title }: CustomLinkProps): React.JSX.Element {
    const currentRoute = usePathname();

    return (
        <Link className={currentRoute === href
            ? "active link"
            : "link"} href={href}
        >
            {title}
        </Link>
    )
}