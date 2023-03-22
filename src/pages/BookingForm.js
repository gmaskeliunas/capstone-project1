import { useState } from "react";
import "./Booking.css"

export default function BookingForm(props) {

  const [formError, setFormError] = useState({})

  const validateForm = () => {
    let err = {}
    if (props.formData.firstName === "") {
      err.firstName = "* First name required!"
    }

    if (props.formData.lastName === "") {
      err.lastName = "* Last name required!"
    }

    if (props.formData.email === "") {
      err.email = "* Email required!"
    } else {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(!regex.test(props.formData.email)) {
      err.email = "* Email not valid!"
      }
    }

    if (props.formData.time === "") {
        err.guests = "* Please specify desired time!"
    }

    if (props.formData.guests === "") {
        err.guests = "* Please specify number of guests!"
    }

    if (props.formData.date === "") {
        err.date = "* Please specify the date!"
    }

    setFormError({...err})
    return Object.keys(err).length < 1;
}

const onSubmitHandler = (event) => {
    event.preventDefault();
    console.table(props.formData)
    console.log("Submitted")
    let isValid = validateForm()
    if(isValid) {
      props.submitForm()
      alert("Submitted")
    }
}

const today = new Date().toISOString().split("T")[0];

  return(
    <div className="app__reservations-container">
      <form className="app__reservations-form" onSubmit={onSubmitHandler}>
        <label className="app__reservation-label" htmlFor="res-fname">First name *</label>
        <input
          className="app__reservation-input"
          placeholder="First name"
          id="res-fname"
          name="firstName"
          onChange={props.onChangeHandler}
        />
        <span className="app__reservation_non-valid">{formError.firstName}</span>
        <label className="app__reservation-label" htmlFor="res-lname">Last name *</label>
        <input
          className="app__reservation-input"
          placeholder="Last name"
          id="res-lname"
          name="lastName"
          onChange={props.onChangeHandler}
        />
        <span className="app__reservation_non-valid">{formError.lastName}</span>
        <label className="app__reservation-label" htmlFor="res-email">Email *</label>
        <input
          className="app__reservation-input"
          placeholder="example@mail.com"
          id="res-email"
          name="email"
          onChange={props.onChangeHandler}
        />
        <span className="app__reservation_non-valid">{formError.email}</span>
        <label className="app__reservation-label" htmlFor="res-date">Choose date *</label>
        <input
          className="app__reservation-input"
          type="date"
          id="res-date"
          name="date"
          min={today}
          onChange={props.onChangeHandler}
        />
        <span className="app__reservation_non-valid">{formError.date}</span>
        <label className="app__reservation-label" htmlFor="res-time">Choose time *</label>
        <select
          className="app__reservation-input"
          id="res-time"
          name="time"
          onChange={props.onChangeHandler}
        >
          {props.availableTimes.map(time => (
          <option key={time}>{time}</option>
        ))}
        </select>
        <span className="app__reservation_non-valid">{formError.time}</span>
        <label className="app__reservation-label" htmlFor="guests">Number of guests *</label>
        <input
          className="app__reservation-input"
          type="number"
          placeholder=""
          min="1" max="10"
          id="guests"
          name="guests"
          onChange={props.onChangeHandler}
        />
        <label className="app__reservation-label" htmlFor="occasion">Occasion</label>
        <select
          className="app__reservation-input"
          id="occasion"
          name="occasion"
          onChange={props.onChangeHandler}
        >
          <option>Select</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Other</option>
        </select>
        <input className="app__reservationInputButton" role="button" type="submit" value="Book Now"/>
      </form>
    </div>
  );
}