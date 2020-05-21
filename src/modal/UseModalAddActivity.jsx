import React, { useState } from 'react';
import ReactJoyride from 'react-joyride';

// Tour steps
const UseModalAddActivity = () => {
  const [joyride, setJoyride] = useState({
    run: false,
    steps: [
      {
        title: <div>Crear Una Actividad</div>,
        target: "body",
        placement: "center",
        content: <div><h4>Vamos a crear una actividad.</h4><p>Arranquemos...!!  :) </p></div>,
        disableBeacon: true,
        locale: { back: 'Atras', close: 'Cerrar', last: 'Último', next: 'Siguiente', skip: 'Omitir' }
      },
      {
        title: "Presiona el Botón",
        target: ".material-icons",
        content: "Se abrirá una nueva ventana.",
        locale: { back: 'Atras', close: 'Cerrar', last: 'Último', next: 'Siguiente', skip: 'Omitir' }
      }
    ]
  });

  return (
    <ReactJoyride
      steps={joyride.steps}
      run={true}
      showProgress
      continuous={true}
      showSkipButton={true}
      debug={true}
      type="single"
    />)
};
export default UseModalAddActivity;