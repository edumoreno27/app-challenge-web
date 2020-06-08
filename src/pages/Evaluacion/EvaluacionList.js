import React, { useState, Fragment } from "react";
import Row from "react-bootstrap/Row";
import SweetAlert from "../../components/SweetAlert";
import PageLoading from '../../components/PageLoading';
import EvaluacionService from "../../services/Evaluacion";
import Layout from "../../components/Shared/Layout";
import { BuscarEvaluacionForm } from "../../components/Evaluacion/BuscarEvaluacionForm";
import { EvaluacionTabla } from "../../components/Evaluacion/TablaEvaluacion";

const sweetAlert = new SweetAlert();
const evaluationService = new EvaluacionService();

class EvaluacionList extends React.Component {
  // const EvaluacionList = (props) => {
  state = {
    loading: true,
    list: [],
  };

  convertDate = (inputFormat) => {
    function pad(s) {
      return s < 10 ? "0" + s : s;
    }
    var d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("/");
  };

  fetchData = async (fechainicio, fechafin) => {
    this.setState({ loading: true });
    const data = await evaluationService.ObtenerEvaluaciones(
      fechainicio,
      fechafin
    );
    if (data.status == 200) {
        this.setState({ loading: false });
      this.setState({ list: data.response });
    } else {
        this.setState({ loading: false });
      this.setState({ list: [] });
    }
  };

  onSubmit = async (input) => {
    await this.fetchData(input.fechaInicio, input.fechaFin);
  };


  componentDidMount() {
    this.fetchData(this.convertDate(new Date()),this.convertDate(new Date()));    
  } 

  render() {
    if (this.state.loading === true) {
      return <PageLoading />;
    }

    return (
      <Fragment>
        <Layout>
          <BuscarEvaluacionForm onSubmit={this.onSubmit} />

          <Row className="mt-4" style={{padding:10}}>
            <EvaluacionTabla lista={this.state.list} />
          </Row>
        </Layout>
      </Fragment>
    );
  }
}

export default EvaluacionList;
