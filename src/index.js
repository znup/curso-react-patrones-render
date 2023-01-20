import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/index.js';
import './index.css';

// const App = (props) => {
//   const { saludo, name } = props;
//   return (
//     <h2>
//       {saludo}, {name}
//     </h2>
//   );
// };

// const withSaludo = (WrappedComponent) => {
//   return function WrappedComponentWithSaludo(saludo) {
//     return function componentReal(props) {
//       return (
//         <>
//           <WrappedComponent {...props} saludo={saludo} />
//           <p>company with WrappedComponent</p>
//         </>
//       );
//     };
//   };
// };

// const withWhatever = (WrappedComponent) => {
//   return function componentReal(props) {
//     return (
//       <>
//         <WrappedComponent {...props} />
//         <p>company with WrappedComponent</p>
//       </>
//     );
//   };
// };

// const AppWithWhatever = withWhatever(App);
// const AppWithSaludo = withSaludo(App)('Hi');

ReactDOM.render(
  // <AppWithSaludo name="Nath" />,
  <App />,
  document.getElementById('root')
);
