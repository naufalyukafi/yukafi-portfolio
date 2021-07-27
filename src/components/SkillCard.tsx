import React from 'react';
import { Card } from 'antd';
import { ISkills } from '../helpers/types';

const SkillCard = (cardSkill: ISkills) => (
  <article className="post__item" key={cardSkill.id}>
    <div className="post__item-top">
      {cardSkill.images.map((image) => (
        <div className="post__item-logo" key={image.id}>
          <img src={image.url} alt="logo-card" />
        </div>
      ))}
    </div>
    <div className="post-item__content">
      <h1 className="post-item__title">{cardSkill.title || '-'}</h1>
      <div className="post-item__description">
        <ul>
          {cardSkill.lists.map((list) => (
            <li key={list.id}>{list.name || '-'}</li>
          ))}
        </ul>
      </div>
    </div>
  </article>
);

export default SkillCard;
