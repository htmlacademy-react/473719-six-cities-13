import Logo from './logo';
import UserInfo from './user-info';
import { Link } from 'react-router-dom';

function Header (): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <UserInfo />
              </li>
              <li className="header__nav-item">
                <Link className="header__nav-link" href="#">
                  <span className="header__signout">Sign out</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
