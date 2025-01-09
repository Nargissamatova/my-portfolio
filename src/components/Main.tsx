import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src="https://avatar.iran.liara.run/public/boy?username=Ash"
            alt="Avatar"
          />
        </div>
        <div className="content">
          <div className="social_icons">
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
          <h1>Nargis Samatova</h1>
          <p>Full Web Developer</p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/Nargissamatova"
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
        </div>
      </div>
    </div>
  );
}

export default Main;
