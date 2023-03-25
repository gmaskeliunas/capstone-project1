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
          <Route exact path="/capstone-project1/" element={<Home/>} />
          <Route path="/capstone-project1/about" element={<About/>} />
          <Route path="/capstone-project1/reservations" element={<BookingPage/>} />
          <Route path="/capstone-project1/order-online" element={<OrderOnline/>} />
          <Route path="/capstone-project1/login" element={<Login/>} />
          <Route path="/capstone-project1/menu" element={<Menu/>} />
          <Route path="/capstone-project1/reservation-confirmation" element={<ConfirmedBooking/>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
