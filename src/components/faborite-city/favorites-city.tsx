import FavoriteItem from '../favorite-item/favorite-item';
import { Offer } from '../../types/types';
import { useAppSelector } from '../../redux-hooks';
import { getFavoritesWithSpecificCity } from '../../utils';
import { FavoriteCity } from '../../types/types';
import { getOffers } from '../../store/app-data/selectors';

function FavoritesCity(city: FavoriteCity): JSX.Element {
  const offers = useAppSelector(getOffers);
  const favoriteItemsInChosenCity: Array<Offer> = getFavoritesWithSpecificCity(offers, city.cityName);

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
