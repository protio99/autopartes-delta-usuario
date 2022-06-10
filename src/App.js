import "./styles/App.css";
import "./styles/Navbar.css";
import "./styles/Register.css";
import AppRouter from "./routers/AppRouter";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";

export default function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}
