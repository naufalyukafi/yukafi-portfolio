import React, { useContext, useEffect } from 'react';
import PortfolioCard from '../components/PortfolioCard';
import SkillCard from '../components/SkillCard';
import { MyContext } from '../contexts/APIContext';

const Home = () => {
  const {
    skills, getAllSkills, portfolio, getAllPortfolio,
  } = useContext(MyContext);

  useEffect(() => {
    getAllSkills();
    getAllPortfolio();
  }, []);

  console.log(portfolio);

  return (
    <main>
      <div className="content">
        <article className="headline">
          <figure className="headline__figure">
            <picture>
              <img src="./images/fotoprofil.png" alt="Naufal Yukafi Ridlo" />
            </picture>
          </figure>
          <div className="headline__content">
            <h1 className="headline__title">Hello, It's me <br /> <span>Naufal Yukafi Ridlo</span></h1>
            <p className="headline__description">
              I'm a student who aspires to be a front end engineer, experienced in javascript, typescript, and React. Recently, I studied web performance on a website using web vital for testing.
            </p>
            <a href="https://drive.google.com/file/d/1ENaqolqb4skUZ5jEIePm0ON0VoY-E5-w/view" target="_blank" rel="noopener noreferrer">
              <button type="button" className="headline__button">Download CV</button>
            </a>
          </div>
        </article>
        <div className="card__skills">
          <h1 className="explore__label">Skills</h1>
          <div className="posts">
            {skills.map((cardSkill) => (
              <SkillCard
                id={cardSkill.id}
                key={cardSkill.id}
                images={cardSkill.images}
                lists={cardSkill.lists}
                title={cardSkill.title}
              />
            ))}
          </div>
        </div>
        <div id="portfolio" className="card__portfolio">
          <h1 className="explore__label">Portfolio</h1>
          <p className="card__portfolio-description">This is my latest project, in PWA project i always consider website performance starting from seo, accessibility, compress image so as to make website performance
            better, to test this i use web vitals lighthouse. In the React project I have started implementing the react context for hook state management (on this website I have also implemented it) in the future I will focus on developing even better.
          </p>
          <div className="portfolio">
            {portfolio.map((project) => (
              <PortfolioCard
                id={project.id}
                key={project.id}
                title={project.title}
                description={project.description}
                language={project.language}
                github={project.github}
                website={project.website}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
