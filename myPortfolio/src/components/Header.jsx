import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import HomeButton from './HomeButton';
import logo from '../assets/pic/logo.jpg';

export default function Header() {
  const loc = useLocation();
  return (
    <header className="site-header header-fixed">
      <div className="container header-inner">
        <div className="brand">
          <Link to="/"><strong>{logo ? <img src={logo} alt="Yuki H." /> : <span>Yuki H.</span>}</strong></Link>
        </div>
        <nav className="site-nav">
          <Link className={loc.pathname==='/'? 'active':''} to="/">Home</Link>
          <Link className={loc.pathname==='/about'? 'active':''} to="/about">About</Link>
          <Link className={loc.pathname==='/works'? 'active':''} to="/works">Works＆Service</Link>
          {/* <Link className={loc.pathname==='/service'? 'active':''} to="/service">Service</Link> */}
          <Link className={loc.pathname==='/contact'? 'active':''} to="/contact">Contact</Link>
        </nav>
        <div className="header-right">
          <LanguageSelector />
          {loc.pathname !== '/' && <HomeButton />}
        </div>
      </div>
    </header>
  );
}
