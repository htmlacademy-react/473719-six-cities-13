import { TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type { State, AppDispatch } from '../types';

function useAppDispatch () {
  useDispatch<AppDispatch>();
}

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;


export {useAppDispatch};
