interface LogoProps {
  sizes: string;
}

export const Logo = ({ sizes }: LogoProps): React.JSX.Element => {
  return (
    <a href="/">
      <h2 className={`logo ${sizes}`}>
        Sergiu <br /> Barbershop
      </h2>
    </a>
  );
};
