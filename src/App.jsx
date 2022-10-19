import { useState } from 'react';
import './App.css';
import { Hello } from './components/Hello';
import My from './components/My';

import { SessionProvider } from './hooks/session-context';

function App() {
  // #1 declarative area (variables / functions)
  const [count, setCount] = useState(1);

  const plusMinusCount = (plus = true) => {
    console.log('111', count);
    setCount((prev) => {
      {
        plus ? (prev += 1) : (prev -= 1);
      }

      console.log('222', prev);
      return prev;
    }); // 쓰로틀이 발동되기전에 화면에 등록안됨
    console.log('333', count);
  };

  Hello.defaultProps = { name: 'Lee' };

  return (
    <div className='App'>
      <header className='App-header'>
        <SessionProvider>
          <My plusMinusCount={plusMinusCount} />
        </SessionProvider>

        <h2>Count: {count}</h2>
        <Hello
          name='바보'
          isMale={true}
          plusMinusCount={plusMinusCount}
          count={count}
        />
        {/* <Hello age="3">하이</Hello> */}
      </header>
    </div>
  );
}

export default App;
