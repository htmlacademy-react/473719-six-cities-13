import Logo from '../logo/logo';
import UserInfo from '../user-info/user-info';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux-hooks';
import { logoutAction } from '../../store/api-actions';
import React from 'react';
import { getAuthorizationStatus } from '../../store/user-process/selectors';


function Header (): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    dispatch(logoutAction());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            {authorizationStatus === 'AUTH' &&
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <UserInfo />
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="#" onClick={logoutHandler}>
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>}
            {authorizationStatus === 'NO_AUTH' &&
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

const HeaderMemo = React.memo(Header);

export default HeaderMemo;
