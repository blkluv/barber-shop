import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export const SocialLinks = (): React.JSX.Element => {
  return (
    <>
      <a href="#" className="link">
        <InstagramIcon fontSize="large" />
      </a>
      <a href="#" className="link">
        <FacebookIcon fontSize="large" />
      </a>
    </>
  );
};
