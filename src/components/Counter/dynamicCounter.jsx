import { useDispatch, useSelector } from 'react-redux';
import { dDecrement, dIncrement } from '../../redux/dynamicCounter/actions';

const DynamicHooksCounter = () => {
  const count = useSelector((state) => state.dynamicCounter.value);
  const dispatch = useDispatch();

  const incrementHandler = (value) => {
    dispatch(dIncrement(value));
  };

  const decrementHandler = (value) => {
    dispatch(dDecrement(value));
  };
  return (
    <>
      <div className=" w-4/6 lg:w-[600px] mx-auto p-6 bg-white rounded mb-6">
        <p className="text-4xl font-semibold text-center">{count}</p>
        <div className="flex gap-5 place-content-center mt-5 text-xl">
          <button
            onClick={() => incrementHandler(10)}
            className="bg-indigo-700 text-white font-semibold px-6 py-4 rounded"
            type="button">
            Increment
          </button>
          <button
            onClick={() => decrementHandler(7)}
            className="bg-rose-700 text-white font-semibold px-6 py-4 rounded"
            type="button">
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};

export default DynamicHooksCounter;
