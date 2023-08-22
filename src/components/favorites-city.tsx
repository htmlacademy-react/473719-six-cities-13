import FavoriteItem from './favorite-item';
import { Offer } from '../types';
import { useAppSelector } from '../redux-hooks';

type City = {
  cityName: string;
}

function FavoritesCity(city: City): JSX.Element {
  const offers = useAppSelector((state) => state.offers);

  const favoriteItemsInChosenCity: Array<Card> = offers.filter((item: Offer) => item.isFavorite && item.city.name === city.cityName);
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
        {favoriteItemsInChosenCity.map((item: Offer) =>
          (<FavoriteItem key={item.id} {...item}/>))}
      </div>
    </li>
  );
}

export default FavoritesCity;
