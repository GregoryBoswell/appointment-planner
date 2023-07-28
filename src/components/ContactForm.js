function ContactForm(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <label>Contact Name:</label>
                <input
                    type="text"
                    value={props.name}
                    onChange={(e) => props.setName(e.target.value)} />
                <label>Telephone:</label>
                <input
                    type="tel"
                    value={props.tel}
                    onChange={(e) => props.setTel(e.target.value)} />
                <label>Email:</label>
                <input
                    type="email"
                    value={props.email}
                    onChange={(e) => props.setEmail(e.target.value)} />
                <input type="submit" />
            </form>
            <p id="name-warning">*This name is already in your contacts</p>
        </div>
    );
};

export default ContactForm;