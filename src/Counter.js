import React from "react";
import { connect } from 'react-redux';
import { DECREASE, INCREASE, RESET, MODAL_OPEN } from "./actions";

function Counter({name, count, increase, decrease, reset}) {
  // const [count, setCount] = useState(0);
  
  return (
    <div className="container">
      <h1>counter</h1>
      <h3>{name}</h3>
      <p className="counter">{count}</p>
      <div className="buttons">
        <button className="btn" type='button' onClick={decrease}>
            decrease
        </button>
        <button className="btn" type='button' onClick={reset}>
            reset
        </button>
        <button className="btn" type='button' onClick={increase}>
            increase
        </button>
      </div>
    </div>
  );
}
function mapStateToProps({countState: {count, name}}) {
  return { count: count, name: name };
}

function mapDispatchToProps(dispatch) {
  return {
    increase: () => dispatch({ type: INCREASE }),
    decrease: () => dispatch({ type: DECREASE }),
    reset: () => {
      dispatch({ type: RESET })
      dispatch({
        type: MODAL_OPEN,
        payload: {
          name: 'susan',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quasi natus quae! Fuga velit maiores soluta molestias praesentium reiciendis.'
        }
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
