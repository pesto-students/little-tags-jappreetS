import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const useIsLoggedIn = () => {
  const authUser = useSelector((state) => state.sessionState.authUser);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (!!authUser && !!authUser.uid) {
      setIsLoggedIn(true);
    }
  }, [authUser]);

  return isLoggedIn;
};

export default useIsLoggedIn;
