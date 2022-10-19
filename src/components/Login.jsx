import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useSession } from '../hooks/session-context';

const Login = ({ plusMinusCount }) => {
  const { session, login } = useSession();

  const userIdRef = useRef();
  const userNameRef = useRef();

  useEffect(() => {
    plusMinusCount(true);
  }, []);

  // const [newUser, setNewUser] = useState({});

  // const onChangeUserHandle = (e) => {
  //   setNewUser({ ...newUser, [e.target.name]: e.target.value });
  // };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('serIdRef.current?. :>> ', userIdRef.current);
    const temp = {
      [userIdRef.current?.name]: userIdRef.current?.value,
      [userNameRef.current?.name]: userNameRef.current?.value,
    };

    login(temp);
  };

  return (
    <form>
      <div>
        User ID:{' '}
        <input
          type='text'
          name='id'
          // onChange={onChangeUserHandle}
          ref={userIdRef}
        />
      </div>
      <div>
        Nickname :{' '}
        <input
          name='name'
          // onChange={onChangeUserHandle}
          ref={userNameRef}
          required
          maxLength='15'
          type='text'
          placeholder='이름이 뭐니?'
        />
      </div>
      <div>
        Password: <input type='password' />
      </div>
      <button type='submit' value='Log in' onClick={(e) => onSubmitHandler(e)}>
        Log In
      </button>
    </form>
  );
};

export default Login;
