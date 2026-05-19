function Contact() {

  return (

    <section className="contact">

      <h2>Contacto</h2>

      <form className="contact-form">

        <input type="text" placeholder="Nombre" />

        <input type="email" placeholder="Correo" />

        <textarea placeholder="Mensaje"></textarea>

        <button>Enviar</button>

      </form>

    </section>

  )

}

export default Contact