import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faDocker, faFigma } from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SCSS",
  "Tailwind CSS",
  "Material UI",
  "Bootstrap",
  "PHP",
  "SQL",
  "Drupal",
];

const labelsSecond = [
  "Git",
  "GitHub Actions",
  "Docker",
  "AWS",
  "Jenkins",
  "SonarCloud",
];

const labelsThird = ["Figma", "Canva", "Agile", "Jira", "Trello"];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>My Expertise</h1>
        <div className="skills-grid">
          {/* Full Stack Web Development */}
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Full Stack Web Development</h3>
            <p>
              I develop dynamic and interactive web applications using modern
              front-end frameworks like <strong>React</strong>. On the back end,
              I work with technologies such as <strong> PHP</strong> and{" "}
              <strong>SQL </strong>
              to build seamless, data-driven solutions. My approach focuses on
              creating scalable, responsive, and user-friendly applications that
              deliver smooth and engaging user experiences.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* DevOps & Automation */}
          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>DevOps & Automation</h3>
            <p>
              I have experience in improving development and deployment
              workflows through CI/CD pipelines and automating key processes. I
              work with tools like
              <strong> Docker</strong> for containerization and utilize{" "}
              <strong>AWS </strong>
              for cloud services to create scalable and reliable solutions. I
              focus on building streamlined, automated environments that enhance
              efficiency and minimize downtime.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* UI/UX Design & Collaboration Tools */}
          <div className="skill">
            <FontAwesomeIcon icon={faFigma} size="3x" />
            <h3>UI/UX Design & Collaboration Tools</h3>
            <p>
              I focus on crafting user-friendly designs that look great and feel
              intuitive. Using tools like
              <strong> Figma</strong> and <strong>Canva</strong>, I create
              interfaces that provide a seamless experience. I also rely on
              collaboration tools such as <strong>Jira</strong> and
              <strong> Trello</strong> to stay organized and work effectively
              with teams, ensuring projects run smoothly and meet user
              expectations.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
