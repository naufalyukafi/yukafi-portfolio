import React from 'react';

const Navbar = () => (
  <header className="app__bar">
    <div className="app__bar-container">
      <div className="app__bar-brand">
        <h1>Yukafi.dev</h1>
      </div>
      <nav className="app__bar-navigation">
        <ul>
          <li><a href="#portfolio">Portfolio</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Navbar;
