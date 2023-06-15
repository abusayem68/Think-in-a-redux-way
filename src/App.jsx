import { useSelector } from 'react-redux';
import AddNewBookForm from './components/AddNewBookForm';
import BookListContainer from './components/BookListContainer';
import EditBookForm from './components/EditBookForm';
import Navbar from './components/Navbar';

function App() {
  const editing = useSelector((state) => state.editing);
  return (
    <>
      <Navbar />

      <main className="py-12 2xl:px-6">
        <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          <BookListContainer />
          {!editing.status ? <AddNewBookForm /> : <EditBookForm />}
        </div>
      </main>
    </>
  );
}

export default App;
