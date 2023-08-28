import PlaceCard from '../../components/place-card/place-card';
import PLacesSortingMemo from '../../components/place-sorting/places-sorting';
import { useState } from 'react';
import Map from '../../components/map/map';
import { sortOffersByType, getStartPlacesFiltered } from '../../utils';

import type { Offer } from '../../types/types';
import { useAppSelector, } from '../../redux-hooks';
import EmptyMainPage from '../empty-main-page/empty-main-page';
import TabsMemo from '../../components/tabs/tabs';
import HeaderMemo from '../../components/header/header';
import { getCity, getSorting } from '../../store/app-process/selectors';
import { getOffers } from '../../store/app-data/selectors';
import classNames from 'classnames';

function MainPage(): JSX.Element {
  const chosenCity = useAppSelector(getCity);
  const offers = useAppSelector(getOffers);
  const sorting = useAppSelector(getSorting);
  const filteredOffers: Offer[] = getStartPlacesFiltered(offers, chosenCity);
  const sortedOffers: Offer[] = sortOffersByType(filteredOffers, sorting);

  const [chosenCard, setChosenCard] = useState<string | null>(null);

  return(
    <div className={classNames('page page--gray page--main',
      filteredOffers.length === 0 && 'page__main--index-empty')}
    >
      <HeaderMemo />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <TabsMemo chosenCity={chosenCity}/>

        {filteredOffers.length === 0 && <EmptyMainPage/ >}
        {filteredOffers.length !== 0 &&
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredOffers.length} places to stay in {chosenCity}</b>
              <PLacesSortingMemo />
              <div className="cities__places-list places__list tabs__content">
                {sortedOffers.map((card: Offer) =>
                  (<PlaceCard key={card.id} offer={card} handleHover={()=> setChosenCard(card.id)} handleLeave={()=> setChosenCard(null)} isCheckAuth/>)
                )}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map activeId={chosenCard} />
              </section>
            </div>
          </div>
        </div>}

      </main>
    </div>
  );
}

export default MainPage;
