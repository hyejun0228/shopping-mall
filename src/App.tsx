import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 다른 페이지들도 여기 추가 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
