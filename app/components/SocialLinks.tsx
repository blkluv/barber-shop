import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export const SocialLinks = (): React.JSX.Element => {
  return (
    <div className="w-fit">
      <a href="#" className="link mr-2">
        <InstagramIcon sx={{ fontSize: "40px" }} />
      </a>
      <a href="#" className="link">
        <FacebookIcon sx={{ fontSize: "40px" }} />
      </a>
    </div>
  );
};
