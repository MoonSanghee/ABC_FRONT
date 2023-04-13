import { useEffect, useState } from 'react';
import { getMe } from '../api/Users';

//NOTE: 커스텀 훅
const useMe = () => {
  //NOTE: recoil을 써야한다.
  const [me, setMe] = useState(null);

  const onGetMe = async () => {
    const me = await getMe();
    if (me.data) {
      setMe(me.data);
    }
  };

  useEffect(() => {
    onGetMe();
  }, []);

  return me;
};

export default useMe;
