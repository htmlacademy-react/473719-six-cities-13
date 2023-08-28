import { NearPlaceItemProps} from '../../types/types';
import { AppartVariants } from '../../const';
import { Link } from 'react-router-dom';
import BookmarkButton from '../bookmark-button/bookmark-button';

function NearPlaceItem(nearPlaceItemProps: NearPlaceItemProps):JSX.Element {
  const { id, price, title, previewImage, type, handleHover, handleLeave, isFavorite, isCheckAuth} = nearPlaceItemProps;
  return(
    <article className="near-places__card place-card">
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to="#" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton
            variant={'place-card'}
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
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to="#" onMouseEnter={handleHover} onMouseLeave={handleLeave}>{title}</Link>
        </h2>
        <p className="place-card__type">{AppartVariants[type]}</p>
      </div>
    </article>
  );
}

export default NearPlaceItem;
