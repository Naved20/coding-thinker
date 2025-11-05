import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import HeroSection from './components/HeroSection';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
      {renderPage()}
      {/* <Footer /> */}
    </div>
  );
}

export default App;