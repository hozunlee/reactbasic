// // src/hooks/counter-context.jsx          GOOD!
// export const CountProvider = ({children}) => {
//   const [count, setCount] = useState(0);
//   const plusCount = () => setCount(count + 1);
//   return (
//     <CountContext.Provider
//              value={{count, plusCount}}>
// …
// export const useCount =()=> useContext(CountContext);

import { createContext, useContext, useState } from 'react';

const sampleSession = {
  loginUser: { id: 1, name: '호준' },
  cart: [
    { id: 100, name: '파' },
    { id: 200, name: '신라면' },
  ],
};

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(sampleSession);

  const logout = () => {
    console.log('omg logout! boom');
    setSession({ ...session, loginUser: null });
  };

  const login = (userInfo) => {
    console.log('omg login gooooood!');
    setSession({ ...session, loginUser: userInfo });
  };

  const removeCartItem = (itemId) => {
    // 이곳에 작성하세요~
    // const temp = session.cart.filter((item) => item.id !== itemId);
    // const newTemp = { ...session, cart: temp };
    // return setSession(newTemp);
    return setSession({
      ...session,
      cart: session.cart.filter((item) => item.id !== itemId),
    });
  };

  const addCartItem = (item) => {
    const { id } = session.cart[session.cart.length - 1];
    return setSession({
      ...session,
      cart: [...session.cart, { id: id + 100, name: item }],
    });
  };

  return (
    <SessionContext.Provider
      value={{ session, logout, removeCartItem, login, addCartItem }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
