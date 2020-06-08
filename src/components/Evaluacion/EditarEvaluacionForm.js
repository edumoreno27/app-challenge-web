import React, {  Fragment } from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useInputValue } from "../../hooks/useInputValue";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

export const EditarEvaluacionForm = ({
  onSubmit,
  success,
  error,
  evaluacion,
}) => {
  const calificaciones = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const [calificacion, setCalificacion] = React.useState(
    evaluacion.calificacion
  );
  console.log(evaluacion);
  const handleChange = (event) => {
    setCalificacion(event.target.value);
  };
  const nombreInput = useInputValue(evaluacion.nombres);
  const correoInput = useInputValue(evaluacion.correo);
  const comentarioInput = useInputValue(evaluacion.comentario);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      calificacion: calificacion,
      comentario: comentarioInput.value,
      correo: correoInput.value,
      nombres: nombreInput.value,
    });
  };

  return (
    <Fragment>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md="6">
            <h3>Actualizar una evaluación</h3>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="4">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su nombre"
                {...nombreInput}
              />
            </Form.Group>
          </Col>
          <Col md="4">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su correo"
                {...correoInput}
              />
            </Form.Group>
          </Col>
          <Col md="4">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Comentario</Form.Label>
              <textarea
                className="form-control"
                rows="2"
                {...comentarioInput}
                placeholder="Ingrese un comentario"
              ></textarea>
            </Form.Group>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="12" className="text-center">
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="position"
                name="position"
                defaultValue="top"
                value={calificacion}
                onChange={handleChange}
              >
                {calificaciones.map((valueArray, index, array) => {
                  return (
                    <FormControlLabel
                      key={valueArray}
                      value={valueArray}
                      label={valueArray}
                      control={<Radio color="default" />}
                      labelPlacement="bottom"
                    ></FormControlLabel>
                  );
                })}
              </RadioGroup>
            </FormControl>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="12" className="text-center">
            {error && <label className="text-danger">{error}</label>}
            {success && <label className="text-success">{success}</label>}
          </Col>
        </Row>
        <Row>
          <Col md="12" className="text-center">
            <Link to="/" className="btn btn-secondary mt-4 mr-2">
              Volver
            </Link>
            <Button variant="primary" type="submit" className="mt-4">
              Actualizar
            </Button>
          </Col>
        </Row>
      </Form>
    </Fragment>
  );
};
