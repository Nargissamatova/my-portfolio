import "../assets/styles/Project.scss";
import mock01 from "../assets/images/druidproject.png";
import mock02 from "../assets/images/countriesapp.png";
import mock03 from "../assets/images/tictactoeapp.png";
import mock04 from "../assets/images/recipesapp.png";

import GitHubIcon from "@mui/icons-material/GitHub";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://github.com/Nargissamatova/Druid_Partnering_Project_React24k"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock01} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="" target="_blank" rel="noreferrer">
            <h2>Druid Partnering Project</h2>
          </a>
          <p>
            A decoupled full-stack company website features React, Drupal,
            Mautic analytic tool and Content personalization system. This is a
            team project from the company Druid about creating a new website for
            their business as a final assignment for Business College Helsinki
            students.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/Nargissamatova/food_recipe_app"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock04} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="" target="_blank" rel="noreferrer">
            <h2>Digital Cookbook</h2>
          </a>
          <p>
            Discover detailed recipes with ingredients, step-by-step
            instructions, and nutritional info, all sourced from a recipe API.
            Search by keyword, filter by cuisine, or customize results to match
            your dietary needs. From quick meals to bold new flavors, this app
            turns recipe exploration into an enjoyable experience.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/Nargissamatova/countries-bootstrap-react-app"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock02} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="" target="_blank" rel="noreferrer">
            <h2>Countries Web App</h2>
          </a>
          <p>
            A web application built with React and Bootstrap that allows users
            to explore detailed information about countries. Users can sign up
            to create an account, save their favorite countries, and access
            additional information such as population, currency, languages, and
            real-time weather forecasts for a country's capital city.
          </p>
        </div>
        <div className="project">
          <a
            href="https://tic-tac-toe-reactapplication.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock03} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/Nargissamatova/tic-tac-toe"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Tic Tac Toe</h2>
          </a>
          <p>
            A modern twist on the classic Tic Tac Toe game, built with React.
            Features intuitive gameplay, sleek visuals, and dynamic sound
            effects that enhance the experience for every move, win, or loss.
          </p>
        </div>
      </div>
      <div className="github-button-container">
        <a
          href="https://github.com/Nargissamatova?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="github-button"
        >
          <span>See more</span> <GitHubIcon />
        </a>
      </div>
    </div>
  );
}

export default Project;
