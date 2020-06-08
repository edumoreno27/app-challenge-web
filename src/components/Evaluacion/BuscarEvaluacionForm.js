import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DateFnsUtils from "@date-io/date-fns";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export const BuscarEvaluacionForm = ({ onSubmit }) => {
  const [fechaInicio, setFechaInicio] = useState(new Date().toISOString());
  const [fechaFin, setFechaFin] = useState(new Date().toISOString());

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      fechaInicio: convertDate(fechaInicio),
      fechaFin: convertDate(fechaFin),
    });
  };

  const convertDate = (inputFormat) => {
    function pad(s) {
      return s < 10 ? "0" + s : s;
    }
    var d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("/");
  };


  const fechaInicioChange = (date) => {
    setFechaInicio(date.toISOString());
  };

  const fechaFinChange = (date) => {
    setFechaFin(date.toISOString());
  };

 
  return (
    <Fragment>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md="3">
            <Form.Group controlId="">
              <Form.Label style={{width:'100%'}}>Fecha Inicio</Form.Label>
              <MuiPickersUtilsProvider  utils={DateFnsUtils}>
                <KeyboardDatePicker
                  id="date-picker-dialog"                 
                  format="dd/MM/yyyy"
                  value={fechaInicio}
                  onChange={fechaInicioChange}
                  KeyboardButtonProps={{
                    "aria-label": "cambiar fecha",
                  }}
                />
              </MuiPickersUtilsProvider>
            </Form.Group>
          </Col>
          <Col md="3">
            <Form.Group controlId="">
              <Form.Label style={{width:'100%'}}>Fecha Fin</Form.Label>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  id="date-picker-dialog"                  
                  format="dd/MM/yyyy"
                  value={fechaFin}
                  onChange={fechaFinChange}
                  KeyboardButtonProps={{
                    "aria-label": "cambiar fecha",
                  }}
                />
              </MuiPickersUtilsProvider>
            </Form.Group>
          </Col>
          <Col md="6" className="text-right">
            <Button variant="primary" type="submit" className="mt-4">
              Buscar
            </Button>
            <Link to='/registrarevaluacion' className="btn btn-secondary mt-4 ml-2">Registrar</Link>
            
          </Col>
        </Row>
      </Form>
    </Fragment>
  );
};
