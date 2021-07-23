import React, {useState, Fragment} from 'react';
import {calcularTotal} from '../helpers';
import './Formulario.css';

const Formulario = (props) => {

    const {cantidad, guardarCantidad, plazo, guardarPlazo, total, guardarTotal, guardarCargando} = props;

    // Definiendo state local
    const [error, guardarError] = useState(false);

    // Capturando submit del formulario
    const calcularPrestamo = e => {
        e.preventDefault();

        // Validando los campos requeridos
        if(cantidad === 0 || plazo === '') {
            guardarError(true);
            return;
        }

        // Eliminando error previo
        guardarError(false);

        // Habilitando el spinner
        guardarCargando(true);

        setTimeout(() => {
            // Realizar cotizacion
            const total = calcularTotal(cantidad, plazo);
            
            // Guardando total
            guardarTotal(total);

            // Deshabilitar el spinner
            guardarCargando(false);
        }, 2000);

    }

    return (
        <Fragment>
            <form onSubmit={calcularPrestamo}>
                <div className="row">
                    <div>
                        <label>Cantidad Prestamo</label>
                        <input
                            className="u-full-width"
                            type="number"
                            placeholder="Ejemplo: 3000"
                            onChange={e => guardarCantidad(parseInt(e.target.value))}
                        />
                    </div>
                    <div>
                        <label>Plazo para Pagar</label>
                        <select
                            className="u-full-width"
                            onChange={e => guardarPlazo(parseInt(e.target.value))}
                        >
                            <option value="">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Calcular"
                            className="button-primary u-full-width"
                        />
                    </div>
                </div>
            </form>
            {(error) ? <p className="error">Todos los campos son Obligatorios</p> : ''}
            
        </Fragment>
    );
}

export default Formulario;

