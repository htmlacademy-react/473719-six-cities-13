import { useState } from 'react';

function PLacesSorting(): JSX.Element {
  const [filter, setFilter] = useState('');

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
      Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        <li className="places__option places__option--active" tabIndex={0}>Popular</li>
        <li className="places__option" tabIndex={0} onClick={()=> {
          setFilter('toHigh');
          console.log(filter);
        }}
        >Price: low to high
        </li>
        <li className="places__option" tabIndex={0} onClick={()=> {
          setFilter('toLow');
          console.log(filter);
        }}
        >Price: high to low
        </li>
        <li className="places__option" tabIndex={0} onClick={()=> {
          setFilter('topRated');
          console.log(filter);
        }}
        >Top rated first
        </li>
      </ul>
    </form>
  );
}

export default PLacesSorting;
