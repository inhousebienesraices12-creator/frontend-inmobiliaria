// Componente barra de navegación

function Navbar() {

  return (

    <nav className="navbar">

      <div className="logo">

        <h1>INHOUSE</h1>

        <p>BIENES RAÍCES SAS</p>

      </div>

      <ul>
        <li>Inicio</li>
        <li>Ventas</li>
        <li>Arriendos</li>
        <li>Nosotros</li>
        <li>Contacto</li>
      </ul>

      <button className="publish-btn">
        Publicar Propiedad
      </button>

    </nav>

  )

}

export default Navbar