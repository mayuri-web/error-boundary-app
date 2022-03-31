import React from 'react';
import './App.css';
import User from './components/User';
import ErrorBound from './components/ErrorBound';

function App() {
  return (
    <div className="App-header">
        <ErrorBound>
          <User UserName="Abc"/>
        </ErrorBound>
        <ErrorBound>
          <User UserName="Ram"/>
        </ErrorBound>
        <ErrorBound>
          <User UserName="Mango"/>
        </ErrorBound>
    </div>
  );
}

export default App;
