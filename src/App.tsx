import { connect } from "react-redux";
import { increaseCount, decreaseCount } from "./action/actions";
import store from "./redux/store";
function App(props: any) {
  //event hander
  const handleIncrease = () => {
    //dispatch action
    // props.increaseCount();

    //fire actions
    store.dispatch(increaseCount());
  };
  const handleDecrease = () => {
    props.decreaseCount();
  };
  return (
    <div>
      <h1>Hello World</h1>
      <div>Count: {props.count}</div>
      <button onClick={() => handleIncrease()}>Increase Count</button>
      <button onClick={() => handleDecrease()}>Decrease Count</button>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    increaseCount: () => dispatch(increaseCount()),
    decreaseCount: () => dispatch(decreaseCount()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
