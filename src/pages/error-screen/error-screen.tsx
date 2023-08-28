import { useAppDispatch } from '../../redux-hooks';
import { fetchOffers } from '../../store/api-actions';
import lcs from './error-screen.module.css';

export default function ErrorScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <section className={lcs.el}>
      <h2 className="error__text">Не удалось загрузить</h2>
      <button
        className={lcs.button}
        onClick={() => {
          dispatch(fetchOffers());
        }}
        type="button"
      >
        Попробовать ещё раз
      </button>
    </section>
  );
}
