import { useParams } from 'react-router-dom';
import mockOffers from '../mock-offers';

import { Place } from '../types';
import Header from '../components/header';
import CommentSection from '../components/comment-section';
import ReviewsList from '../components/reviews-list';
import { calculateCardRating } from '../utils';

import classNames from 'classnames';
import NearPlaces from '../components/near-places';

function Offer() : JSX.Element {
  const params = useParams();
  const data: Array<Place> = mockOffers;
  const {title, type, price, isFavorite, isPremium, rating, host, goods, images, bedrooms, maxAdults, description}: Place = data.filter((el) => el.id === params.id)[0];

  function makeItemsWithKeys(item: string, key: number) {
    return {
      id: key,
      item: item,
    };
  }

  const imagesWithKeys = images.map((image, key) => makeItemsWithKeys(image, key));
  const goodsWithKeys = goods.map((good, key) => makeItemsWithKeys(good, key));
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {imagesWithKeys.map((image) =>
                (<div className="offer__image-wrapper" key={image.id}><img className="offer__image" src={image.item} alt="Photo studio" /></div>))}
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
                  {goodsWithKeys.map((item) => (<li className="offer__inside-item" key={item.id}>{item.item}</li>))}
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
                <CommentSection />
              </section>
            </div>
          </div>
          <section className="offer__map map"></section>
        </section>
        <div className="container">
          <NearPlaces />
        </div>
      </main>
    </div>
  );
}

export default Offer;
