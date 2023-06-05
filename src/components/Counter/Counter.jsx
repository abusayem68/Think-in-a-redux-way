import { connect } from 'react-redux';
import { decrement, increment } from '../../redux/counter/actions';

const Counter = ({ count, increment, decrement }) => {
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
  console.log(ownProps);
  return {
    count: state.value,
  };
};

const mapStateToDispatch = (dispatch) => {
  return {
    increment: (value) => dispatch(increment(value)),
    decrement: (value) => dispatch(decrement(value)),
  };
};
export default connect(mapStateToProps, mapStateToDispatch)(Counter);
