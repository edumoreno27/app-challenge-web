import EvaluacionService from "../services/Evaluacion";
const evaluacionService = new EvaluacionService();

test("Registrar evaluación", async () => {
  const data = await evaluacionService.RegistrarEvaluacion(    
    {
        "calificacion": 6,
        "comentario": "Regular!",
        "correo": "test10@evaluacion.com",
        "nombres": "Test 11"
      }
  );

  expect(data.status).toBe(201);
});
