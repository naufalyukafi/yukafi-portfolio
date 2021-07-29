import React from 'react';
import { StringMappingType } from 'typescript';

export interface IImages {
    id: number;
    url: string;
}

export interface IListSkills {
  id: number;
  name: string;
}

export interface ISkills {
    id: number;
    title: string;
    images: IImages[];
    lists: IListSkills[];
}

export interface IContext {
      children: React.ReactNode;
}

export interface IPortfolio {
    id: number,
    title: string,
    description: string,
    language: string,
    github: string,
    website: string,
    image: string
}

export interface IContextValue {
    skills: ISkills[];
    getAllSkills: () => void;
    portfolio: IPortfolio[];
    getAllPortfolio: () => void;
}
