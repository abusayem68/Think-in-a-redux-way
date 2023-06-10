import AddNewBookForm from './components/AddNewBookForm';
import BookListContainer from './components/BookListContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />

      <main className="py-12 2xl:px-6">
        <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          <BookListContainer />
          <AddNewBookForm />
        </div>
      </main>
    </>
  );
}

export default App;
