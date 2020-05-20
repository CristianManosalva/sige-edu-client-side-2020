// SelectCourseModal.jsx
import React, { useState } from 'react';
import ReactJoyride from 'react-joyride';

// Tour steps
const SelectCourseModal = () => {
  const [joyride, setJoyride] = useState({
    run: false,
    steps: [
      {
        title: <div><h6>El hombre que es un maestro de la paciencia es un maestro de todo lo demás (George Saville)</h6></div>,
        target: "body",
        placement: "center",
        content: <div><h4>Vamos a seleccionar una Asignatura.</h4><p>Arranquemos...!!  </p></div>,
        disableBeacon: true,
        locale: { back: 'Atras', close: 'Cerrar', last: 'Último', next: 'Siguiente', skip: 'Omitir' }
      },
      {
        title: "Selecciona una Asignatura...",
        target: ".col-4",
        content: "Aquí, encontrarás los cursos de tu asignación académica.",
        locale: { back: 'Atras', close: 'Cerrar', last: 'Último', next: 'Siguiente', skip: 'Omitir' }
      },
      {
        title: "Asignatura",
        target: ".col-4",
        content: "Nos indica la asignatura que hemos seleccionado",
        locale: { back: 'Atras', close: 'Cerrar', last: 'Último', next: 'Siguiente', skip: 'Omitir' }
      },
      {
        title: "Conocer las actividades",
        target: ".groupsCharge",
        content: "Seleccionamos el grupo, para conocer las actividades creadas.",
        locale: { back: 'Atras', close: 'Cerrar', last: 'Último', next: 'Siguiente', skip: 'Omitir' }
      },
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
export default SelectCourseModal;