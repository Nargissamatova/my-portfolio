import "../assets/styles/Main.scss";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQGhO6o1lDtKJg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728250381643?e=1741824000&v=beta&t=MH95H7cBwiCP5VQ6O8qG02q8fjwDMgygZp2EFAKs1bw"
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
          <p>Full-Stack Web Developer</p>

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
