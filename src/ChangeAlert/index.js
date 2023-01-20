import { useStorageListener } from './useStorageListener';
import './ChangeAlert.css';

const ChangeAlert = ({ sincronize }) => {
  const { show, toggleShow } = useStorageListener(sincronize);

  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>
            Parece que cambiaste tus TODOs en otra pestaña o ventana del
            navegador.
          </p>
          <p>¿Quieres sincronizar tus TODOs?</p>
          <button
            className="TodoForm-button TodoForm-button--add"
            onClick={toggleShow}
          >
            Si!
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }

  // return (
  //   (show && (
  //     <div>
  //       <p>Hubo un cambio</p>
  //       <button onClick={() => toggleShow(false)}>Cargar de nuevo</button>
  //     </div>
  //   )) ||
  //   null
  // );
};

export { ChangeAlert };
