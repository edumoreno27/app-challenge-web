import React, {  Fragment } from "react";
import PageLoading from "../../components/PageLoading";

import EvaluacionService from "../../services/Evaluacion";
import Layout from "../../components/Shared/Layout";
import { EditarEvaluacionForm } from "../../components/Evaluacion/EditarEvaluacionForm";
import validarCampos from "./Validar";
import SweetAlert from "../../components/SweetAlert";
const sweetAlert = new SweetAlert();
const evaluationService = new EvaluacionService();
class EvaluacionEditar extends React.Component {
  state = {
    loading: false,
    success: null,
    error: null,
    evaluacionId: this.props.match.params.Id,
    evaluacion: {},
  };

  fetchData = async () => {
    this.setState({ loading: true });
    const data = await evaluationService.ObtenerEvaluacion(
      this.state.evaluacionId
    );
    if (data.status === 200) {
      this.setState({ evaluacion: data.response });
      this.setState({ loading: false });
    } else {
      this.setState({ evaluacion: {} });
      this.setState({ loading: false });
    }
  };

  componentDidMount() {
    this.fetchData(this.state.evaluacionId);
  }

  actualizarEvaluacion = async (data) => {
    const [valid, message] = validarCampos(data);
    console.log(data);
    if (valid) {
      this.setState({ loading: true });
      const dataResponse = await evaluationService.ActualizarEvaluacion(
        this.state.evaluacionId,
        data
      );
      if (dataResponse.status === 200) {
        this.setState({ loading: false });
        sweetAlert.alertSuccess("Evaluación actualizada correctamente", () =>
          this.props.history.push("/")
        );
        // window.location.reload();
      } else {
        this.setState({ loading: false, error: dataResponse.message });
      }
    } else {
      this.setState({ error: message });
    }
  };

  onSubmit = async (input) => {
    await this.actualizarEvaluacion(input);
  };

  render() {
    if (this.state.loading === true) {
      return <PageLoading />;
    }

    return (
      <Fragment>
        <Layout>
          <EditarEvaluacionForm
            evaluacion={this.state.evaluacion}
            onSubmit={this.onSubmit}
            success={this.state.success}
            error={this.state.error}
          />
        </Layout>
      </Fragment>
    );
  }
}

export default EvaluacionEditar;
