import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AuthorizationStatus } from '../const';

import CommentSection from '../components/comment-section';
import ReviewsList from '../components/reviews-list';
import { calculateCardRating } from '../utils';

import classNames from 'classnames';
import NearPlaces from '../components/near-places';
import Map from '../components/map';
import { useAppSelector, useAppDispatch } from '../redux-hooks';
import { fetchComments, fetchNearPlaces, fetchSpecificOffer } from '../store/api-actions';
import { dropOffer } from '../store/actions';
import Header from '../components/header';
import LoadingScreen from '../components/loading-block';

const mapWidth = '580px';

function OfferPage() : JSX.Element {
  const dispatch = useAppDispatch();
  const [chosenCard, setChosenCard] = useState(null);

  const offerId = useParams().id;
  const authorizationStatus = useAppSelector((state)=> state.authorizationStatus);
  const loadedOffer = useAppSelector((state) => state.loadedOffer);
  const nearPlaces = useAppSelector((state)=> state.nearPlaces);

  useEffect(() => {
    if(offerId) {
      dispatch(fetchSpecificOffer(offerId));
      dispatch(fetchComments(offerId));
      dispatch(fetchNearPlaces(offerId));
    }

    return () => {
      dispatch(dropOffer());
    };

  }, [offerId, dispatch]);

  if (AuthorizationStatus.Unknown) {
    return <LoadingScreen />;
  }

  if (!loadedOffer) {
    return <NotFoundScreen />;
  }

  const selectedNearPlaces = nearPlaces?.slice(0, 3);
  const selectedNearPlacesWithCurrent = selectedNearPlaces?.concat(loadedOffer);

  const {bedrooms, description, goods, host, images, isFavorite, isPremium, maxAdults, price, rating, title, type, } = loadedOffer;

  return (
    <div className="page">
      <Header />
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
          <NearPlaces places={selectedNearPlaces} setChosenCard={setChosenCard}/>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
