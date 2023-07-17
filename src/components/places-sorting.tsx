import { useState } from 'react';
import { sortTypes } from '../const';

function PLacesSorting(): JSX.Element {

  const [filter, setFilter] = useState('normal');
  const [isOpened, setOpened] = useState(false);


  function toggleList() {
    setOpened(!isOpened);
  }

  function handleClick(event: React.MouseEvent<HTMLLIElement>){
    const settings = 'data-filter';
    const actualFilter: string = event.target.getAttribute(settings);
    setFilter(actualFilter);
    toggleList();
  }
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={toggleList}>
        {sortTypes[filter]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : ''}` }>
        <li className={`places__option ${filter === 'normal' ? 'places__options--active' : ''}`} data-filter="normal" tabIndex={0} onClick={handleClick}>
          Popular
        </li>
        <li className={`places__option ${filter === 'toHigh' ? 'places__options--active' : ''}`} tabIndex={0} data-filter="toHigh" onClick={handleClick}>Price: low to high
        </li>
        <li className={`places__option ${filter === 'toLow' ? 'places__options--active' : ''}`} tabIndex={0} data-filter="toLow" onClick={handleClick}>Price: high to low
        </li>
        <li className={`places__option ${filter === 'topRated' ? 'places__options--active' : ''}`} tabIndex={0} data-filter="topRated" onClick={handleClick}>Top rated first
        </li>
      </ul>
    </form>
  );
}

export default PLacesSorting;
