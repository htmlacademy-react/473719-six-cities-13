import { useState } from 'react';
import { useAppDispatch } from '../redux-hooks';
import { choseFilter } from '../store/actions';

function useFiltering (): [string, boolean, ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void), ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void)] {
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState('Popular');
  const [isOpened, setOpened] = useState(false);


  function toggleList() {
    setOpened(!isOpened);
  }

  function handleClick(event: React.MouseEvent<HTMLElement>){
    const settings = 'data-filter';
    const actualFilter = (event.target as HTMLElement).getAttribute(settings);
    if (actualFilter) {
      setFilter(actualFilter);
      dispatch(choseFilter(actualFilter));
      toggleList();
    }
  }

  return [filter, isOpened, handleClick, toggleList];
}

export default useFiltering;
