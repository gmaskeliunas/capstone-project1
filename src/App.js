import './App.css';
import { Routes, Route } from "react-router";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import OrderOnline from "./pages/OrderOnline";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./pages/ConfirmedBooking";


function App() {
  return (
    <>
      <Nav />
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/reservations" element={<BookingPage/>} />
          <Route path="/order-online" element={<OrderOnline/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/reservation-confirmation" element={<ConfirmedBooking/>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
