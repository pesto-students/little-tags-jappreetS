import { useState, useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';

import FirebaseContext from '../context/firebase';

const useFetchOrdersCount = () => {
  const firebase = useContext(FirebaseContext);
  const authUser = useSelector((state) => state.sessionState.authUser);
  const [ordersCount, setOrdersCount] = useState(null);

  useEffect(() => {
    if (!!authUser && !!authUser.uid) {
      (async () => {
        const ordersCount = await firebase
          .ordersCount()
          .once('value')
          .then((snapshot) => snapshot.val());
        setOrdersCount(ordersCount);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authUser]);

  return { ordersCount };
};

export default useFetchOrdersCount;
