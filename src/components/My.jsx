import React from 'react';
import Login from './Login';
import Profile from './Profile';

/**
 *
 * @returns
 */

// FIXME 나중엔 session을 받지 않고 context로 관리함
const My = ({ session = {}, logout, removeCartItem }) => {
  return (
    <div>
      {session.loginUser ? (
        <Profile session={session} logout={logout} />
      ) : (
        <Login />
      )}
      <ul>
        {session?.cart.map((item) => (
          <>
            <li key={item.id}>{item.name}</li>
            <button onClick={() => removeCartItem(item.id)}>삭제</button>
          </>
        ))}
      </ul>
    </div>
  );
};

export default My;
