import EvaluacionService from "../services/Evaluacion";
const evaluacionService = new EvaluacionService();

test("Lista de evaluaciones", async () => {
  const data = await evaluacionService.ObtenerEvaluaciones(
    "01/01/2020",
    "31/12/2020"
  );
  
  const response=data.response;
  expect(data.status).toBe(200);
  expect(Array.isArray(response)).toBe(true);
});
