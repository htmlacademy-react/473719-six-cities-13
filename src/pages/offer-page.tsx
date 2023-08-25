import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { AuthorizationStatus } from '../const';

import CommentSection from '../components/comment-section/comment-section';
import ReviewsList from '../components/reviews-list/reviews-list';
import { calculateCardRating } from '../utils';

import classNames from 'classnames';
import NearPlaces from '../components/near-places/near-places';
import Map from '../components/map/map';
import { useAppSelector} from '../redux-hooks';
import LoadingScreen from '../components/loading-block/loading-block';
import useFetchingOffer from '../custom-hooks/use-fetching-offer';
import HeaderMemo from '../components/header/header';
import { ChoseCardState} from '../types/types';
import { getNearPlaces, getOfferDataLoadingStatus } from '../store/app-data/selectors';
import { getAuthorizationStatus } from '../store/user-process/selectors';

const mapWidth = '580px';

function OfferPage() : JSX.Element {
  const [chosenCard, setChosenCard] = useState(null) as ChoseCardState;

  const offerId = useParams().id;
  const loadedOffer = useFetchingOffer(offerId as string);
  const nearPlaces = useAppSelector(getNearPlaces);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const offerIsLoading = useAppSelector(getOfferDataLoadingStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown || !loadedOffer || offerIsLoading) {
    return <LoadingScreen />;
  }

  const selectedNearPlaces = nearPlaces?.slice(0, 3);
  const selectedNearPlacesWithCurrent = selectedNearPlaces?.concat(loadedOffer);

  const {bedrooms, description, goods, host, images, isFavorite, isPremium, maxAdults, price, rating, title, type, } = loadedOffer;

  return (
    <div className="page">
      <HeaderMemo />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {(images).map((image) =>
                (<div className="offer__image-wrapper" key={image}><img className="offer__image" src={image} alt="Photo studio" /></div>))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium &&
                <div className="offer__mark">
                  <span>Premium</span>
                </div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <button className={classNames('offer__bookmark-button button',{'offer__bookmark-button--active': isFavorite})} type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: `${calculateCardRating(rating)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {`${bedrooms === 1 ? `${bedrooms } bedroom` : `${bedrooms } bedrooms`} `}
                </li>
                <li className="offer__feature offer__feature--adults">
                  {`Max ${maxAdults === 1 ? `${maxAdults } adult` : `${maxAdults } adults`} `}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((item) => (<li className="offer__inside-item" key={item}>{item}</li>))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {host.name}
                  </span>
                  {host.isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">{description}</p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <ReviewsList />
                {authorizationStatus === AuthorizationStatus.Auth && <CommentSection />}
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map places={selectedNearPlacesWithCurrent} activeId={chosenCard} offerId={offerId} widthParam={mapWidth}/>
          </section>
        </section>
        <div className="container">
          {selectedNearPlaces && <NearPlaces places={selectedNearPlaces} setChosenCard={setChosenCard}/>}
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
