import { sortTypes } from '../../const';
import classNames from 'classnames';
import { useAppSelector } from '../../redux-hooks';
import React from 'react';
import useFiltering from '../../custom-hooks/use-filtering';
import { getSorting } from '../../store/app-process/selectors';
function PLacesSorting(): JSX.Element {

  const [filter, isOpened, handleClick, toggleList] = useFiltering();
  const selectedSorting = useAppSelector(getSorting);
  const sortTypesKeys = Object.keys(sortTypes);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={toggleList}>
        {sortTypes[selectedSorting]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : ''}` }>
        {sortTypesKeys.map((item) =>(
          <li key={item}
            className={classNames('places__option',{'places__options--active' :filter === sortTypes[item]})}
            data-filter={item}
            tabIndex={0}
            onClick={handleClick}
          >{sortTypes[item]}
          </li>))}
      </ul>
    </form>
  );
}

const PlacesSortingMemo = React.memo(PLacesSorting);

export default PlacesSortingMemo;
