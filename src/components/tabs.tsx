import { useState } from 'react';
import { CITIES } from '../const';
import classNames from 'classnames';

function Tabs(): JSX.Element {
  const [city, setCity] = useState('Dusseldorf');

  const citiesKeys = Object.keys(CITIES);

  function clickHandler(event: React.MouseEvent<HTMLAnchorElement>) {
    const chosenCity = (event.target as HTMLAnchorElement).getAttribute('data-city');
    if (chosenCity) {
      setCity(chosenCity);
    }
  }

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {citiesKeys.map((item) => (
            <li key={item} className="locations__item">
              <a className={classNames('locations__item-link', 'tabs__item', {'tabs__item--active': city === CITIES[item]})} href="#" data-city={CITIES[item]} onClick={clickHandler}>
                <span>{CITIES[item]}</span>
              </a>
            </li>))}

        </ul>
      </section>
    </div>
  );
}

export default Tabs;
