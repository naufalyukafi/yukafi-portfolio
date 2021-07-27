import React, { useState, createContext } from 'react';
import DATA from '../config/DATA.json';
import {
  IContextValue, IContext, IImages, IListSkills, ISkills,
} from '../helpers/types';

export const MyContext = createContext<IContextValue>({ skills: [], getAllSkills: () => { } });

function APIContexts(props: IContext) {
  const [skills, setSkills] = useState<ISkills[]>([]);

  const getAllSkills = async () => {
    const response = await DATA.skills;
    return setSkills(response);
  };

  const contextValue: IContextValue = { skills, getAllSkills };

  return (
    <MyContext.Provider value={contextValue}>
      {props.children}
    </MyContext.Provider>
  );
}

export default APIContexts;
