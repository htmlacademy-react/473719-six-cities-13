import { Link } from 'react-router-dom';
import { AppRoute } from '../const';

function UserInfo():JSX.Element {
  return (
    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FavoriteItems}>
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
      <span className="header__favorite-count">3</span>
    </ Link>
  );
}

export default UserInfo;
