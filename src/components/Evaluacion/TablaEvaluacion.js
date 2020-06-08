import React, { useState } from "react";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";
import SweetAlert from "../SweetAlert";
import Table from "react-bootstrap/Table";

export const EvaluacionTabla = (props) => {
  // function EvaluacionTabla(props) {
  return (
    <React.Fragment>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Calificación</th>
            <th>Fecha Evaluación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {props.lista.map((evaluacion, index) => {
            return (
              <tr key={index}>
                <td>{evaluacion.nombres}</td>
                <td>{evaluacion.correo}</td>
                <td>{evaluacion.calificacion}</td>
                <td>{evaluacion.registroEval}</td>
                <td className="text-center">
                  <Link
                    className="btn btn-primary"
                    to={`/editarevaluacion/${evaluacion.id}`}
                  >
                    Editar
                  </Link>
                  &nbsp;&nbsp;
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </React.Fragment>
  );
};

// export default EvaluacionTabla;
