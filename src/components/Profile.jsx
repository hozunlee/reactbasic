import { v4 } from 'uuid';
import React, { useRef } from 'react';

import { useSession } from '../hooks/session-context';
import { useEffect } from 'react';

const Profile = ({ plusMinusCount }) => {
  const { session, logout, removeCartItem, addCartItem } = useSession();
  const newItemRef = useRef();

  console.log('session :>> ', session);

  useEffect(() => {
    plusMinusCount(false);
  }, []);
  return (
    <>
      <div>User ID: {session.loginUser.name}</div>
      <button onClick={() => logout()}>로그아웃</button>
      <ul>
        {session?.cart.map((item) => (
          <React.Fragment key={item.id}>
            <li>{item.name}</li>
            <button onClick={() => removeCartItem(item.id)}>삭제</button>
          </React.Fragment>
        ))}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(
            'newItemRef.current?.value :>> ',
            newItemRef.current?.value
          );
          addCartItem(newItemRef.current?.value);

          if (newItemRef.current?.value) {
            newItemRef.current.value = '';
          }
        }}
      >
        <label htmlFor=''>
          <input type='text' ref={newItemRef} />
        </label>
      </form>
    </>
  );
};

export default Profile;
