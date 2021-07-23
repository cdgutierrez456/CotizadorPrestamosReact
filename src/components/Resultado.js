import React from 'react';

const Resultado = ({total, cantidad, plazo}) => {
    return (
        <div className="u-full-width resultado">
            <h2>Resumen</h2>
            <p>La cantidad solicitada es: $ {cantidad}</p>
            <p>A pagar en: {plazo} Meses</p>
            <p>Su pago mensual es de: ${Math.ceil(total / plazo)}</p>
            <p>Total a pagar: $ {(total).toFixed(2)}</p>
        </div>
    );
}

export default Resultado;
