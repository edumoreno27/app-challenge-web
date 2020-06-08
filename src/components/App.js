import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import EvaluacionList from "../pages/Evaluacion/EvaluacionList";
import EvaluacionRegistrar from "../pages/Evaluacion/EvaluacionRegistrar";
import EvaluacionEditar from "../pages/Evaluacion/EvaluacionEditar";

import NotFound from "../pages/NotFound";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={EvaluacionList} />
        <Route exact path="/registrarevaluacion" component={EvaluacionRegistrar} />
        <Route exact path="/editarevaluacion/:Id" component={EvaluacionEditar} />
        
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter> 
  );
}

export default App;
