import React from 'react';

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

export interface IContextValue {
    skills: ISkills[];
    getAllSkills: () => void;
}
