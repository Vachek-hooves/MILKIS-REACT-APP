import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './components/home/Home';
import Rooms from './components/rooms/Rooms';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index={true} element={<Home />} />
          <Route path="rooms" element={<Rooms />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
