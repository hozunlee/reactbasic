import { useEffect, useMemo } from 'react';
import { createContext, useContext, useState } from 'react';

const sampleSession = {
  loginUser: { id: 1, name: '호준' },
  cart: [
    { id: 100, name: '파', price: 3000 },
    { id: 200, name: '신라면', price: 1500 },
  ],
};

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(sampleSession);
  // const [totalPrice, setTotalPrice] = useState();

  const logout = () => {
    console.log('omg logout! boom');
    setSession({ ...session, loginUser: null });
  };

  const login = (userInfo) => {
    console.log('omg login gooooood!');
    setSession({ ...session, loginUser: userInfo });
  };

  /**
   *
   * @param {number} itemId : cart에 달려있는 itemId를 넘겨준다.
   * @returns session 정보에서 item.id와 비교해 해당 cart 정보를 삭제한다.
   */
  const removeCartItem = (itemId) => {
    console.log('typeof itemId :>> ', typeof itemId);
    // 이곳에 작성하세요~
    // const temp = session.cart.filter((item) => item.id !== itemId);
    // const newTemp = { ...session, cart: temp };
    // return setSession(newTemp);
    return setSession({
      ...session,
      cart: session.cart.filter((item) => item.id !== itemId),
    });
  };

  /**
   *
   * @param {string} item : input에서 추가된 ref.current.value가 들어온다.
   * @returns session에 추가된 cart 정보를 넣고 setter 한다.
   */
  const addCartItem = (item) => {
    const id =
      session.cart.length > 0 ? session.cart[session.cart.length - 1].id : 1000;

    console.log('id :>> ', id);

    return setSession({
      ...session,
      cart: [...session.cart, { id: id + 100, name: item, price: 5000 }],
    });
  };

  /**
   * useMemo를 사용해 totalprice 값을 session.cart가 바뀔때만 수정한다.
   */
  const totalPrice = useMemo(() => {
    let total = 0;
    for (const a of session.cart) {
      total += a.price;
    }
    console.log('total :>> ', total);
    return total;
  }, [session.cart]);

  useEffect(() => {
    totalPrice;
    console.log('total :>> ', totalPrice);
  }, []);

  return (
    <SessionContext.Provider
      value={{
        session,
        logout,
        removeCartItem,
        login,
        addCartItem,
        totalPrice,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
