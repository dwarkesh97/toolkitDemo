import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { setDecrement, setIncrement } from './redux/actions';

function App() {
  const count = useSelector((state) => state.data.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(setIncrement(1))}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(setDecrement(1))}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
