import PlaceCard from '../components/place-card';
import Tabs from '../components/tabs';
import Header from '../components/header';
import PLacesSorting from '../components/places-sorting';
import { useState } from 'react';
import Map from '../components/map';

import type { Card, Cards, City, CityPoint } from '../types';

const mapWidth = '714px';

function MainPage({cards}: Cards): JSX.Element {
  const chosenCity: City = cards[0].city;
  const chosenCityCards = cards.filter((card: Card) => card.city.name === chosenCity.name);
  const locations: Array<CityPoint> = [];

  chosenCityCards.map((card) => locations.push({
    id: card.id,
    location: card.location}));

  const [chosenCard, setChosenCard] = useState(null);

  return(
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs {...chosenCity}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{chosenCityCards.length} places to stay in {chosenCity.name}</b>
              <PLacesSorting />
              <div className="cities__places-list places__list tabs__content">
                {chosenCityCards.map((card) =>
                  <PlaceCard key= {card.id} {...card} handleHover= {() => setChosenCard(card.id)} handleLeave= {()=> setChosenCard(null)}/>
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
