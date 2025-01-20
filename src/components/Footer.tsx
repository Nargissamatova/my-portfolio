import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div>
        <a
          href="https://github.com/nargissamatova"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/nargissamatova/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
      <p>
        Email me at{" "}
        <a href="mailto:nargissamatova16@gmail.com">
          nargissamatova16@gmail.com
        </a>
        . <br /> Developed with 💜 and dedication.
      </p>
    </footer>
  );
}

export default Footer;
