import FavoritesCity from '../components/favorites-city';
import Header from '../components/header';
import { Card } from '../types';
import mocks from '../mocks';

const favoriteItems: Array<Card> = mocks.filter((item: Card) => item.isFavorite);
const favoriteCities: Array<string> = [...new Set(favoriteItems.map((item: Card) => item.city.name))];

function Favorites() {
  return(
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoriteCities.map((city) =>
                <FavoritesCity key={city} cityName={city} />
              )}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>);
}

export default Favorites;
