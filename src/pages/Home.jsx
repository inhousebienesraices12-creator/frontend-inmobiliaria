// Página principal del sistema inmobiliario

function Home() {

  const propiedades = [
    {
      imagen: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      titulo: "Casa Campestre",
      ciudad: "Pereira",
      precio: "$650.000.000"
    },

    {
      imagen: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      titulo: "Apartamento Central",
      ciudad: "Manizales",
      precio: "$320.000.000"
    },

    {
      imagen: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
      titulo: "Apartamento Luxury",
      ciudad: "Armenia",
      precio: "$420.000.000"
    },

    {
      imagen: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop",
      titulo: "Casa Moderna",
      ciudad: "Pereira",
      precio: "$980.000.000"
    }
  ]

  return (
    <>
      {/* HERO */}
      <section className="hero">

        <div className="overlay">

          <h1>
            Encuentra el hogar
            <br />
            que siempre soñaste
          </h1>

          <p>
            Explora nuestras propiedades en venta y arriendo
          </p>

          <div className="search-box">

            <input
              type="text"
              placeholder="Buscar ubicación, barrio o ciudad"
            />

            <select>
              <option>Tipo de inmueble</option>
            </select>

            <select>
              <option>Precio mínimo</option>
            </select>

            <button>Buscar</button>

          </div>

        </div>

      </section>

      {/* PROPIEDADES */}
      <section className="properties-section">

        <div className="section-title">
          <h2>Propiedades destacadas</h2>
        </div>

        <div className="properties-grid">

          {propiedades.map((propiedad, index) => (

            <div className="property-card" key={index}>

              <img
                src={propiedad.imagen}
                alt={propiedad.titulo}
              />

              <div className="property-info">

                <h3>{propiedad.titulo}</h3>

                <p className="city">
                  {propiedad.ciudad}
                </p>

                <h4>{propiedad.precio}</h4>

              </div>

            </div>

          ))}

        </div>

      </section>
    </>
  )
}

export default Home