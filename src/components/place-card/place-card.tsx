import { Link } from 'react-router-dom';
import { calculateCardRating } from '../../utils';
import BookmarkButton from '../bookmark-button/bookmark-button';
import { PlaceCardProps } from '../../types/types';


function PlaceCard({offer, isCheckAuth, handleHover, handleLeave}: PlaceCardProps): JSX.Element {
  const {isPremium, price, isFavorite, rating, id, title, type, previewImage} = offer;

  return (
    <article
      className="cities__card place-card"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton variant={'place-card'}
            width={18}
            height={19}
            offerId={id}
            isFavorite={isFavorite}
            textIcon={'In bookmarks'}
            isCheckAuth={isCheckAuth}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${calculateCardRating(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
