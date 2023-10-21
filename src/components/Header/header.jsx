import './header.css';

export const Header = () => {
  return (
    <header id="domu">
      <div className="header__content container">
        <div className="site-logo"></div>

        <div className="navigation">
          <button className="nav-btn"></button>
          <nav className="rollout-nav nav-closed">
            <a href="#home" src="#domu">
              domů
            </a>
            <a href="#menu" src="#menu">
              menu
            </a>
            <a href="#gallery" src="#gallery">
              galerie
            </a>
            <a href="#contact" src="#contact">
              kontakt
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
