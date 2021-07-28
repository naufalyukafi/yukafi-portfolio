import React from 'react';
import { GithubFilled, EyeFilled, ChromeFilled } from '@ant-design/icons';
import { IPortfolio } from '../helpers/types';

const PortfolioCard = (cardPortfolio: IPortfolio) => (
  <div className="portfolio__item">
    <div className="portfolio__item-header">
      <img src="https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg" className="portfolio__item-header-poster" alt="portfolio" />
      <div className="portfolio__item-header-stack">
        <p><span className="portfolio__item-header-stack-title">{cardPortfolio.language}</span></p>
      </div>
    </div>
    <div className="portfolio__item-content">
      <h3>{cardPortfolio.title}</h3>
      <p>{cardPortfolio.description}</p>
      <p>See project: </p>
      <div className="portfolio__item-logo">
        {cardPortfolio.website === '' ? (
          <>
            <a href={cardPortfolio.github} target="_blank" rel="noopener noreferrer"> <GithubFilled className="portfolio__item-logo-github" /> </a>
          </>
        ) : (
          <>
            <a href={cardPortfolio.github} target="_blank" rel="noopener noreferrer"> <GithubFilled className="portfolio__item-logo-github" /> </a>
            <a href={cardPortfolio.website} target="_blank" rel="noopener noreferrer"> <EyeFilled className="portfolio__item-logo-eye" /> </a>
          </>
        )}

      </div>
    </div>
  </div>
);

export default PortfolioCard;
