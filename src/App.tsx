import { increaseCount, decreaseCount } from "./action/actions";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import Home from "./components/Home";
function App(props: any) {
  const newCount = useSelector(
    (state: { counter: { count: number } }) => state.counter.count
  );
  const name = useSelector(
    (state: { counter: { name: string } }) => state.counter.name
  );

  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseCount());
  };
  const handleDecrease = () => {
    dispatch(decreaseCount());
  };

  return (
    // <div>
    //   <h1>Hello World and {name}</h1>
    //   <div>Count: {newCount}</div>

    //   <button onClick={() => handleIncrease()}>Increase Count</button>
    //   <button onClick={() => handleDecrease()}>Decrease Count</button>
    // </div>
    <Home />
  );
}

export default App;
