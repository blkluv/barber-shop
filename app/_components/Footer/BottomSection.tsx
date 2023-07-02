import { COPYRIGHT } from "@/_lib/constants";

export const BottomSection = (): React.JSX.Element => {
  return (
    <section className="border-dark-t col-center md:row-center p-xs md:p-sm w-full py-4 text-muted md:py-8">
      <span className="mr-2">{COPYRIGHT}</span>
      <span className="hidden md:block">-</span>
      <a href="#" className="link-muted ml-2 mr-2">
        Politica de confidentialitate
      </a>
      <span className="hidden md:block">-</span>
      <a href="#" className="link-muted ml-2">
        Politica de cookies
      </a>
    </section>
  );
};
