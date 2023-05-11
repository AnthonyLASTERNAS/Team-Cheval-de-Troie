import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import ReservationForm from "./components/Reservations";
import "./page/Formulaire.css";

function Formulaire() {
  const [reservations, setReservations] = useState([]);

  const handleReservation = (reservation) => {
    setReservations([...reservations, reservation]);
  };

  return (
    <div>
      <ReservationForm handleReservation={handleReservation} />
      <ul>
        {reservations.map((reservation, index) => (
          <li key={index}>
            {reservation.nom} ({reservation.email}) -{" "}
            {reservation.dateReservation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Formulaire;
