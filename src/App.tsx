import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import LikesPage from './pages/LikesPage';
import SearchPage from './pages/SearchPage';
import { Container } from './styledComponents/common';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <Header />
          <Routes>
            <Route path='/search' element={<SearchPage />} />
            <Route path='/likes' element={<LikesPage />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
