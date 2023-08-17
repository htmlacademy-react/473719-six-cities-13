import Logo from './logo';
import UserInfo from './user-info';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../redux-hooks';

function Header (): JSX.Element {
  const authorisationStatus = useAppSelector((state) => state.authorisationStatus);
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            {authorisationStatus === 'AUTH' &&
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <UserInfo />
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>}
            {authorisationStatus === 'NO_AUTH' &&
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to="/login">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
                </ul>}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
