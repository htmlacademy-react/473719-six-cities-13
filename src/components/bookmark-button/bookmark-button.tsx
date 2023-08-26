import cn from 'classnames';
import { AppRoute, AuthorizationStatus } from '../../const';
import { changeFavoriteOfferStatus } from '../../store/api-actions';
import { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux-hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { useNavigate } from 'react-router-dom';

type BookmarkButtonProps = {
  offerId: string;
  isFavorite: boolean;
  variant: 'place-card' | 'offer';
  width: number;
  height: number;
  textIcon: string;
  isCheckAuth?: boolean;
}

function BookmarkButton({offerId, isFavorite, variant, width, height, textIcon, isCheckAuth}: BookmarkButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();

  const classList = useMemo(() => cn(
    `${variant}__bookmark-button`,
    isFavorite ? `${variant}__bookmark-button--active` : null,
    'button',
  ), [ variant, isFavorite ]);

  const handleFavoriteStatusClick = () => {
    if (isCheckAuth) {
      if (authorizationStatus !== AuthorizationStatus.Auth) {
        navigate(AppRoute.LogIn);
      }
    }
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(changeFavoriteOfferStatus({
        offerId: offerId,
        status: Number(!isFavorite ? 1 : 0),
      }));
    }
  };

  return (
    <button
      className={classList}
      type="button"
      onClick={handleFavoriteStatusClick}
    >
      <svg className={`${variant}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">{textIcon}</span>
    </button>
  );
}

export default BookmarkButton;
