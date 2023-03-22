import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Booking.css"
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "../api"

export default function BookingPage() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    date: "",
    time: "17:00",
    guests: "",
    occasion: "",
  })

  const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);

  const onChangeHandler = (event) => {
    setFormData(()=>({
        ...formData,
        [event.target.name]: event.target.value
    }))
  }

  const navigate = useNavigate();

  const submitForm = () => {
    submitAPI() ? navigate("/reservation-confirmation") : alert("Failed");
  }

  return(
    <>
      <div className="app__booking-page_header">
        <h1>Table reservation</h1>
      </div>
      <BookingForm formData={formData} onChangeHandler={onChangeHandler} availableTimes={availableTimes} submitForm={submitForm}/>
    </>
  );
}