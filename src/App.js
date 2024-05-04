import './App.css';

function App() {
  return (
    <div className="form_container">
      <div className="form_header">
      <div className="form_title">
        <h1>Mi Primer Formulario</h1>
      </div>
      </div>
      <div className='form_body'>
        <div className='form'>
          <label className='form_label'>
            Nombres y Apellidos:
          </label>
          <div className="form_input-ico">
            <i className="fa fa-user form_ico" aria-hidden="true">
              <input className="form_input"
              id='nomnbre_apellido'
              name='nombre_apellido'>
              </input>
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
