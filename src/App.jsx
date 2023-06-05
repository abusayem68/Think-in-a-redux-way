import HooksCounter from './components/Counter/HooksCounter';
import DynamicHooksCounter from './components/Counter/dynamicCounter';

function App() {
  return (
    <>
      <h1 className="text-center text-5xl my-7 font-bold">
        Simple Counter Application
      </h1>
      <HooksCounter />
      <DynamicHooksCounter />
    </>
  );
}

export default App;
