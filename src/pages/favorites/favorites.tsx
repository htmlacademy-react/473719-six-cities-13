import { Link } from 'react-router-dom';
import FavoritesCity from '../../components/favorite-city/favorites-city';
import HeaderMemo from '../../components/header/header';
import { useAppSelector } from '../../redux-hooks';
import { getOffers } from '../../store/app-data/selectors';
import { Offer } from '../../types/types';
import EmptyFavorite from '../empty-favorites/empty-favorites';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { AuthorizationStatus } from '../../const';
import { AppRoute } from '../../const';
import { Navigate } from 'react-router-dom';

function Favorites() {
  const offers = useAppSelector(getOffers);
  const favoriteItems: Array<Offer> = offers.filter((item: Offer) => item.isFavorite);
  const favoriteCities = [...new Set(favoriteItems.map((item: Offer) => item.city.name))];
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  return(
    <>
      {authorizationStatus === AuthorizationStatus.NoAuth &&
      <Navigate to={AppRoute.Root}/>}
      {authorizationStatus === AuthorizationStatus.Auth &&
        <div className="page">
          <HeaderMemo />
          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              {favoriteItems.length === 0 && <EmptyFavorite />}
              {favoriteItems.length !== 0 &&
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {favoriteCities.map((city) =>
                  <FavoritesCity key={city} cityName={city} />
                )}
              </ul>
            </section>}
            </div>
          </main>
          <footer className="footer container">
            <Link className="footer__logo-link" to="main.html">
              <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
            </Link>
          </footer>
        </div>}
    </>);

}

export default Favorites;
