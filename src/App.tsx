import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import LikesPage from './pages/LikesPage';
import SearchPage from './pages/SearchPage';
import store from './store/store';
import { Container } from './styledComponents/common';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Container>
            <Header />
            <Routes>
              <Route path='/' element={<SearchPage />} />
              <Route path='/likes' element={<LikesPage />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
