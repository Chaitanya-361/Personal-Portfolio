import { useState } from 'react';
import './index.css'; 

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Hobbies from './pages/Hobbies';
import Contact from './pages/Contact';

function App() {
  const [activePage, setActivePage] = useState('about');

  return (
    <main>
      <Sidebar />

      <div className="main-content">
        <Navbar activePage={activePage} setActivePage={setActivePage} />

        <About isActive={activePage === 'about'} />
        <Resume isActive={activePage === 'resume'} />
        <Portfolio isActive={activePage === 'portfolio'} />
        <Hobbies isActive={activePage === 'hobbies'} />
        <Contact isActive={activePage === 'contact'} />
      </div>
    </main>
  );
}

export default App;
