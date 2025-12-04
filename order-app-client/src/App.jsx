import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import OrderForm from './Order/OrderForm';
import OrderConfirmation from './Order/OrderConfirmation';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/order" className="nav-link">Nová objednávka</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          {/* výchozí routa → přesměrování */}
          <Route index element={<Navigate to="/order" />} />

          {/* skupina rout pro objednávky */}
          <Route path="/order">
            <Route index element={<OrderForm />} />
            <Route path=":id" element={<OrderConfirmation />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

