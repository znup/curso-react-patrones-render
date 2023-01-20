import { useState } from 'react';

// const withStorageListener = (WrappedComponent) => {
//   return function WrappedComponentWithStorageListener(props) {
//     const [storageChange, setStorageChange] = useState(false);
//     window.addEventListener('storage', (change) => {
//       if (change.key === 'TODOS_V1') {
//         console.log('Cambios en V1');
//         setStorageChange(true);
//       }
//     });

//     const toggleShow = () => {
//       props.sincronize();
//       setStorageChange(false);
//     };

//     return <WrappedComponent show={storageChange} toggleShow={toggleShow} />;
//   };
// };

// export { withStorageListener };

const useStorageListener = (props) => {
  const [storageChange, setStorageChange] = useState(false);
  window.addEventListener('storage', (change) => {
    if (change.key === 'TODOS_V1') {
      console.log('Cambios en V1');
      setStorageChange(true);
    }
  });

  const toggleShow = () => {
    props.sincronize();
    setStorageChange(false);
  };

  return {
    show: storageChange,
    toggleShow,
  };
};

export { useStorageListener };
