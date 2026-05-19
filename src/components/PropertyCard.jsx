function PropertyCard({ titulo, precio, imagen }) {

  return (
    <div className="card">

      <img src={imagen} alt={titulo} />

      <h3>{titulo}</h3>

      <p>{precio}</p>

      <button>Ver más</button>

    </div>
  )
}

export default PropertyCard