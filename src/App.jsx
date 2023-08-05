import { CssVarsProvider } from '@mui/joy/styles';
import ModeToggle from './components/ModeToggle/';
import ContactForm from './components/ContactForm/';
import './App.css';

function App() {
  return (
    <CssVarsProvider>
      <main>
        <ModeToggle />
        <ContactForm />
      </main>
    </CssVarsProvider>
  );
}

export default App
