import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRouter from './router/AppRouter';

export default function App() {
  return (
    <div className="site">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}
