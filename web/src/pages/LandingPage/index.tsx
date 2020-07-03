import React, { useState, useEffect, ChangeEvent } from 'react';
import api from '../../services/api';

import './style.css'
import logo from '../../assets/logo.svg';

interface Plan {
  id: number;
  name: string;
  free_minutes: number;
  fee: number;
}

interface FeeObject {
  id: number;
  origin: string;
  receiver: string;
  fee_per_minute: number;
}


const LandingPage = () => {
  const [origins, setOrigins] = useState<String[]>([]);
  const [receivers, setReceivers] = useState<String[]>([]);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [fees, setFees] = useState<FeeObject[]>([]);
  const [time, setTime] = useState<Number>(1);

  const [selectedOrigin, setSelectedOrigin] = useState<String>();
  const [selectedReceiver, setSelectedReceiver] = useState<String>();
  const [selectedPlan, setSelectedPlan] = useState<Plan>();

  const [comFaleMais, setComFaleMais] = useState<Number>(1);
  const [semFaleMais, setSemFaleMais] = useState<Number>(1);

  useEffect(() => {
    api.get('/origins').then(response => {
      const sortedData = response.data.sort()
      setOrigins(sortedData)
    })
  }, []);

  useEffect(() => {
    api.get('/receivers').then(response => {
      const sortedData = response.data.sort()
      setReceivers(sortedData)
    })
  }, []);

  useEffect(() => {
    api.get('/plans').then(response => {
      const sortedData = response.data.sort();
      setPlans(sortedData);
    })
  }, []);

  useEffect(() => {
    api.get('/fees').then(response => {
      setFees(response.data);
    })
  }, []);

  useEffect(() => {
    //Só exibe as os destinos disponíveis para a origem escolhida
    let availableReceivers: String[] = [];
    fees.map(fee => {
      if (fee.origin === selectedOrigin) availableReceivers.push(fee.receiver)
    })
    setReceivers(availableReceivers)
  }, [selectedOrigin]);

  function handleSelectedOrigin(e: ChangeEvent<HTMLSelectElement>) {
    //Js automaticamente remove o 0 de 011 por ex, então tenho que colocar ele de volta 
    setSelectedOrigin('0' + e.target.value);
  }

  function handleSelectedReceiver(e: ChangeEvent<HTMLSelectElement>) {
    setSelectedReceiver('0' + e.target.value);
  }

  function handleSelectedPlan(e: ChangeEvent<HTMLSelectElement>) {
    let plan = plans.find(plan => (plan.id === Number(e.target.value)))
    console.log(plan);
    setSelectedPlan(plan);
  }

  function handleChangeTime(e: ChangeEvent<HTMLInputElement>) {
    setTime(Number(e.target.value));
  }
  function valorCom() {
    let freeMinutes = Number(selectedPlan?.free_minutes);
    let fee = Number(selectedPlan?.fee);
    let callTime = Number(time);

    let planFee = fees.find(element => ((selectedOrigin === element.origin) && (selectedReceiver === element.receiver)))
    let fixedFee = Number(planFee?.fee_per_minute) + (Number(planFee?.fee_per_minute) * fee);

    if (callTime > freeMinutes) {
      let minutes = (callTime - freeMinutes);
      let price = (minutes * fixedFee);
      return (price);
    } else {
      return 0;
    }
  }

  function valorSem() {
    let callTime = Number(time);
    let plan = fees.find(element => ((selectedOrigin === element.origin) && (selectedReceiver === element.receiver)))
    console.log(callTime * Number(plan?.fee_per_minute));
    return callTime * Number(plan?.fee_per_minute);
  }
  function handleSubmit() {
    setSemFaleMais(valorSem());
    setComFaleMais(valorCom());
  }

  return (
    <>
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
            <table>
              <tbody>
                <tr>
                <tr>
                  <th>Origem</th>
                  <th>Destino</th>
                  <th>Tempo de ligação</th>
                  <th>Plano FaleMais</th>
                  <th>Com FaleMais</th>
                  <th>Sem FaleMais</th>
                </tr>
                <tr>
                  <td><select onChange={handleSelectedOrigin}>
                    <option value="0">Origem</option>
                    {origins.map(origin => (
                      <option key={Number(origin)} value={Number(origin)}>{origin}</option>
                    ))}
                  </select></td>

                  <td><select onChange={handleSelectedReceiver}>
                    <option value="0">Destino</option>
                    {receivers.map(receiver => (
                      <option key={Number(receiver)} value={Number(receiver)}>{receiver}</option>
                    ))}
                  </select></td>

                  <td><input value={String(time)} type="number" min="1" onChange={handleChangeTime} /></td>

                  <td><select onChange={handleSelectedPlan}>
                    <option value="0">Escolha seu plano</option>
                    {plans.map(plan => (
                      <option key={plan.id} value={plan.id}>{plan.name}</option>
                    ))}
                  </select></td>

                  <td><p>
                    R$ {comFaleMais}
                  </p></td>
                  <td><p>R$ {semFaleMais}</p></td>
                </tr>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>
                    <div className="btn-form">
                      <button onClick={handleSubmit}>Simular</button>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </main>
        </div>
      </div>
      <footer>
        <span>Developt by <a href="https://github.com/douglaschalegre">@douglaschalegre</a> 🎔</span> 
        </footer>
    </>
  )
}

export default LandingPage;