//import Home from "./pages/Home";
//import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Reservations from "../components/Reservations";

function Formulaire() {
  const [reservations, setReservations] = useState([]);

  const handleReservation = (reservation) => {
    setReservations([...reservations, reservation]);
  };

  return (
    <div>
      <p>Formulaire</p>
      <Reservations handleReservation={handleReservation} />
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
