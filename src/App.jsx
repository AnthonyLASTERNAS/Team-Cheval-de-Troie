
import Home from './pages/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ReservationForm from './ReservationForm';

function App() {
  const [reservations, setReservations] = useState([]);

  const handleReservation = (reservation) => {
    setReservations([...reservations, reservation]);
  };

  return (
    <div>
      <h1>Mon application de réservation</h1>
      <ReservationForm handleReservation={handleReservation} />
      <ul>
        {reservations.map((reservation, index) => (
          <li key={index}>
            {reservation.nom} ({reservation.email}) - {reservation.dateReservation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;