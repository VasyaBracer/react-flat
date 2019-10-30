import React from 'react';
import './App.css';
import { Provider, connect } from 'react-redux';
import Routes from './js/Routes';

import MenuComponent from "./Components/MenuComponent";
import store from './js/Store';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <div className="main-container">
          <MenuComponent />
        </div>
      </Routes>
    </Provider>
  );
}

export default App;
