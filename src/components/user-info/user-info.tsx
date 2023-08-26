import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../redux-hooks';
import { getOffers } from '../../store/app-data/selectors';

function UserInfo():JSX.Element {
  const offers = useAppSelector(getOffers);
  const favoriteOffers = offers.filter((item) => item.isFavorite);

  return (
    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FavoriteItems}>
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
      <span className="header__favorite-count">{favoriteOffers.length}</span>
    </ Link>
  );
}

export default UserInfo;
