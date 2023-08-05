import { CssVarsProvider } from '@mui/joy/styles';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <CssVarsProvider>
      <Header />
      <Outlet />
    </CssVarsProvider>
  );
}

export default App
