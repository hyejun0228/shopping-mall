import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BoardPage from './pages/BoardPage';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BoardPage />}>
          <Route index element={<MainPage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
