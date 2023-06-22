import CustomLink from "../customLink";


export default function NavLinks(): React.JSX.Element {
    return (
        <ul className="gap-6 hidden md:flex">
            <li>
                <CustomLink href={'/'} title={'Acasa'} />
            </li>
            <li>
                <CustomLink href={'/team'} title={'Echipa'} />
            </li>
            <li>
                <CustomLink href={'/prices'} title={'Preturi'} />
            </li>
            <li>
                <CustomLink href={'/contact'} title={'Contact'} />
            </li>
        </ul>
    );
}

