import PlaceCard from '../components/place-card';
import Tabs from '../components/tabs';
import Header from '../components/header';
import PLacesSorting from '../components/places-sorting';
import { useState } from 'react';
import Map from '../components/map';

import type { Cards } from '../types';

function MainPage({cards}: Cards): JSX.Element {
  console.log(cards);
  const chosenCity = cards[0].city;
  console.log(chosenCity);

  const [chosenCard, setChosenCard] = useState('');

  return(
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cards.length} places to stay in Amsterdam</b>
              <PLacesSorting />
              <div className="cities__places-list places__list tabs__content">
                {cards.map((card) =>
                  <PlaceCard key= {card.id} {...card} handleHover= {() => setChosenCard(card.id)} />
                )}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="map">
                <Map city={chosenCity}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
