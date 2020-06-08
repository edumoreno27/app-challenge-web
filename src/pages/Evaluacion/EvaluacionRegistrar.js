import React, {  Fragment } from "react";
import PageLoading from "../../components/PageLoading";

import EvaluacionService from "../../services/Evaluacion";
import Layout from "../../components/Shared/Layout";
import { RegistrarEvaluacionForm } from "../../components/Evaluacion/RegistrarEvaluacionForm";
import validarCampos from "./Validar";
import SweetAlert from "../../components/SweetAlert";
const sweetAlert = new SweetAlert();
const evaluationService = new EvaluacionService();
class EvaluacionRegistrar extends React.Component {
  state = {
    loading: false,
    success: null,
    error: null,
  };

  registrarEvaluacion = async (data) => {
    const [valid, message] = validarCampos(data);
    console.log(data);
    if (valid) {
      this.setState({ loading: true });
      const dataResponse = await evaluationService.RegistrarEvaluacion(data);
      if (dataResponse.status === 201) {
        this.setState({ loading: false});
        sweetAlert.alertSuccess("Evaluación registrada correctamente", () =>
        this.props.history.push("/")
      );
      } else {
        this.setState({ loading: false, error: dataResponse.message });
      }
    } else {
      this.setState({ error: message });
    }
  };

  onSubmit = async (input) => {
    await this.registrarEvaluacion(input);
  };

  render() {
    if (this.state.loading === true) {
      return <PageLoading />;
    }

    return (
      <Fragment>
        <Layout>
          <RegistrarEvaluacionForm
            onSubmit={this.onSubmit}
            success={this.state.success}
            error={this.state.error}
          />
        </Layout>
      </Fragment>
    );
  }
}

export default EvaluacionRegistrar;
