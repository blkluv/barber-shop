import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";

export const COPYRIGHT = "© SC Sergiu Barbershop SRL, RO 2545425";
export const EMAIL = "sergiu.barbershop@gmail.com";
export const PHONE = "+40761874555";
export const TRANSITION_PRIMARY = "all 0.3s ease-in-out";
export const PAGES = [
  {
    title: "acasa",
    delay: 1.4,
  },
  {
    title: "echipa",
    delay: 1.2,
  },
  {
    title: "servicii",
    delay: 1,
  },
  {
    title: "contact",
    delay: 0.8,
  },
];

export const CONTACTS_LIST = [
  {
    href: `tel:${PHONE}`,
    title: `${PHONE.slice(0, 3)} ${PHONE.slice(3)}`,
    icon: <LocalPhoneIcon />,
  },
  {
    href: `mailto:${EMAIL}`,
    title: EMAIL,
    icon: <MailIcon />,
  },
];
