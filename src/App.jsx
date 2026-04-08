import React from 'react';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import WhyJoin from './pages/WhyJoin';
import Events from './pages/Events';
import Programs from './pages/Programs';
import GetInvolved from './pages/GetInvolved';
import Volunteer from './pages/Volunteer';
import Forms from './pages/Forms';
import Membership from './pages/Membership';
import Store from './pages/Store';
import Sponsors from './pages/Sponsors';
import Announcements from './pages/Announcements';

// Program Sub-pages
import Yearbook from './pages/programs/Yearbook';
import SchoolSupplies from './pages/programs/SchoolSupplies';
import WatchDogs from './pages/programs/WatchDogs';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/why-join" element={<WhyJoin />} />
            <Route path="/events" element={<Events />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/yearbook" element={<Yearbook />} />
            <Route path="/programs/school-supplies" element={<SchoolSupplies />} />
            <Route path="/programs/watchdogs" element={<WatchDogs />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/store" element={<Store />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/announcements" element={<Announcements />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
