
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './components/home/Home';
import { Rooms } from './components/rooms/Rooms';
import Facilities from './components/facilities/Facilities';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';

function App() {
  const mainPath = process.env.PUBLIC_URL
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path={mainPath + '/'} element={<MainLayout />}>
            <Route index={true} element={<Home />} />
            <Route path={mainPath + '/rooms'} element={<Rooms />} />
            <Route path={mainPath + '/facilities'} element={<Facilities />} />
            <Route path={mainPath + '/contacts'} element={<Contacts />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

