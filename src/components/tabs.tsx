import { CITIES } from '../const';
import classNames from 'classnames';
import { useAppDispatch } from '../redux-hooks';

import { useAppSelector } from '../redux-hooks';

function Tabs(): JSX.Element {
  const chosenCity = useAppSelector((state) => state.choseCity);
  const dispatch = useAppDispatch();
  const citiesKeys = Object.keys(CITIES);

  function clickHandler(event: React.MouseEvent<HTMLAnchorElement>) {
    const city = (event.target as HTMLAnchorElement).getAttribute('data-city');
    if (city === 'Cologne') {
      dispatch(choseCologne());
    }
  }

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {citiesKeys.map((item) => (
            <li key={item} className="locations__item">
              <a className={classNames(
                'locations__item-link', 'tabs__item',
                {'tabs__item--active': chosenCity.name === CITIES[item]})}
              href="#" data-city={CITIES[item]}
              onClick={clickHandler}
              >
                {CITIES[item]}
              </a>
            </li>))}

        </ul>
      </section>
    </div>
  );
}

export default Tabs;
