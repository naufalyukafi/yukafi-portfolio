import React, { useState, createContext } from 'react';
import DATA from '../config/DATA.json';
import {
  IContextValue, IContext, ISkills, IPortfolio,
} from '../helpers/types';

export const MyContext = createContext<IContextValue>({
  skills: [], getAllSkills: () => { }, portfolio: [], getAllPortfolio: () => { },
});

function APIContexts(props: IContext) {
  const [skills, setSkills] = useState<ISkills[]>([]);
  const [portfolio, setPortfolio] = useState<IPortfolio[]>([]);

  const getAllSkills = async () => {
    const response = await DATA.skills;
    return setSkills(response);
  };

  const getAllPortfolio = async () => {
    const response = await DATA.portfolio;
    return setPortfolio(response);
  };

  const contextValue: IContextValue = {
    skills, getAllSkills, portfolio, getAllPortfolio,
  };

  return (
    <MyContext.Provider value={contextValue}>
      {props.children}
    </MyContext.Provider>
  );
}

export default APIContexts;
