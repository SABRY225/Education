import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { refreshAuthToken, signOutUser } from '../../Redux/actions/authActions'; // Ensure the path is correct

export default function ProtectedRoutes({ children }) {
    const isLoggedIn = useSelector((state) => state.auth.token);
    const tokenExpiry = useSelector((state) => state.auth.tokenExpiry);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isRefreshing, setIsRefreshing] = useState(false);

    useEffect(() => {
        const checkToken = async () => {
            if (!isLoggedIn) {
                navigate('/signin');
            } else {
                const currentTime = Date.now();
                if (tokenExpiry && currentTime >= tokenExpiry - 60000) {
                    try {
                        setIsRefreshing(true);
                        await dispatch(refreshAuthToken());
                        setIsRefreshing(false);
                    } catch (error) {
                        setIsRefreshing(false);
                        dispatch(signOutUser());
                        navigate('/signin');
                    }
                }
            }
        };

        checkToken();
    }, [isLoggedIn, tokenExpiry, navigate, dispatch]);

    if (!isLoggedIn || isRefreshing) {
        return null;
    }

    return children;
}
