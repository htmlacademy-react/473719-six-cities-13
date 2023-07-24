import FavoriteItem from './favorite-item';
import { Card } from '../types';
import mocks from '../mocks';

type City = {
  cityName: string;
}

function FavoritesCity(city: City): JSX.Element {

  const favoriteItemsInChosenCity: Array<Card> = mocks.filter((item: Card) => item.isFavorite && item.city.name === city.cityName);
  return(
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city.cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {favoriteItemsInChosenCity.map((item: Card) =>
          (<FavoriteItem key={item.id} {...item}/>))}
      </div>
    </li>
  );
}

export default FavoritesCity;
