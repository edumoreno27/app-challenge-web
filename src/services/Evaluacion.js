import api from "../core/services/api.services";

class EvaluacionService {
  ObtenerEvaluaciones(fechaInicio, fechaFin) {
    const endpoint = `/evaluaciones?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`;
    return api.get(endpoint);
  }
  RegistrarEvaluacion(data) {
    const endpoint = `/evaluaciones`;
    return api.post(endpoint,data);
  }

  ObtenerEvaluacion(id){
    const endpoint = `/evaluaciones/${id}`;
    return api.get(endpoint);
  }

  ActualizarEvaluacion(id,data){
    const endpoint = `/evaluaciones/${id}`;
    return api.put(endpoint,data);
  }
}

export default EvaluacionService;
