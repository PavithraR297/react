import React from "react";
import Doctor from "../Assets/doctor-book-appointment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={Doctor} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span></span>
        </h3>
        <p className="ba-description">
         
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "black" }} /> Best Professional assistants
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "black" }} /> All time service
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "black" }} /> 24/7 Customer care
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "black" }} /> Enrollment Easy and Quick
        </p>

        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Start my journey!
        </button>
      </div>
    </div>
  );
}

export default BookAppointment;
