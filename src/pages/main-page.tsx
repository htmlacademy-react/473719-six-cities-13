import PlaceCard from '../components/place-card';
import Tabs from '../components/tabs';
import Header from '../components/header';
import PLacesSorting from '../components/places-sorting';
import { useState } from 'react';
import Map from '../components/map';

import type { Card, Cards, City, CityPoint } from '../types';
import { useAppDispatch, useAppSelector, } from '../redux-hooks';

const mapWidth = '714px';

function MainPage(): JSX.Element {
  const chosenCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);

  function getStartPlaces (places: Card[], city: string): Card[] {
    return places.filter((offer) => offer.city.name === city);
  }

  const [chosenCard, setChosenCard] = useState<string | null>(null);

  const filteredOffers: Cards = getStartPlaces(offers, chosenCity);
  const locations: Array<CityPoint> = [];

  offers.map((card) => locations.push({
    id: card.id,
    location: card.location}));


  return(
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs chosenCity={chosenCity}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredOffers.length} places to stay in {chosenCity}</b>
              <PLacesSorting />
              <div className="cities__places-list places__list tabs__content">
                {filteredOffers.map((card: Card) =>
                  (<PlaceCard
                    key= {card.id} {...card}
                    handleHover= {()=> setChosenCard(card.id)}
                    handleLeave= {()=> setChosenCard(null)}
                  />)
                )}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={chosenCity} locations={locations} activeId={chosenCard} widthParam={mapWidth} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
