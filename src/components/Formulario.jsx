import { useState } from "react"
import useClima from "../hooks/useClima"

export default function Formulario() {

  const [alerta, setAlerta] = useState('')

  const { datos, setDatos, cambioDatos, consultarClima } = useClima()

  const handleSubmit = e => {
    e.preventDefault()

    if (Object.values(datos).includes('')) {
      setAlerta('Todos los campos son obligatorios')
      return
    }

    setAlerta('')
    consultarClima(datos)

  }

  return (
    <div className="contenedor">

      {alerta && <p>{alerta}</p>}

      <form
        onSubmit={handleSubmit}
      >
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input
            type="text"
            name="ciudad"
            id="ciudad"
            onChange={cambioDatos}
            value={datos.ciudad}
          />
        </div>
        <div className="campo">
          <label htmlFor="país">País</label>
          <select
            name="pais"
            id="pais"
            onChange={cambioDatos}
            value={datos.pais}
          >
            <option value="">Seleccione un país</option>
            <option value="US">Estado Unidos</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="BR">Brasil</option>
            <option value="CO">Colombia</option>
            <option value="CL">Chile</option>
            <option value="PE">Perú</option>
            <option value="EC">Ecuador</option>
            <option value="BO">Bolivia</option>
            <option value="VE">Venezuela</option>
          </select>
        </div>
        <input
          type="submit"
          value="Consultar clima"
        />
      </form>
    </div>
  )
}
