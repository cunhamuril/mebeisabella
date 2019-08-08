import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'

import Header from '../components/template/Header'
import Main from '../components/template/Main'
import Footer from '../components/template/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Header />
        </header>

        <main>
          <Main />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
