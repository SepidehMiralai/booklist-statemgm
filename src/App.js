import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import {BookProvider} from './components/BookContext';

function App() {
  return (
    <BookProvider>
      <div className="App">
        <Nav/>
        <AddBook/>
        <BookList/>
      </div>
    </BookProvider>
  );
}

export default App;
