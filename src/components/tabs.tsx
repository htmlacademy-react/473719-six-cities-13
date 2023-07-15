import { SyntheticEvent, useState } from 'react';


const CITIES = {
  paris: 'Paris',
  cologne: 'Cologne',
  brussels: 'Brussels',
  amsterdam: 'Amsterdam',
  hamburg: 'Hamburg',
  dusseldorf: 'Dusseldorf'
} as const;

function Tabs(): JSX.Element {
  const [city, setCity] = useState('Dusseldorf');

  function clickHandler(event: SyntheticEvent) {
    event.preventDefault();
    const chosenCity: string = event.target.getAttribute('data-city');
    setCity(chosenCity);
  }

  console.log(city);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <li className="locations__item">
            <a className={`locations__item-link tabs__item ${city === CITIES.paris ? 'tabs__item--active' : ''}`} href="#" data-city={CITIES.paris} onClick={clickHandler}>
              <span>{CITIES.paris}</span>
            </a>
          </li>
          <li className="locations__item">
            <a className={`locations__item-link tabs__item ${city === CITIES.cologne ? 'tabs__item--active' : ''}`} href="#" data-city={CITIES.cologne} onClick={clickHandler}>
              <span>{CITIES.cologne}</span>
            </a>
          </li>
          <li className="locations__item">
            <a className={`locations__item-link tabs__item ${city === CITIES.brussels ? 'tabs__item--active' : ''}`} href="#" data-city={CITIES.brussels} onClick={clickHandler}>
              <span>{CITIES.brussels}</span>
            </a>
          </li>
          <li className="locations__item">
            <a className={`locations__item-link tabs__item ${city === CITIES.amsterdam ? 'tabs__item--active' : ''}`} href="#" data-city={CITIES.amsterdam} onClick={clickHandler}>
              <span>{CITIES.amsterdam}</span>
            </a>
          </li>
          <li className="locations__item">
            <a className={`locations__item-link tabs__item ${city === CITIES.hamburg ? 'tabs__item--active' : ''}`} href="#" data-city={CITIES.hamburg} onClick={clickHandler}>
              <span>{CITIES.hamburg}</span>
            </a>
          </li>
          <li className="locations__item">
            <a className={`locations__item-link tabs__item ${city === CITIES.dusseldorf ? 'tabs__item--active' : ''}`} href="#" data-city={CITIES.dusseldorf} onClick={clickHandler}>
              <span>{CITIES.dusseldorf}</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
