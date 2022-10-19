import React, { useState } from 'react';
import Login from './Login';
import Profile from './Profile';
import { useSession } from '../hooks/session-context';
/**
 *
 * @returns
 */

// FIXME 나중엔 session을 받지 않고 context로 관리함
const My = ({ plusMinusCount }) => {
  const { session, totalPrice } = useSession();
  const [subTitle, setSubTitle] = useState('');

  return (
    <div>
      {session?.loginUser ? (
        <Profile plusMinusCount={plusMinusCount} />
      ) : (
        <Login plusMinusCount={plusMinusCount} />
      )}
      <div>
        <h4>소제목: {subTitle}</h4>
        <strong>Sum: {totalPrice}원</strong>
        <input type='text' onChange={(evt) => setSubTitle(evt.target.value)} />
      </div>
    </div>
  );
};

export default My;
