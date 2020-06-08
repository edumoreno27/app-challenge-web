import React, { useState, Fragment } from 'react';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

class SweetAlert {

    alertSuccess(message, redirect) {
        MySwal.fire({
            title: '¡Éxito!',
            icon: 'success',
            text: message,
            timer: 1800,
            onOpen: () => {
            }
        }).then(() => {
            redirect();
        })
    }

    alertLoading() {
        MySwal.fire({
            title: 'Cargando...',
            onOpen: () => {
                MySwal.showLoading();
            }
        })
    }

    alertError(message) {
        MySwal.fire({
            title: '¡Error!',
            icon: 'error',
            text: message,
            timer: 1800,
            onOpen: () => {
            }
        })
    }

    alertWarning(message) {
        MySwal.fire({
            title: '¡Advertencia!',
            icon: 'warning',
            text: message,
            // timer: 1800,
            onOpen: () => {
            }
        })
    }

    cerrarAlert() {
        MySwal.close();
    }
}

export default SweetAlert;