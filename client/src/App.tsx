import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BoardPage from './pages/BoardPage';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import LoginPage from './pages/Auth/LoginPage';
import SignUpPage from './pages/Auth/SignUpPage';
import AuthPage from './pages/Auth/index';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BoardPage />}>
          <Route index element={<MainPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/detail/:productId" element={<DetailPage />} />
        </Route>
        <Route path="auth" element={<AuthPage />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
