// import { connect } from "react-redux";
import { increaseCount, decreaseCount } from "./action/actions";

// import store from "./redux/store";
import { useDispatch, useSelector } from "react-redux";
function App(props: any) {
  // state ở đây là state của redux
  const newCount = useSelector(
    (state: { counter: { count: number } }) => state.counter.count
  );
  const name = useSelector(
    (state: { counter: { name: string } }) => state.counter.name
  );

  const dispatch = useDispatch();
  //event hander
  const handleIncrease = () => {
    //dispatch action
    // props.AddCount();

    dispatch(increaseCount());
    //fire actions
    // store.dispatch(
    //   // { type: `Test`, payload: `from Phuc Lam` }
    //   increaseCount()
    // );
  };
  const handleDecrease = () => {
    // props.decreaseCount();
    dispatch(decreaseCount());
  };
  return (
    <div>
      {/* <h1>Hello World and {props.abc}</h1>
      <div>Count: {props.count}</div> 
      */}
      <h1>Hello World and {name}</h1>
      <div>Count: {newCount}</div>

      <button onClick={() => handleIncrease()}>Increase Count</button>
      <button onClick={() => handleDecrease()}>Decrease Count</button>
    </div>
  );
}

// map state (redux store) + props-state
// const mapStateToProps = (state: any) => {
//   return {
//     count: state.counter.count,
//     abc: state.counter.name,
//   };
// };
// // map dispatch (redux ) to props react
// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     AddCount: () => dispatch(increaseCount()),
//     decreaseCount: () => dispatch(decreaseCount()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
