function ContactPicker(props) {
    return (
        <select onChange={(e) => props.setContact(e.target.value)}>
            <option value="">--No Contact Selected--</option>
            {props.contacts.map((contact) => (
                <option value={contact.name}>
                    {contact.name}
                </option>
            ))}
        </select>
    );
};

export default ContactPicker;