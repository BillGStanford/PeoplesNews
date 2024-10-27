import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/article/:id" element={<ArticlePage />} />
          </Routes>
        </main>
        <footer className="bg-red-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-2xl mb-4">☭</p>
              <p className="uppercase tracking-wider mb-2">Peoples Gazette</p>
              <p className="text-red-300 text-sm">
                WORKERS OF THE WORLD, UNITE! YOU HAVE NOTHING TO LOSE BUT YOUR CHAINS!
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;