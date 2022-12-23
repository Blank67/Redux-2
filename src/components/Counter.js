import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const count = useSelector((state) => (state.counter));
  const dispatch = useDispatch();

  const incHandler = () => {
    dispatch({type: 'inc', by: 5});
  }

  const decHandler = () => {
    dispatch({type: 'dec', by: 5});
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{count}</div>
      <div>
        <button onClick={decHandler}>Decrease</button>
        <button onClick={incHandler}>Increase</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
