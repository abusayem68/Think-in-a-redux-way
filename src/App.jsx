import BookingTableContainer from './components/BookingTableContainer/BookingTableContainer';
import Header from './components/Header/Header';
import InputForm from './components/InputForm/InputForm';

function App() {
  return (
    <>
      <Header />

      <section>
        {/* <!-- Input Data --> */}
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
          <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
            <InputForm />
          </div>
        </div>

        <div className="table-container">
          <BookingTableContainer />
        </div>
      </section>
    </>
  );
}

export default App;
