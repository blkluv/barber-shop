export const Logo = ({ sizes }: { sizes: string }): React.JSX.Element => {
  return (
    <a href="/">
      <h2 className={`logo ${sizes}`}>
        Sergiu <br /> Barbershop
      </h2>
    </a>
  );
};
