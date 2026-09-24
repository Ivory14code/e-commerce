import "./Contact.css";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Se envió tu mensaje: " + event.target.name.value);

    console.log("Nombre:", event.target.name.value);
    console.log("Email:", event.target.email.value);
    console.log("Mensaje:", event.target.message.value);

    event.target.reset();
  };

  return (
    <div className="contact">
      <h2>Contacto</h2>

      <p>¿Tenés alguna consulta? Escribinos y te responderemos a la brevedad.</p>

      <div className="contact-info">
        <p>Email: info@hotmail.com</p>
        <p>Teléfono: 1234567890</p>
        <p>Dirección: Calle 123, Ciudad</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Ingresá tu nombre"
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Ingresá tu email"
          required
        />

        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Escribí tu consulta"
          required
        ></textarea>

        <button type="submit">Enviar mensaje</button>
      </form>
    </div>
  );
};

export default Contact;
