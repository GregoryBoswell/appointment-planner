import { useState } from "react";
import { Link } from "react-router-dom";
import TileList from "../components/TileList/TileList"
import AppointmentForm from "../components/AppointmentForm";

function AppointmentsPage(props) {
    const [name, setName] = useState();
    const [contact, setContact] = useState();
    const [date, setDate] = useState();
    const [time, setTime] = useState();

    function handleSubmit(event) {
        if (name && contact && date && time) {
            props.addAppointments(name, contact, date, time);
            setName('');
            setContact('');
            setDate('');
            setTime('');
        }
        event.preventDefault();
    };

    return (
        <div>
            <h1>Appointments Page</h1>
            <nav>
                <Link to='/contacts' className="link"><i class="arrow left"/>Contacts</Link>
            </nav>
            <section>
                <h2>Add appointment</h2>
                <AppointmentForm 
                    name={name} setName={setName}
                    contact={contact} setContact={setContact}
                    date={date} setDate={setDate}
                    time={time} setTime={setTime}
                    contacts={props.contacts}
                    handleSubmit={handleSubmit} />
            </section>
            <section>
                <h2>Appointments</h2>
                <TileList array={props.appointments}/>
            </section>
        </div>
    );
};

export default AppointmentsPage;