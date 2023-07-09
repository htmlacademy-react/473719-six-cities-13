type CardProps = {
  isPremium: boolean;
  isFavorite: boolean;
  imgUrl: string;
  price: number;
  tarification: string;
  title: string;
  type: string;
  averageStars:number;
}

function PlaceCard(cardProps: CardProps): JSX.Element {
  return (
    <article className="cities__card place-card">
      <div className="place-card__mark">
        <span>{cardProps.isPremium}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={cardProps.imgUrl} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{cardProps.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;{cardProps.tarification}</span>
          </div>
          <button className={`place-card__bookmark-button button ${ cardProps.isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{cardProps.title}</a>
        </h2>
        <p className="place-card__type">{cardProps.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
