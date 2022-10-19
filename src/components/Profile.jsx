import { v4 } from 'uuid';
import React from 'react';

const Profile = ({ session, logout }) => {
  return (
    <>
      <div>User ID: {session.loginUser.name}</div>
      <button onClick={() => logout()}>로그아웃</button>
      <div>{v4()}</div>
      <ul>
        {session?.cart.map((item) => {
          // 유니크한 key 값이 없을 수도있으니 uuid를 사용하라
          return <li key={item.id}>{item.name}</li>;
          // return <li ket={v4()}>{item.name}</li>;
        })}
      </ul>
    </>
  );
};

export default Profile;
