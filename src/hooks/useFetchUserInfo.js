import { useState, useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';

import FirebaseContext from '../context/firebase';

const useFetchUserInfo = () => {
  const firebase = useContext(FirebaseContext);
  const authUser = useSelector((state) => state.sessionState.authUser);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!!authUser && !!authUser.uid) {
      (async () => {
        const userData = await firebase
          .user(authUser.uid)
          .once('value')
          .then((snapshot) => snapshot.val());
        setUserInfo(userData);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authUser]);

  return { userInfo };
};

export default useFetchUserInfo;
