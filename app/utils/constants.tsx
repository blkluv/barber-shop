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

export const GALLERY_PHOTOS = [
  { src: "/images/gallery-photo-1.jpg", width: 1080, height: 1080 },
  { src: "/images/gallery-photo-2.jpg", width: 1080, height: 1350 },
  { src: "/images/gallery-photo-3.jpg", width: 1080, height: 1328 },
  { src: "/images/gallery-photo-4.jpg", width: 1080, height: 1104 },
  { src: "/images/gallery-photo-5.jpg", width: 1080, height: 1310 },
  { src: "/images/gallery-photo-6.jpg", width: 1080, height: 1350 },
  { src: "/images/gallery-photo-7.jpg", width: 1080, height: 1350 },
  { src: "/images/gallery-photo-8.jpg", width: 1080, height: 1350 },
  { src: "/images/gallery-photo-9.jpg", width: 1080, height: 1080 },
];

export const BARBERS = [
  {
    name: "Alex",
    src: "/images/barber-1.jpg",
    width: 193,
    height: 290,
  },
  {
    name: "Sara",
    src: "/images/barber-2.jpg",
    width: 193,
    height: 290,
  },
  {
    name: "David",
    src: "/images/barber-3.jpg",
    width: 193,
    height: 290,
  },
];
