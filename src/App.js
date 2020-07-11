import React, {useState, useEffect} from 'react';

import NavView from './NavView';
import SignInView from './SignInView';
import MainView from './MainView';

import RPGCommunitySession from './utils/RPGCommunitySession';
import RPGCommunityFacade from './business/RPGCommunityFacade';

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(RPGCommunitySession.get("user"));
  });

  return (
    <div className="App">
      <NavView/>
      <MainView/>
      {/* {user
      ?
      <SignInView onSuccess={RPGCommunityFacade.login} onFailure={RPGCommunityFacade.logout}/>
      :
      <MainView/>
      }     */}
    </div>
  );
}

export default App;
