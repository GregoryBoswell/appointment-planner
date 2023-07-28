import React, { useState } from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ContactsPage from './pages/ContactsPage';
import AppointmentsPage from './pages/AppointmentsPage';

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  function addContacts(name, phone, email) {
    setContacts((prev) => [{
      name: name,
      phone: phone,
      email: email,
    }, ...prev]);
  };

  function addAppointments(name, contact, date, time) {
    setAppointments((prev) => [{
      name: name,
      contact: contact,
      date: date,
      time: time,
    }, ...prev]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/appointments' />} />
        <Route path='appointments' element={<AppointmentsPage contacts={contacts} appointments={appointments} addAppointments={addAppointments} />} />
        <Route path='contacts' element={<ContactsPage contacts={contacts} addContacts={addContacts} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
