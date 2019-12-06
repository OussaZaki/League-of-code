import React, { createContext, useState } from 'react';
import { Header } from './header/header.component';
import { LeaguesProvider } from './leaderboard/leagues.container';

type ContextProps = {
  dispatch: () => void;
};

export const AppContext = createContext<ContextProps>({} as ContextProps);

const App: React.FC = () => {
  const [edits, setEdits] = useState(0);
  const dispatch = () => {
    console.log('Check check');
    setEdits(edits + 1);
  };

  return (
    <div className="App">
      <AppContext.Provider value={{ dispatch }}>
        <Header />
        <LeaguesProvider edits={edits} />
      </AppContext.Provider>
    </div>
  );
};

export default App;
