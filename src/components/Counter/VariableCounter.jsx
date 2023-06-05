import { connect } from 'react-redux';
import { decrement, increment } from '../../redux/counter/actions';
import { dDecrement, dIncrement } from '../../redux/dynamicCounter/actions';

const VariableCounter = ({ count, increment, decrement }) => {
  return (
    <>
      <div className=" w-4/6 lg:w-[600px] mx-auto p-6 bg-white rounded mb-6">
        <p className="text-4xl font-semibold text-center">{count}</p>
        <div className="flex gap-5 place-content-center mt-5 text-xl">
          <button
            onClick={() => increment(5)}
            className="bg-indigo-700 text-white font-semibold px-6 py-4 rounded"
            type="button">
            Increment
          </button>
          <button
            onClick={() => decrement(5)}
            className="bg-rose-700 text-white font-semibold px-6 py-4 rounded"
            type="button">
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    count: ownProps.dynamic ? state.dynamicCounter.value : state.counter.value,
  };
};

const mapStateToDispatch = (dispatch, ownProps) => {
  return {
    increment: ownProps.dynamic
      ? (value) => dispatch(dIncrement(value))
      : () => dispatch(increment(6)),

    decrement: ownProps.dynamic
      ? (value) => dispatch(dDecrement(value))
      : () => dispatch(decrement(6)),
  };
};
export default connect(mapStateToProps, mapStateToDispatch)(VariableCounter);
