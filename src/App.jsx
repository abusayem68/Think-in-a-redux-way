import HooksCounter from './components/Counter/HooksCounter';
import VariableCounter from './components/Counter/VariableCounter';
import DynamicHooksCounter from './components/Counter/dynamicCounter';

function App() {
  return (
    <>
      <h1 className="text-center text-5xl my-7 font-bold">
        Simple Counter Application
      </h1>
      <HooksCounter />
      <DynamicHooksCounter />
      <VariableCounter />
      <VariableCounter dynamic />
    </>
  );
}

export default App;
