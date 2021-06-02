import './App.css';
import {useState} from 'react';
import Form from './components/Form';
export default function App() {

  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
     {/* <h1>counter</h1>
     <p>{counter}</p>
     <button onClick={() => setCounter(counter+1)}>increase</button>
     <button onClick={() => setCounter(counter-1)}>decrease</button> */}
     <Form />
    </div>
  );
}

// export default App;
