import { CONTACTS_LIST } from "@/_lib/constants";

export const ContactLinks = (): React.JSX.Element => {
  return (
    <ul className="col mb-4 w-fit">
      {CONTACTS_LIST.map((item) => (
        <li key={item.title} className="p-base md:p-lg">
          <a href={item.href}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
};
