import ContactPicker from "./ContactPicker";
import getTodayString from "./Date/Date"

function AppointmentForm(props) {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <label>Appointment Name:</label>
                <input 
                    type="text" 
                    value={props.name}
                    onChange={(e) => props.setName(e.target.value)} />
                <label>Date:</label>
                <input 
                    type="date"
                    value={props.date}
                    min={getTodayString()}
                    onChange={(e) => props.setDate(e.target.value)} />
                <label>Time:</label>
                <input 
                    type="time"
                    value={props.time}
                    onChange={(e) => props.setTime(e.target.value)} />
                <label>Contact:</label>
                <ContactPicker contacts={props.contacts} 
                               contact={props.contact} 
                               setContact={props.setContact}/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AppointmentForm;