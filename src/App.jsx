import React from 'react';
import './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Users from './pages/Users';
import Store from './pages/Store';
import Books from './pages/Books';
import Devices from './pages/Devices';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <main className="pages">
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/store" element={<Store />} />
            <Route path="/books" element={<Books />} />
            <Route path="/devices" element={<Devices />} />
          </Routes>
        </main>
      </BrowserRouter>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
