import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { BooksProvider } from './BooksContext';
import Books from './components/Books';
import BookDetails from './components/BookDetails';
import NotFound from './components/NotFound';
import SecretBooks from './components/SecretBooks';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BooksProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/books" element={<Navigate to="/" />}></Route>
          <Route path="/books/:bookId" element={<BookDetails />}></Route>
          <Route path="*" element={<NotFound />} />
          <Route
            path="/secret"
            element={<PrivateRoute Component={<SecretBooks />} />}
          />
        </Routes>
      </Router>
    </BooksProvider>
  );
}

export default App;
