import { useState } from 'react';
import { useAppDispatch } from '../redux-hooks';
import { choseFilter } from '../store/actions';

function useFiltering () {
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState('Popular');
  const [isOpened, setOpened] = useState(false);


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

  return [filter, isOpened, handleClick, toggleList];
}

export default useFiltering;
