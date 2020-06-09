import EvaluacionService from "../services/Evaluacion";
const evaluacionService = new EvaluacionService();

test("Obtener evaluación", async () => {
  const data = await evaluacionService.ObtenerEvaluacion(
    "5edd9d18e4b7976fbbb4a451"
  );
  const response = data.response;
  expect(response.id).toBe("5edd9d18e4b7976fbbb4a451");
});

test("Editar evaluación", async () => {
  const data = await evaluacionService.ActualizarEvaluacion(
    "5edd9d18e4b7976fbbb4a451",
    {
      calificacion: 10,
      comentario: "Muy Bueno!",
      correo: "test@evaluacion.com",
      nombres: "test test",
    }
  );

  expect(data.status).toBe(200);
});
