import { CITIES } from '../../const';
import React from 'react';
import classNames from 'classnames';
import { changeCity } from '../../store/app-process/app-process';

import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../redux-hooks';
import { TabsProps } from '../../types/types';

function Tabs(props: TabsProps): JSX.Element {
  const {chosenCity} = props;
  const dispatch = useAppDispatch();
  const citiesKeys = Object.keys(CITIES);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {citiesKeys.map((city) => (
            <li key={city} className="locations__item"
              onClick={(event) => {
                event.preventDefault();
                dispatch(changeCity(CITIES[city]));
              }}
            >
              <Link className={classNames(
                'locations__item-link', 'tabs__item',
                {'tabs__item--active': chosenCity === CITIES[city]})}
              >
                <span>{CITIES[city]}</span>
              </Link>
            </li>))}
        </ul>
      </section>
    </div>
  );
}

const TabsMemo = React.memo(Tabs, (previousProps, nextProps) => previousProps === nextProps);

export default TabsMemo;
