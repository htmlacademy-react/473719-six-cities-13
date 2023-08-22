import PlaceCard from '../components/place-card';
import Tabs from '../components/tabs';
import Header from '../components/header';
import PLacesSorting from '../components/places-sorting';
import { useState } from 'react';
import Map from '../components/map';
import { sortOffersByType } from '../utils';

import type { MapCard, Offer } from '../types';
import { useAppSelector, } from '../redux-hooks';
import EmptyMainPage from './empty-main-page';

const mapWidth = '714px';

function MainPage(): JSX.Element {
  const chosenCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const filter = useAppSelector((state) => state.filter);

  function getStartPlaces (places: Offer[], city: string): Offer[] {
    return places.filter((offer) => offer.city.name === city);
  }

  const [chosenCard, setChosenCard] = useState<string | null>(null);
  const filteredOffers: Offer[] = getStartPlaces(offers, chosenCity);
  const sortedOffers: Offer[] = sortOffersByType(filteredOffers, filter);

  return(
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs chosenCity={chosenCity}/>

        {filteredOffers.length === 0 && <EmptyMainPage/ >}
        {filteredOffers.length !== 0 &&
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredOffers.length} places to stay in {chosenCity}</b>
              <PLacesSorting />
              <div className="cities__places-list places__list tabs__content">
                {sortedOffers.map((card: Offer) =>
                  (<PlaceCard key= {card.id} {...card}
                    handleHover= {()=> setChosenCard(card.id)}
                    handleLeave= {()=> setChosenCard(null)}
                  />)
                )}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map activeId={chosenCard} widthParam={mapWidth} />
              </section>
            </div>
          </div>
        </div>}

      </main>
    </div>
  );
}

export default MainPage;
