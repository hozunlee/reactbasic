import React from 'react';
import Login from './Login';
import Profile from './Profile';
import { useSession } from '../hooks/session-context';
/**
 *
 * @returns
 */

// FIXME 나중엔 session을 받지 않고 context로 관리함
const My = ({ plusMinusCount }) => {
  const { session } = useSession();

  return (
    <div>
      {session?.loginUser ? (
        <Profile plusMinusCount={plusMinusCount} />
      ) : (
        <Login plusMinusCount={plusMinusCount} />
      )}
    </div>
  );
};

export default My;
