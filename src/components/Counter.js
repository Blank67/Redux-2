import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store';
import classes from './Counter.module.css';

const Counter = () => {
  const count = useSelector((state) => (state.counter.value));
  const show = useSelector((state) => (state.counter.showCounter));
  const dispatch = useDispatch();

  const incHandler = () => {
    dispatch(counterActions.inc());
  }

  const decHandler = () => {
    dispatch(counterActions.dec());
  }

  const increase = () => {
    dispatch(counterActions.incBy(5)); //This is converted into {type: 'SOME_IDENTIFIER', payload: 10}
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{count}</div>}
      <div>
        <button onClick={decHandler}>Decrease</button>
        <button onClick={increase}>Increase By 5</button>
        <button onClick={incHandler}>Increase</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
