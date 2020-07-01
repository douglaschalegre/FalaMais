import React from 'react';

import './style.css'
import logo from '../../assets/logo.svg';

const LandingPage = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <div>
            <img src={logo} alt="FalaMais" width="48" height="48" />
            <h2>FalaMais</h2>
          </div>
        </header>

        <main>
          <div className="page-text">
            <h1>Simulador de preços.</h1>
            <p>A Telzir, preocupada com a transparência junto aos seus clientes,
            disponibiliza o FalaMais. Aqui, o cliente pode escolher os códigos das cidades de origem e destino,
              o tempo da ligação em minutos e escolher qual o plano FaleMais para calcular os custos e se planejar de forma melhor.</p>
          </div>
          <div className="page-form">
            <div className="form-title">
              <h4>Origem</h4>
              <h4>Destino</h4>
              <h4>Tempo de ligação</h4>
              <h4>Plano FaleMais</h4>
              <h4>Com FaleMais</h4>
              <h4>Sem FaleMais</h4>
            </div>
            <div className="form-inputs">
              <input/>
              <input/>
              <input/>
              <input/>
              <input/>
              <input/>
            </div>
            <div className="btn-form">
              <button>Simular</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default LandingPage;