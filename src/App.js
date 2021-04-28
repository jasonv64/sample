import React from 'react';
import Navigation from './components/Navigation/Navigation.jsx';
import SaladMaker from './components/SaladMaker/SaladMaker.jsx';

import UserContext from './components/User/user.jsx'

const user = {
  name: 'manen',
  favorites: [
    'avocado',
    'carrot'
  ]
}

function App() {
  return (
    <UserContext.Provider value={user}>
      <Navigation />
      <SaladMaker />
    </UserContext.Provider>
  );
}

export default App;