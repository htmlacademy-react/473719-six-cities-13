import { Offer } from '../../types/types';
import { Link } from 'react-router-dom';
import { calculateCardRating } from '../../utils';
import BookmarkButton from '../bookmark-button/bookmark-button';

function FavoriteItem(favoriteCard: Offer): JSX.Element {
  const {price, isFavorite, previewImage, rating, title, type, id} = favoriteCard;

  return(
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton
            variant='place-card'
            width={18}
            height={19}
            offerId={id}
            isFavorite={isFavorite}
            textIcon={'To bookmarks'}
            isCheckAuth
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

export default FavoriteItem;
