const validarCampos = (input) => {

    if (input.nombres.trim().length === 0) {
        return [false, 'Debe ingresar el campo de nombre'];
    } else if (input.correo.trim().length === 0) {
        return [false, 'Debe ingresar el campo de correo electrónico'];
    } else if (input.comentario.trim().length === 0) {
        return [false, 'Debe ingresar el campo de comentario'];
    }
    else if (input.calificacion.trim().length === 0) {
        return [false, 'Debe seleccionar una calificación'];
    }

    
    return [true, ''];
}

export default validarCampos;
