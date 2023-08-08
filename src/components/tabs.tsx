import { CITIES } from '../const';
import { City } from '../types';
import classNames from 'classnames';
import { useAppDispatch } from '../redux-hooks';
import { changeCity } from '../store/actions';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

type TabsProps = {
  chosenCity : string;
}

function Tabs(props: TabsProps): JSX.Element {
  const {chosenCity} = props;
  const dispatch = useDispatch();
  const citiesKeys = Object.keys(CITIES);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {citiesKeys.map((city) => (
            <li key={city} className="locations__item"
              onClick={(event) => {
                event.preventDefault();
                dispatch(changeCity(city));
              }}
            >
              <Link className={classNames(
                'locations__item-link', 'tabs__item',
                {'tabs__item--active': CITIES[city] === chosenCity})}
              href="#"
              >
                <span>{CITIES[city]}</span>
              </Link>
            </li>))}

        </ul>
      </section>
    </div>
  );
}

export default Tabs;
