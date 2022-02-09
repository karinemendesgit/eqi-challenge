import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify'

function App() {
  const { register, handleSubmit, formState: { isDirty, isValid} } = useForm({
    mode:'onChange',
  });
  const onSubmit = data => console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simulador de Investimentos</h1>
      </header>
        <main>
          <h2>Simulador</h2>
          <div className='columns'>
            <div className='leftSide'>
              <div className='title'>
                <p>Rendimento</p>
                <FontAwesomeIcon icon={faCircleInfo} className="info"/>             
              </div>
              <div className='checkbox'>  
                <button>            
                  <input type="radio"></input>
                  <label htmlFor="">Bruto</label>
                  <input type="radio"></input>
                  <label htmlFor="">Líquido</label>
                </button>
              </div>
              <div className='form'>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                  <label htmlFor="">Aporte Inicial</label>
                  <input type="text"
                    {...register("Aporte Inicial", {required: true, min: 3, maxLength: 10, pattern: /value: ^R\$(\d{1,3}(\.\d{3})*|\d+)(\,\d{2})?$/i})} 
                  />
                  <label htmlFor="">Prazo (em meses)</label>
                  <input type="number" 
                    {...register("Prazo (em meses)", {required: true, min: 1, maxLength: 2})} 
                  />
                  <label htmlFor="">IPCA (ao ano)</label>
                  <input type="number" 
                    {...register("IPCA (ao ano)", {required: true, min: 1, maxLength: 5, pattern: /value: ^\d{1,3}\%$/i})} 
                  />
                </form>              
              </div>
            </div>            
          <div className='rightSide'>
            <div className='title'>
              <p>Tipos de indexação</p>
              <FontAwesomeIcon icon={faCircleInfo} className="info" />             
            </div>
            <div className='checkbox'>
              <button>PRÉ</button>
              <button>PÓS</button>
              <button>FIXADO</button>
            </div>
            <div className='form'>
              <form action="">
                <label htmlFor="">Aporte Mensal</label>
                <input type="text" />
                <label htmlFor="">Rentabilidade</label>
                <input type="text" />
                <label htmlFor="">CDI (ao ano)</label>
                <input type="text" />
              </form>              
            </div>
          </div>
        </div>
        <div className='buttons'>
          <button className='leftButton'>Limpar campos</button>
          <button 
            type='submit' 
            className='rightButton' 
            disabled={!isDirty || !isValid}>
              Simular
          </button>
        </div>
      </main>      
    </div>
  );
}

export default App;
