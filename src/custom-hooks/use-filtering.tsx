import { useState } from 'react';
import { changeSort } from '../store/app-process/app-process';
import { useAppDispatch } from '../redux-hooks';
function useFiltering (): [string, boolean, ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void), ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void)] {
  const [filter, setFilter] = useState('Popular');
  const [isOpened, setOpened] = useState(false);
  const dispatch = useAppDispatch();


  function toggleList() {
    setOpened(!isOpened);
  }

  function handleClick(event: React.MouseEvent<HTMLElement>){
    const settings = 'data-filter';
    const actualFilter = (event.target as HTMLElement).getAttribute(settings);
    if (actualFilter) {
      setFilter(actualFilter);
      dispatch(changeSort(actualFilter));
      toggleList();
    }
  }

  return [filter, isOpened, handleClick, toggleList];
}

export default useFiltering;
