import { getUserAuth } from '../store/user/userSlice';
import { useAppSelector } from './hooks';
export const useAuth = (): boolean => {
    const isAuth = useAppSelector(getUserAuth);
    return isAuth;
}