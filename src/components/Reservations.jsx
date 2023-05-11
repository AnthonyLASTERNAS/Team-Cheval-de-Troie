import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';

function ReservationForm(props) {
  const [open, setOpen] = useState(false);
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [dateReservation, setDateReservation] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    const reservation = {
      nom: nom,
      email: email,
      dateReservation: dateReservation
    };
    
    props.handleReservations(reservation);
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Réserver
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Réserver une table</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="nom"
            label="Nom"
            type="text"
            fullWidth
            value={nom}
            onChange={(event) => setNom(event.target.value)}
          />
          <TextField
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            margin="dense"
            id="dateReservation"
            label="Date de réservation"
            type="date"
            fullWidth
            value={dateReservation}
            onChange={(event) => setDateReservation(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Annuler
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Réserver
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ReservationForm;
