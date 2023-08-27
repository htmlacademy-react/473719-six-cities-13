import { ReviewItemProps } from '../../types/types';

function ReviewItem(reviewItemProps: ReviewItemProps):JSX.Element {
  const {rating, user, comment, date} = reviewItemProps;
  const commentDate = new Date(date);
  const month = commentDate.toLocaleString('en-US',{month: 'long'});
  const year = commentDate.getFullYear();

  return(
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date}>{month}{' '}{year}</time>
      </div>
    </li>
  );
}

export default ReviewItem;
