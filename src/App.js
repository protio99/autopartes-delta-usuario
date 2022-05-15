
import './styles/App.css';
import './styles/Navbar.css';
import './styles/Register.css'
import AppRouter from "./routers/AppRouter"

export default function App() {
  return (
    <div className="App">
      <AppRouter /> 
    </div>
  );
}

