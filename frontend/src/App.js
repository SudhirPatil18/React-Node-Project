import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import toast from 'react-hot-toast';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <Header />
    <main className='pt-16 bg-slate-100 min-h-[calc(100vh)]'>
      <Outlet/>
    </main>
    <Footer/>
    </div>
  );
}

export default App;
