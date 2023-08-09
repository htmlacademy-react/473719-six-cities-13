import { useState } from 'react';
import { sortTypes } from '../const';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../redux-hooks';
import { choseFilter } from '../store/actions';

function PLacesSorting(): JSX.Element {

  const [filter, setFilter] = useState('Popular');
  const [isOpened, setOpened] = useState(false);

  const dispatch = useAppDispatch();

  const selectedFilter = useAppSelector((state) => state.filter);
  const sortTypesKeys = Object.keys(sortTypes);

  function toggleList() {
    setOpened(!isOpened);
  }


  function handleClick(event: React.MouseEvent<HTMLLIElement>){
    const settings = 'data-filter';
    const actualFilter = (event.target as HTMLLIElement).getAttribute(settings);
    if (actualFilter) {
      setFilter(actualFilter);
      dispatch(choseFilter(actualFilter));
      toggleList();
    }
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={toggleList}>
        {sortTypes[selectedFilter]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : ''}` }>
        {sortTypesKeys.map((item) =>(<li key={item} className={classNames('places__option',{'places__options--active' :filter === sortTypes[item]})} data-filter={item} tabIndex={0} onClick={handleClick}>{sortTypes[item]}</li>))}
      </ul>
    </form>
  );
}

export default PLacesSorting;
