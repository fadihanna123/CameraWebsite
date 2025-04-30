import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// Components
import type { RootState, AppDispatch } from './store';

/**
 * @author Fadi Hanna
 */

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
