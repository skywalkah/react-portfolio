import { CssVarsProvider } from '@mui/joy/styles';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/';
import { AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  return (
    <CssVarsProvider>
      <Header />
      <AnimatePresence>
        <Outlet />
      </AnimatePresence>
      <Footer />
    </CssVarsProvider>
  );
}

export default App
