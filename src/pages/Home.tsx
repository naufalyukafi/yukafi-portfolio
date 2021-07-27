import React, { useContext, useEffect } from 'react';
import SkillCard from '../components/SkillCard';
import { MyContext } from '../contexts/APIContext';

const Home = () => {
  const { skills, getAllSkills } = useContext(MyContext);

  useEffect(() => {
    getAllSkills();
  }, []);

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
            <button type="button" className="headline__button">Download CV</button>
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
      </div>
    </main>
  );
};

export default Home;
