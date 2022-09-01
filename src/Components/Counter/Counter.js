import styles from './Counter.module.css';
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../reduxstore/storeState";

const Counter = () => {


    const counter = useSelector((state) => state.counterData.counterState);
    const showCounterState = useSelector((state) => state.counterData.showCounter);


    // cont counterState: count 
    // showCounterSatet: showCounterState
    // selec
    const dispatch = useDispatch();
    const toggleHandler = () =>{
      // dispatch({type: "toggle"});
      dispatch(counterActions.toggle());
    }
    const incrementHandler = () =>{
      // dispatch({type: "increment"});
      dispatch(counterActions.increment());
    }
    const decrementHandler = () =>{
      // dispatch({type: "decrement"});
      dispatch(counterActions.decrement());
    }
    const increaseHandler = () =>{
      // dispatch({ type: "increase", value: 5, });
      dispatch(counterActions.increase(5));
    }
  return (
    <main className={styles.counter}>
        <h1>Redux Counter</h1>
        {showCounterState ?<div className={styles.value}>--Counter Value-- {counter}</div> : ""}
        <div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={decrementHandler}>Decrement</button>
          <button onClick={increaseHandler}>Increase by 5</button>
        </div>
    <button onClick={toggleHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter;

// card=[6 images, flag]

// shfflecard=[...card,...card]
// shufflecard.sort(()=>Math.random()-0.5)
// .map((card)=>{})
// 12 images
// image = -0.1 - 1st image
// image 2= 0.8 - sort
// image 3= 0.8
