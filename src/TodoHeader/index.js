// import { TodoCounter } from '../TodoCounter';
// import { TodoSearch } from '../TodoSearch';

import { Children, cloneElement } from 'react';

// const TodoHeader = ({
//   totalTodos,
//   completedTodos,
//   searchValue,
//   setSearchValue,
// }) => {
//   return (
//     <header>
//       <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
//       <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
//     </header>
//   );
// };

const TodoHeader = ({ children, loading }) => {
  return (
    <header>
      {Children.toArray(children).map((child) =>
        cloneElement(child, { loading })
      )}
    </header>
  );
};

export { TodoHeader };
