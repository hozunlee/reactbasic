import { useState } from 'react';
import './App.css';
import { Hello } from './components/Hello';
import My from './components/My';

const sampleSession = {
  loginUser: { id: 1, name: '호준' },
  cart: [
    { id: 100, name: '파' },
    { id: 200, name: '신라면' },
  ],
};

function App() {
  // #1 declarative area (variables / functions)
  const [count, setCount] = useState(0);
  const [session, setSession] = useState(sampleSession);

  const logout = () => {
    console.log('omg logout! boom');
    setSession({ ...session, loginUser: null });
  };

  const removeCartItem = (itemId) => {
    console.log('session :>> ', session);
    // 이곳에 작성하세요~
    const temp = session.cart.filter((item) => item.id !== itemId);
    console.log('temp :>> ', temp);
    const newTemp = { ...session, cart: temp };
    console.log('newTemp :>> ', newTemp);
    return setSession(newTemp);
  };

  const plusCount = () => {
    console.log('111', count);
    setCount((prev) => {
      prev += 1;
      console.log('222', prev);
      return prev;
    }); // 쓰로틀이 발동되기전에 화면에 등록안됨
    console.log('333', count);
  };
  Hello.defaultProps = { name: 'Lee' };

  return (
    <div className='App'>
      <header className='App-header'>
        <My session={session} logout={logout} removeCartItem={removeCartItem} />
        <h2>Count: {count}</h2>
        <Hello name='바보' isMale={true} plusCount={plusCount} count={count} />
        {/* <Hello age="3">하이</Hello> */}
      </header>
    </div>
  );
}

export default App;
