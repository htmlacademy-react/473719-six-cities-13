import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../redux-hooks';
import { getOffers } from '../../store/app-data/selectors';
import { getUserInfo } from '../../store/user-process/selectors';
import { UserData } from '../../types/auth-user-data';

function UserInfo():JSX.Element {
  const offers = useAppSelector(getOffers);
  const favoriteOffers = offers.filter((item) => item.isFavorite);

  const userInfo: UserData | null = useAppSelector(getUserInfo);

  return (
    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FavoriteItems}>
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span className="header__user-name user__name">{userInfo?.email}</span>
      <span className="header__favorite-count">{favoriteOffers.length}</span>
    </ Link>
  );
}

export default UserInfo;
