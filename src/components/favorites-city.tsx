import FavoriteItem from './favorite-item';
import { Card } from '../types';
import mocks from '../mocks';

type City = {
  cityName: string;
}


function FavoritesCity(city: City): JSX.Element {

  const favoriteItemsInChosenCity: Array<Card> = mocks.filter((item: Card) => item.isFavorite && item.city.name === city.cityName);
  console.log(favoriteItemsInChosenCity);
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
          (<FavoriteItem id={item.id} key={item.id} isFavorite={item.isFavorite} isPremium={item.isPremium} previewImage={item.previewImage} price={item.price} rating={item.rating} type={item.type} title={item.title} city={item.city} location={item.location}/>))}
      </div>
    </li>
  );
}

export default FavoritesCity;
