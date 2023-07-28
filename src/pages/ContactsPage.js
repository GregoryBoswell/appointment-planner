import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ContactForm from "../components/ContactForm";
import TileList from "../components/TileList/TileList";

function ContactsPage(props) {
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (props.contacts.find(value => value.name === name)) {
            document.getElementById("name-warning").style.display = "block";
        } else {
            document.getElementById("name-warning").style.display = "none";
        }
    });

    function handleSubmit(event) {

        if (!(props.contacts.find(value => value.name === name))) {
            if ((name && tel && email))  {
                props.addContacts(name, tel, email);
                setName('');
                setTel('');
                setEmail('');
            }
        };

        event.preventDefault();
    };

    return (
        <div>
            <h1>Contacts Page</h1>
            <nav><Link to='/appointments' className='link'><i class="arrow left"/>Appointments</Link></nav>
            <h2>Add Contact</h2>
                <ContactForm 
                    contacts={props.contacts} addContacts={props.addContacts} 
                    name={name} setName={setName}
                    tel={tel} setTel={setTel}
                    email={email} setEmail={setEmail} 
                    handleSubmit={handleSubmit} />
            <h2>Contacts</h2>
                <TileList array={props.contacts} />
        </div>
    );
};

export default ContactsPage;