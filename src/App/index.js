import { ChangeAlert } from '../ChangeAlert';
import { CreateTodoButton } from '../CreateTodoButton';
import { EmptyTodos } from '../EmptyTodos';
import { Modal } from '../Modal';
import { TodoCounter } from '../TodoCounter';
import { TodoForm } from '../TodoForm';
import { TodoHeader } from '../TodoHeader';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { useTodos } from './useTodos';

function App() {
  const { states, stateUpdaters } = useTodos();

  const {
    error,
    loading,
    searchedTodos,
    totalTodos,
    completeTodo,
    completedTodos,
    openModal,
    searchValue,
  } = states;

  const { deleteTodo, addTodo, setOpenModal, setSearchValue, sincronizeTodos } =
    stateUpdaters;

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchText={searchValue}
        searchedTodos={searchedTodos}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => (
          <p> No hay resultados para {searchText}</p>
        )}
        // render={(todo) => (
        //   <TodoItem
        //     key={todo.text}
        //     text={todo.text}
        //     completed={todo.completed}
        //     onComplete={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)}
        //   />
        // )}
      >
        {(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />

      <ChangeAlert sincronize={sincronizeTodos} />
    </>
  );
}

export default App;
