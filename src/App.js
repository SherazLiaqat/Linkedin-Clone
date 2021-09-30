import React from 'react';
import Header from './Header'
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    <div className="app">
     {/*header */}
     <Header/>
     {/*app body */}
     <div className="app-body">
     <Sidebar/>
     {/*feed */}
     <Feed/>
     {/*widgets */}
    </div>
    </div>
  );
}

export default App;
